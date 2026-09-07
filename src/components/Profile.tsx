import Image from "next/image";
import type { Profile as ProfileType } from "@/lib/links";

export default function Profile({ profile }: { profile: ProfileType }) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="size-40 overflow-hidden rounded-full bg-amber-200 ring-4 ring-white/60 shadow-sm sm:size-44">
        {profile.avatarUrl ? (
          <Image
            src={profile.avatarUrl}
            alt={`${profile.name} 프로필 사진`}
            width={176}
            height={176}
            className="size-full scale-170 object-cover"
            priority
            // 아바타가 SVG면 최적화를 건너뜁니다. (JPG/PNG는 정상적으로 최적화)
            unoptimized={profile.avatarUrl.endsWith(".svg")}
          />
        ) : (
          <div className="flex size-full items-center justify-center text-4xl font-bold text-amber-700">
            {profile.name.slice(0, 1)}
          </div>
        )}
      </div>

      <h1 className="mt-5 flex items-center gap-1 text-xl font-bold text-emerald-950">
        {profile.name}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-4 text-emerald-800/70"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </h1>
      <p className="mt-1 text-sm text-emerald-800/80">{profile.bio}</p>
    </header>
  );
}
