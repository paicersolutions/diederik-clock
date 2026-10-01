// Cloudflare cron trigger: asks Diederik to check the battery every 10 minutes.
// CHECK_URL and CHECK_SECRET are Worker secrets (wrangler secret put).
export default {
  async scheduled(event, env, ctx) {
    const res = await fetch(env.CHECK_URL, {
      headers: { Authorization: `Bearer ${env.CHECK_SECRET}` },
    });
    console.log('check', res.status, await res.text());
    if (!res.ok) throw new Error(`check failed: ${res.status}`);
  },
};
