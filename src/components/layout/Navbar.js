"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "@/components/common/Logo";
import Button from "@/components/ui/Button";
import { NAV_LINKS } from "@/constants/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
    setOpenMobileGroup(null);
  }, [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-gov-gold bg-white shadow-soft">
      <div className="mx-auto flex h-[4.5rem] md:h-20 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <li key={link.label} className="relative group">
                  <button
                    type="button"
                    className="flex items-center gap-1 px-3 py-2 text-sm font-body font-semibold text-muted transition-colors hover:text-secondary cursor-pointer"
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div className="invisible absolute left-0 top-full pt-1 opacity-0 translate-y-1 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                    <ul className="w-60 rounded border border-line bg-white p-1 shadow-card">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={cn(
                              "block px-3 py-2 text-sm font-body transition-colors",
                              isActive(child.href)
                                ? "bg-section text-secondary font-semibold"
                                : "text-muted hover:bg-section hover:text-secondary"
                            )}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative block px-3 py-2 text-sm font-body font-semibold transition-colors border-b-2 border-transparent",
                      isActive(link.href)
                        ? "text-secondary border-secondary"
                        : "text-muted hover:text-secondary hover:border-line"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="sm">
            Get Certified
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded border border-line text-dark hover:bg-section transition-colors cursor-pointer"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-t border-line bg-white"
          >
            <nav
              aria-label="Mobile navigation"
              className="mx-auto max-w-7xl px-4 sm:px-6 py-4 max-h-[70vh] overflow-y-auto"
            >
              <ul className="space-y-0.5">
                {NAV_LINKS.map((link) =>
                  link.children ? (
                    <li key={link.label}>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMobileGroup(
                            openMobileGroup === link.label ? null : link.label
                          )
                        }
                        className="flex w-full items-center justify-between px-3 py-2.5 text-sm font-body font-semibold text-dark hover:bg-section cursor-pointer"
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            openMobileGroup === link.label && "rotate-180"
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {openMobileGroup === link.label && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-3"
                          >
                            {link.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  className="block px-3 py-2 text-sm text-muted hover:bg-section hover:text-secondary"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={cn(
                          "block px-3 py-2.5 text-sm font-body font-semibold hover:bg-section",
                          isActive(link.href) ? "text-secondary bg-section" : "text-dark"
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
              <div className="mt-4 border-t border-line pt-4 pb-2">
                <Button href="/contact" className="w-full">
                  Get Certified
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
