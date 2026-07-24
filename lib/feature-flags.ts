export const DISABLED_SECTIONS = [
	"traders",
	"markets",
	"events",
	"tags",
	"rewards",
	"leaderboard",
] as const;

export type DisabledSection = (typeof DISABLED_SECTIONS)[number];

const DISABLED_SET = new Set<string>(DISABLED_SECTIONS);

export function getPathSection(pathname: string): string | null {
	if (!pathname.startsWith("/")) return null;
	return pathname.split("/")[1] ?? "";
}

export function isPathDisabled(pathname: string): boolean {
	const section = getPathSection(pathname);
	return section !== null && DISABLED_SET.has(section);
}
