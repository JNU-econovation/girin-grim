import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return new Response(
    JSON.stringify({
      success: true,
      response: {
        university: [
          {
            universityId: 1,
            name: "region : " + req.nextUrl.searchParams.get("region"),
          },
          {
            universityId: 12,
            name: "q : " + req.nextUrl.searchParams.get("q"),
          },
          {
            universityId: 142,
            name: "세종사이버대학교",
          },
          {
            universityId: 176,
            name: "세종대학교",
          },
          {
            universityId: 237,
            name: "고려대학교 세종캠퍼스",
          },
          {
            universityId: 239,
            name: "홍익대학교 세종캠퍼스",
          },
        ],
      },
      error: null,
    })
  );
}
