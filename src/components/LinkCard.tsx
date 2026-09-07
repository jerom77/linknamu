import type { LinkItem } from "@/lib/links";

type Props = {
  link: LinkItem;
  count: number;
  onClick: () => void;
};

export default function LinkCard({ link, count, onClick }: Props) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="group relative flex items-center justify-center rounded-2xl bg-amber-200 px-10 py-4 text-center font-semibold text-amber-900 shadow-sm transition active:scale-[0.99] hover:bg-amber-300"
    >
      <span className="truncate">{link.title}</span>
      <span
        className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-amber-700/70"
        aria-label={`클릭 ${count}회`}
        title={`클릭 ${count}회`}
      >
        {count.toLocaleString("ko-KR")}
      </span>
    </a>
  );
}
