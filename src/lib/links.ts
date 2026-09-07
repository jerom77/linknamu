export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  /** 비워두면 이름 첫 글자로 된 노란색 원형 아바타가 표시됩니다. */
  avatarUrl?: string;
};

export const profile: Profile = {
  name: "태권브이",
  bio: "달려라 달려 로보트야 날아라 날아 태권브이",
  avatarUrl: "/we_robot.jpg",
};

export const links: LinkItem[] = [
  { id: "github", title: "🐙 깃허브", url: "https://github.com/jerom77" },
  { id: "blog", title: "✍ 블로그", url: "https://blog.naver.com/tykil" },
  { id: "email", title: "📬 이메일", url: "mailto:tykil@naver.com" },
];
