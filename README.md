# 링크나무

내 모든 링크를 한 페이지에 모아 두고, 하나의 URL로 공유하는 Link-in-Bio 서비스입니다.

## 기술 스택

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- MongoDB Atlas (링크 클릭 수 집계)
- Vercel 배포 대상

## 시작하기

```bash
npm install
cp .env.example .env.local   # MONGODB_URI 입력 (선택)
npm run dev
```

`http://localhost:3000` 접속.

## 환경 변수

| 이름          | 설명                                            | 필수 |
| ------------- | ----------------------------------------------- | ---- |
| `MONGODB_URI` | MongoDB Atlas 연결 문자열. 없으면 클릭 수 집계만 비활성화 | 아니오 |
| `MONGODB_DB`  | 데이터베이스 이름 (기본값 `linknamu`)            | 아니오 |

## 구조

```
src/
  app/
    page.tsx              # 프로필 + 링크 목록 페이지
    layout.tsx
    api/clicks/route.ts   # GET: 클릭 수 조회, POST: 클릭 수 +1
  components/
    Profile.tsx           # 프로필(사진·이름·소개)
    LinkList.tsx          # 링크 목록 (클릭 집계, 클라이언트 컴포넌트)
    LinkCard.tsx          # 링크 카드 1개
  lib/
    links.ts              # 프로필/링크 데이터
    mongodb.ts            # MongoDB 클라이언트
    clicks.ts             # 클릭 수 조회/증가
```

프로필과 링크는 [src/lib/links.ts](src/lib/links.ts)에서 수정합니다.

## 클릭 수 데이터

MongoDB `clicks` 컬렉션에 `{ _id: <링크 id>, count: <숫자> }` 형태로 저장됩니다.
