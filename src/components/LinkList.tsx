"use client";

import { useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/lib/links";

type Props = {
  links: LinkItem[];
  initialCounts: Record<string, number>;
};

export default function LinkList({ links, initialCounts }: Props) {
  const [counts, setCounts] = useState<Record<string, number>>(initialCounts);

  function handleClick(id: string) {
    // 낙관적 업데이트: 화면 숫자를 먼저 올리고, 집계 요청을 보냅니다.
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

    try {
      fetch("/api/clicks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
        keepalive: true,
      }).catch(() => {});
    } catch {
      // 집계 실패는 링크 이동을 막지 않습니다.
    }
  }

  return (
    <nav className="flex w-full flex-col gap-3">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          link={link}
          count={counts[link.id] ?? 0}
          onClick={() => handleClick(link.id)}
        />
      ))}
    </nav>
  );
}
