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

// TODO: 실제 값으로 교체 (지금은 보여주기용 더미 데이터)
export const profile: Profile = {
  name: "제롬",
  bio: "태권브이",
  avatarUrl: "/avatar-placeholder.svg",
};

// TODO: 실제 링크로 교체 (지금은 보여주기용 더미 데이터)
export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://linkedin.com" },
  { id: "blog", title: "Blog", url: "https://example.com/blog" },
];
