export async function onRequest(context) {
  // Cloudflare automatically populates the 'cf' object with location data
  const data = {
    city: context.request.cf.city || "Unknown City",
    country: context.request.cf.country || "Unknown Country",
    ip: context.request.headers.get("cf-connecting-ip")
  };

  return new Response(JSON.stringify(data), {
    headers: { "content-type": "application/json" }
  });
}
