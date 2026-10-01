Timer for Diederik, the Kunz Home solar bot.

The live timer is the Cloudflare Worker in `worker/` (cron every 10 minutes, deploy with `npx wrangler deploy` from that folder; secrets CHECK_URL and CHECK_SECRET set with `wrangler secret put`). The GitHub Actions workflow is disabled: its schedule never fired reliably. It can still be run by hand as a backup after re-enabling.
