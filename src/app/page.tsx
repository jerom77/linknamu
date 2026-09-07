import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";
import { getClickCounts } from "@/lib/clicks";
import { links, profile } from "@/lib/links";

export const dynamic = "force-dynamic";

export default async function Home() {
  const counts = await getClickCounts();

  return (
    <div className="flex min-h-full flex-1 justify-center bg-emerald-300 px-5 py-12">
      <main className="flex w-full max-w-sm flex-col items-center gap-10">
        <Profile profile={profile} />
        <LinkList links={links} initialCounts={counts} />
      </main>
    </div>
  );
}
