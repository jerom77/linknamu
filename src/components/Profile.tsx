import Image from "next/image";
import type { Profile as ProfileType } from "@/lib/links";

export default function Profile({ profile }: { profile: ProfileType }) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="relative size-36 rounded-full ring-4 ring-white/70 shadow-[0_16px_36px_-14px_rgba(124,74,45,0.55)] sm:size-40">
        <div className="size-full overflow-hidden rounded-full bg-amber-100">
          {profile.avatarUrl ? (
            <Image
              src={profile.avatarUrl}
              alt={`${profile.name} 프로필 사진`}
              width={384}
              height={384}
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
        {/* 안쪽 하이라이트 링으로 살짝 입체감 */}
        <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/50" />
      </div>

      <h1 className="mt-6 text-xl font-bold tracking-tight">{profile.name}</h1>
      <p className="mt-1.5 text-sm leading-relaxed text-[#8a7563]">{profile.bio}</p>
    </header>
  );
}
