import { useEffect, useMemo, useState, useCallback } from "react";

/**
 * Navbar props
 * @param {Object[]} navItems - [{label, href}]
 * @param {string|React.ReactNode} brand - text or node
 * @param {string} loginLabel
 * @param {string} signupLabel
 * @param {(e)=>void} onLogin
 * @param {(e)=>void} onSignup
 * @param {React.ComponentType} LinkComponent - optional router-aware Link
 * @param {string} activePath - current path to style active link
 * @param {React.ReactNode} rightSlot - inject extra content on the right
 * @param {Object} classes - style overrides { root, link, ctaPrimary, ctaSecondary, mobilePanel }
 */
export default function Navbar({
  navItems = [
    { label: "Home", href: "#" },
    { label: "Courses", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "About Us", href: "#" },
  ],
  brand = "TOTC",
  loginLabel = "Login",
  signupLabel = "Sign Up",
  onLogin,
  onSignup,
  LinkComponent,
  activePath,
  rightSlot,
  classes = {},
}) {
  const [open, setOpen] = useState(false);

  const closeOnEsc = useCallback((e) => {
    if (e.key === "Escape") setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", closeOnEsc);
    return () => document.removeEventListener("keydown", closeOnEsc);
  }, [open, closeOnEsc]);

  const Root = useMemo(
    () =>
      `w-full backdrop-blur supports-backdrop-blur:bg-white/5 sticky top-0 z-50 ${classes.root || ""}`,
    [classes.root]
  );

  const LinkEl = ({ href, children, className, ...rest }) => {
    if (LinkComponent) {
      return (
        <LinkComponent href={href} className={className} {...rest}>
          {children}
        </LinkComponent>
      );
    }
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    );
  };

  return (
    <header className={Root} aria-label="Site header">
      <div className="px-4 py-4 mx-auto max-w-7xl md:px-10 md:py-5">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            {typeof brand === "string" ? (
              <div className="relative size-8 rotate-45 rounded-[8px] border-2 border-white/70">
                <span className="absolute inset-0 flex items-center justify-center font-semibold tracking-wider text-white -rotate-45">
                  {brand}
                </span>
              </div>
            ) : (
              brand
            )}
          </div>

          {/* Desktop nav */}
          <nav
            className="items-center hidden gap-8 md:flex text-white/90"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => {
              const isActive =
                activePath && (activePath === item.href || activePath?.startsWith(item.href));
              const base =
                "transition-colors hover:text-white aria-[current=page]:text-white";
              const override = classes.link || "";
              return (
                <LinkEl
                  key={item.href + item.label}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`${base} ${override}`}
                >
                  {item.label}
                </LinkEl>
              );
            })}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {rightSlot}
            <button
              type="button"
              onClick={onLogin}
              className={`rounded-full px-5 py-2 text-sm font-semibold shadow-sm transition-transform duration-300 bg-white text-slate-800 hover:scale-105 ${classes.ctaPrimary || ""}`}
            >
              {loginLabel}
            </button>
            <button
              type="button"
              onClick={onSignup}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition-transform duration-200 text-white bg-white/20 backdrop-blur-sm border-white/30 hover:scale-105 ${classes.ctaSecondary || ""}`}
            >
              {signupLabel}
            </button>

            {/* Mobile toggle */}
            <button
              type="button"
              className="inline-flex items-center justify-center ml-1 rounded-md size-10 text-white/90 hover:bg-white/10 md:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="nav-mobile"
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="size-5"
                stroke="currentColor"
                strokeWidth="2"
              >
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        <div
          id="nav-mobile"
          className={`md:hidden ${open ? "block" : "hidden"}`}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`mt-3 rounded-2xl border border-white/15 bg-white/10 p-3 text-white shadow-lg backdrop-blur-md ${classes.mobilePanel || ""}`}
          >
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={"m-" + item.href + item.label}>
                  <LinkEl
                    href={item.href}
                    className="block px-3 py-2 text-base rounded-lg hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </LinkEl>
                </li>
              ))}
            </ul>
            <div className="flex gap-2 mt-3">
              <button
                type="button"
                onClick={(e) => {
                  setOpen(false);
                  onLogin?.(e);
                }}
                className={`flex-1 rounded-full px-4 py-2 font-semibold text-slate-800 bg-white ${classes.ctaPrimary || ""}`}
              >
                {loginLabel}
              </button>
              <button
                type="button"
                onClick={(e) => {
                  setOpen(false);
                  onSignup?.(e);
                }}
                className={`flex-1 rounded-full border px-4 py-2 font-semibold text-white bg-white/20 border-white/30 ${classes.ctaSecondary || ""}`}
              >
                {signupLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
