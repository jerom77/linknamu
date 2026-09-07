import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";
import { getClickCounts } from "@/lib/clicks";
import { links, profile } from "@/lib/links";

export const dynamic = "force-dynamic";

export default async function Home() {
  const counts = await getClickCounts();

  return (
    <div className="flex min-h-full flex-1 justify-center px-6 py-16 sm:py-24">
      <main className="flex w-full max-w-sm flex-col items-center gap-12">
        <Profile profile={profile} />
        <LinkList links={links} initialCounts={counts} />
      </main>
    </div>
  );
}
