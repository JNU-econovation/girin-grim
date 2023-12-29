export async function POST(request: Request) {
  const { email, password } = await request.json();

  return new Response(
    JSON.stringify({
      success: true,
      response: {
        accessToken:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhc2RmQGdtYWlsLmNvbSIsImlkIjoxLCJleHAiOjE2OTYxNDAxNTMsImlhdCI6MTY5NjEzODM1M30.Lv1JMunQJPLOoN3rnX1e2qHfaVqPIm2x4V4CcbdP2XBdgY6D08qvprDSLJxYgklXJSt_Doic-9VoNxRsIXX0EQ",
        refreshToken:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhc2RmQGdtYWlsLmNvbSIsImlkIjoxLCJleHAiOjE2OTYxNDAxNTMsImlhdCI6MTY5NjEzODM1M30.Lv1JMunQJPLOoN3rnX1e2qHfaVqPIm2x4V4CcbdP2XBdgY6D08qvprDSLJxYgklXJSt_Doic-9VoNxRsIXX0EQ",
      },
      error: null,
    }),
    {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    }
  );
}
