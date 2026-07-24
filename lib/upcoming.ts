import { SITE_NAME } from "@/lib/site-metadata";
import type { DisabledSection } from "@/lib/feature-flags";

const SECTION_LABELS: Record<DisabledSection, string> = {
	traders: "Traders",
	markets: "Markets",
	events: "Events",
	tags: "Categories",
	rewards: "Rewards",
	leaderboard: "Leaderboard",
};

export function getSectionLabel(section: string | null): string {
	if (section && section in SECTION_LABELS) {
		return SECTION_LABELS[section as DisabledSection];
	}
	return "This section";
}

export function renderUpcomingHtml(section: string | null): string {
	const label = getSectionLabel(section);
	const title = `${label} is coming back soon · ${SITE_NAME}`;

	return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<style>
:root {
  --bg: oklch(0.96 0 0);
  --fg: oklch(0.145 0 0);
  --muted: oklch(0.556 0 0);
  --border: oklch(0 0 0 / 10%);
  --card: oklch(1 0 0);
  --primary: oklch(0.488 0.243 264.376);
  --primary-fg: oklch(0.97 0.014 254.604);
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg: oklch(0.145 0 0);
    --fg: oklch(0.985 0 0);
    --muted: oklch(0.708 0 0);
    --border: oklch(1 0 0 / 12%);
    --card: oklch(0.205 0 0);
    --primary: oklch(0.424 0.199 265.638);
    --primary-fg: oklch(0.97 0.014 254.604);
  }
}
* { box-sizing: border-box; }
html, body { margin: 0; height: 100%; }
body {
  background: var(--bg);
  color: var(--fg);
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}
.card {
  width: 100%;
  max-width: 34rem;
  text-align: center;
}
.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border: 1px solid var(--border);
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  color: var(--muted);
  background: var(--card);
}
.dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: var(--primary);
  box-shadow: 0 0 0 3px color-mix(in oklch, var(--primary) 25%, transparent);
}
h1 {
  margin: 24px 0 0;
  font-size: clamp(1.6rem, 4vw, 2.1rem);
  line-height: 1.15;
  letter-spacing: -0.02em;
  font-weight: 600;
}
p {
  margin: 14px auto 0;
  max-width: 28rem;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.6;
}
.actions {
  margin-top: 28px;
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}
a.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid var(--border);
  color: var(--fg);
  background: var(--card);
  transition: opacity 0.15s ease;
}
a.btn:hover { opacity: 0.82; }
a.btn.primary {
  background: var(--primary);
  color: var(--primary-fg);
  border-color: transparent;
}
</style>
</head>
<body>
<main class="card">
  <span class="badge"><span class="dot"></span>Upgrade in progress</span>
  <h1>${label} is getting an upgrade</h1>
  <p>We're rebuilding this experience with our new PnL engine. It'll be back shortly — in the meantime, Builders and Analytics are fully live.</p>
  <div class="actions">
    <a class="btn primary" href="/builders">Explore Builders</a>
    <a class="btn" href="/analytics">View Analytics</a>
    <a class="btn" href="/">Home</a>
  </div>
</main>
</body>
</html>`;
}
