export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  return new Response(
    JSON.stringify({
      success: true,
      response: null,
      error: null,
    })
  );
}
