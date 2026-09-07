import { getDb } from "@/lib/mongodb";

const COLLECTION = "clicks";

/** 링크별 클릭 수를 { [linkId]: count } 형태로 반환합니다. DB가 없으면 빈 객체. */
export async function getClickCounts(): Promise<Record<string, number>> {
  const db = await getDb();
  if (!db) return {};

  try {
    const docs = await db
      .collection<{ _id: string; count: number }>(COLLECTION)
      .find({})
      .toArray();

    return Object.fromEntries(docs.map((doc) => [doc._id, doc.count ?? 0]));
  } catch (error) {
    console.error("[linknamu] 클릭 수 조회 실패:", error);
    return {};
  }
}

/** 특정 링크의 클릭 수를 1 증가시키고, 갱신된 값을 반환합니다. DB가 없으면 null. */
export async function incrementClick(linkId: string): Promise<number | null> {
  const db = await getDb();
  if (!db) return null;

  try {
    const result = await db
      .collection<{ _id: string; count: number }>(COLLECTION)
      .findOneAndUpdate(
        { _id: linkId },
        { $inc: { count: 1 } },
        { upsert: true, returnDocument: "after" },
      );

    return result?.count ?? 1;
  } catch (error) {
    console.error("[linknamu] 클릭 수 증가 실패:", error);
    return null;
  }
}
