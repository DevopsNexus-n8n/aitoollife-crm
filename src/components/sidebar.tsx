"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { navItems } from "./nav-items";

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="flex flex-col gap-1">
      {navItems.map(({ href, label, icon: Icon }) => {
        const active = pathname === href || pathname.startsWith(href + "/");
        return (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-[0.95rem] font-medium transition-colors " +
              (active
                ? "bg-paper text-pine"
                : "text-white/75 hover:bg-pine-soft hover:text-white")
            }
          >
            <Icon className="size-[1.15rem] shrink-0" aria-hidden="true" />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

function Brand() {
  return (
    <Link href="/dashboard" className="flex items-center gap-2.5 text-white">
      <span className="grid size-8 place-items-center rounded-lg bg-sea">
        <Leaf className="size-4" aria-hidden="true" />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight">aitoollife</span>
    </Link>
  );
}

export function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen flex-col bg-pine px-4 py-5 lg:flex">
        <div className="px-2 pb-6">
          <Brand />
        </div>
        <NavLinks />
        <p className="mt-auto px-3 text-xs leading-relaxed text-white/50">
          Sample data only. Nothing here is saved yet.
        </p>
      </aside>

      {/* Mobile bar and drawer */}
      <div className="flex items-center justify-between bg-pine px-4 py-3 lg:hidden">
        <Brand />
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="grid size-10 place-items-center rounded-lg text-white hover:bg-pine-soft"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <div id="mobile-nav" className="bg-pine px-4 pb-4 lg:hidden">
          <NavLinks onNavigate={() => setOpen(false)} />
        </div>
      )}
    </>
  );
}
