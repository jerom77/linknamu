import type { LinkItem } from "@/lib/links";

type Props = {
  link: LinkItem;
  count: number;
  onClick: () => void;
};

export default function LinkCard({ link, count, onClick }: Props) {
  // mailto:, tel: 등은 새 탭이 아니라 기본 앱(메일 클라이언트 등)으로 열리게 둡니다.
  const isExternalHttp = /^https?:\/\//i.test(link.url);

  return (
    <a
      href={link.url}
      target={isExternalHttp ? "_blank" : undefined}
      rel={isExternalHttp ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className="group relative flex items-center justify-center rounded-2xl border border-white/80 bg-white/60 px-12 py-4 text-center font-semibold text-[#4a3b31] ring-1 ring-[#7c4a2d]/[0.06] shadow-[0_16px_34px_-12px_rgba(124,74,45,0.5),inset_0_1px_0_0_rgba(255,255,255,0.85)] backdrop-blur-xl transition-[background-color,transform] duration-200 active:scale-[0.99] hover:bg-white/75"
    >
      <span className="truncate">{link.title}</span>
      <span
        className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-[#4a3b31]/45"
        aria-label={`클릭 ${count}회`}
        title={`클릭 ${count}회`}
      >
        {count.toLocaleString("ko-KR")}
      </span>
    </a>
  );
}
