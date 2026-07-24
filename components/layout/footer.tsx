import type { Route } from "next";
import Link from "next/link";

import {
  FooterColumn,
  FooterColumnLink,
} from "@/components/layout/footer-column";
import { FooterThemeToggle } from "@/components/layout/footer-theme-toggle";
import { XLogoIcon } from "../ui/svgs/xtwitter";

// Inline Instagram SVG icon
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.948-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative z-10 m-1 mt-12 rounded-3xl border bg-muted/20">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-8 text-center text-sm text-muted-foreground">
          Explore Polymarket data, traders, and on‑chain activity.
        </div>

        <div className="mt-12 grid gap-10 sm:mt-16 lg:grid-cols-[1fr_1.85fr] lg:gap-16">
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              prefetch={false}
              aria-label="POLYⓂ️🅰️❌❌.bet Polymarket Explorer home"
              className="inline-flex w-fit items-center gap-2.5 transition-opacity hover:opacity-80"
            >
              <span className="text-sm font-medium text-foreground">
                POLYⓂ️🅰️❌❌.bet
              </span>
              <span className="text-sm text-muted-foreground">
                Polymarket Explorer
              </span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              An open explorer for Polymarket markets, traders, and on‑chain
              activity.
            </p>
            <div className="flex items-center gap-2">
              <Link
                href="https://x.com/structbuild"
                prefetch={false}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X profile"
                className="inline-flex size-9 items-center justify-center rounded-lg border text-muted-foreground transition-colors hover:border-foreground/20 hover:bg-muted hover:text-primary"
              >
                <XLogoIcon className="size-4" />
              </Link>
              <Link
                href="https://instagram.com/polymaxx.bet"
                prefetch={false}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="inline-flex size-9 items-center justify-center rounded-lg border text-muted-foreground transition-colors hover:border-foreground/20 hover:bg-muted hover:text-primary"
              >
                <InstagramIcon className="size-4.5" />
              </Link>
            </div>
          </div>

          <FooterColumns />
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t pt-8 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            Not affiliated with Polymarket.
          </p>
          <FooterThemeToggle />
        </div>
      </div>
    </footer>
  );
}

function FooterColumns() {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
      <FooterColumn title="Markets">
        <FooterColumnLink href={"/markets" as Route}>All markets</FooterColumnLink>
        <FooterColumnLink href={"/events" as Route}>Events</FooterColumnLink>
        <FooterColumnLink href={"/rewards" as Route}>Rewards markets</FooterColumnLink>
        <FooterColumnLink href={"/analytics" as Route}>Market analytics</FooterColumnLink>
      </FooterColumn>
      <FooterColumn title="Categories">
        <FooterColumnLink href={"/tags" as Route}>All categories</FooterColumnLink>
        <FooterColumnLink href={"/tags/politics" as Route}>Politics</FooterColumnLink>
        <FooterColumnLink href={"/tags/crypto" as Route}>Crypto</FooterColumnLink>
        <FooterColumnLink href={"/tags/sports" as Route}>Sports</FooterColumnLink>
      </FooterColumn>
      <FooterColumn title="Explore">
        <FooterColumnLink href={"/traders" as Route}>Traders</FooterColumnLink>
        <FooterColumnLink href={"/builders" as Route}>Builders</FooterColumnLink>
        <FooterColumnLink href={"/leaderboard" as Route}>Leaderboard</FooterColumnLink>
        <FooterColumnLink href={"/analytics" as Route}>Analytics</FooterColumnLink>
      </FooterColumn>
      <FooterColumn title="Developer">
        <FooterColumnLink href="https://www.struct.to/rest-api" external>
          REST API
        </FooterColumnLink>
        <FooterColumnLink href="https://docs.struct.to/" external>
          Documentation
        </FooterColumnLink>
        <FooterColumnLink href="https://github.com/structbuild/polymarket-explorer" external>
          GitHub
        </FooterColumnLink>
        <FooterColumnLink href="https://x.com/structbuild" external>
          Updates
        </FooterColumnLink>
      </FooterColumn>
    </div>
  );
}