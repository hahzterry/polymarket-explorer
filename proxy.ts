import { NextResponse, type NextRequest } from "next/server";

import { getPathSection, isPathDisabled } from "@/lib/feature-flags";
import { renderUpcomingHtml } from "@/lib/upcoming";

const RETRY_AFTER_SECONDS = 60 * 60 * 24;

export function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl;

	if (!isPathDisabled(pathname)) {
		return NextResponse.next();
	}

	return new NextResponse(renderUpcomingHtml(getPathSection(pathname)), {
		status: 503,
		headers: {
			"Content-Type": "text/html; charset=utf-8",
			"Retry-After": String(RETRY_AFTER_SECONDS),
			"Cache-Control": "no-store",
		},
	});
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap|.*\\..*).*)"],
};
