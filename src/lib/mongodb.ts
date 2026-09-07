import { MongoClient, type Db } from "mongodb";

// MONGODB_URI가 없으면 클릭 수 집계는 비활성화되고, 페이지는 정상 동작합니다.
const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB ?? "linknamu";

let clientPromise: Promise<MongoClient> | null = null;

if (uri) {
  const globalForMongo = globalThis as typeof globalThis & {
    _linknamuMongoClientPromise?: Promise<MongoClient>;
  };

  if (process.env.NODE_ENV === "development") {
    // 개발 모드의 HMR로 커넥션이 계속 늘어나는 것을 막기 위해 전역에 캐싱합니다.
    if (!globalForMongo._linknamuMongoClientPromise) {
      globalForMongo._linknamuMongoClientPromise = new MongoClient(uri).connect();
    }
    clientPromise = globalForMongo._linknamuMongoClientPromise;
  } else {
    clientPromise = new MongoClient(uri).connect();
  }
}

export const isDbEnabled = Boolean(uri);

export async function getDb(): Promise<Db | null> {
  if (!clientPromise) return null;
  try {
    const client = await clientPromise;
    return client.db(dbName);
  } catch (error) {
    console.error("[linknamu] MongoDB 연결 실패:", error);
    return null;
  }
}
