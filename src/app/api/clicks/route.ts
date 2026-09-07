import { NextResponse } from "next/server";
import { getClickCounts, incrementClick } from "@/lib/clicks";
import { links } from "@/lib/links";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const validIds = new Set(links.map((link) => link.id));

export async function GET() {
  const counts = await getClickCounts();
  return NextResponse.json({ counts });
}

export async function POST(request: Request) {
  let linkId: unknown;
  try {
    ({ id: linkId } = await request.json());
  } catch {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  if (typeof linkId !== "string" || !validIds.has(linkId)) {
    return NextResponse.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  const count = await incrementClick(linkId);
  return NextResponse.json({ id: linkId, count });
}
