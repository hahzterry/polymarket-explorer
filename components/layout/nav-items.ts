import type { Route } from "next";

export type NavItem = {
	href: Route;
	label: string;
	external?: boolean;
	primary?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
	{ href: "https://polymarket.com/?r=cremarket" as Route, label: "Join Polymarket" },
	{ href: "/events" as Route, label: "Events" },
	{ href: "/markets" as Route, label: "Markets" },
	{ href: "/traders" as Route, label: "Traders" },
	{ href: "/builders" as Route, label: "Builders" },
	{ href: "/tags" as Route, label: "Tags" },
	{ href: "/analytics" as Route, label: "Analytics" },
];
