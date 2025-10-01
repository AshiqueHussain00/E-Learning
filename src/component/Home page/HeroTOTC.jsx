// HeroTOTC.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { IoPlayCircleOutline } from 'react-icons/io5';
import { FaEnvelope } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import HeroGirlImg from '../../assets/homepage/HeroGrlImg.png';

export default function HeroTOTC() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e) => e.key === 'Escape' && setMobileOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileOpen]);

  const teal = '#44C1BD';
  const orange = '#FF8A00';

  const fadeUp = (delay = 0) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.22, delay, ease: [0.2, 0, 0, 1] },
          },
        };

  const float = (delay = 0) =>
    prefersReduced
      ? {}
      : {
          animate: {
            y: [0, -6, 0],
            transition: {
              duration: 1.6,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
              delay,
            },
          },
        };

  const headerHeightClass = 'pt-[84px] md:pt-[96px]';

  const glassShell =
    'rounded-full border border-white-100/20 shadow-lg bg-white-100/10 backdrop-blur-xl';

  // Underline animation class
  const navLink =
    "relative inline-block transition-colors text-white-100/90 hover:text-white-100 " +
    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full " +
    "after:origin-left after:scale-x-0 hover:after:scale-x-100 " +
    "after:bg-white-100 after:transition-transform after:duration-300 " +
    "after:content-['']";

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white-100">
      {/* Header with glass navbar */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="px-3 py-3 md:px-6 md:py-4">
          <div className={`mx-auto flex items-center justify-between ${glassShell} px-4 py-2 md:px-6`}>
            <div className="flex items-center gap-3">
              <div className="relative size-8 rotate-45 rounded-[8px] border-2 border-white/70">
                <span className="absolute inset-0 flex items-center justify-center font-semibold tracking-wider -rotate-45 text-white-100">
                  TOTC
                </span>
              </div>
            </div>

            {/* Desktop nav */}
            <nav className="items-center hidden gap-8 md:flex">
              <Link className={navLink} to="/" aria-label="Home">Home</Link>
              <Link className={navLink} to="/courses" aria-label="Courses">Courses</Link>
              <Link className={navLink} to="/careers" aria-label="Careers">Careers</Link>
              <Link className={navLink} to="/blog" aria-label="Blog">Blog</Link>
              <Link className={navLink} to="/about" aria-label="About Us">About Us</Link>
            </nav>

            {/* Right actions + Mobile menu button */}
            <div className="flex items-center gap-3">
              <div className="items-center hidden gap-3 md:flex">
                <button className="px-5 py-2 text-sm font-semibold transition-transform duration-300 rounded-full shadow-sm bg-white-100 text-slate-800 hover:scale-105">
                  Login
                </button>
                <button className="px-5 py-2 text-sm font-semibold transition-transform duration-200 border rounded-full text-white-100 bg-white-100/20 backdrop-blur-sm border-white/30 hover:scale-105">
                  Sign Up
                </button>
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md md:hidden text-white-100 hover:bg-white-100/10 focus:outline-none focus:ring-2 focus:ring-white/40"
                aria-controls="mobile-nav"
                aria-expanded={mobileOpen ? 'true' : 'false'}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile-only brand strip */}
        <div className="md:hidden absolute inset-x-0 -z-10 top-0 h-[72px]" />

        {/* Mobile overlay + sheet */}
        <AnimatePresence initial={false}>
          {mobileOpen && (
            <>
              <motion.div
                aria-hidden="true"
                className="fixed inset-0 z-40 pointer-events-none bg-slate-950/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15, ease: [0.2, 0, 0, 1] } }}
                exit={{ opacity: 0, transition: { duration: 0.12, ease: [0.4, 0, 1, 1] } }}
              />

              <motion.div
                className="fixed left-0 right-0 top-[68px] md:top-[80px] z-50 md:hidden bg-opacity-10 backdrop-blur-sm border-white-100/20 bg-white-100/10"
                style={{ willChange: 'transform, opacity' }}
                initial={prefersReduced ? false : { y: -8, opacity: 0 }}
                animate={
                  prefersReduced
                    ? { opacity: 1 }
                    : { y: 0, opacity: 1, transition: { duration: 0.18, ease: [0, 0, 0.2, 1] } }
                }
                exit={
                  prefersReduced
                    ? { opacity: 0 }
                    : { y: -8, opacity: 0, transition: { duration: 0.12, ease: [0.4, 0, 1, 1] } }
                }
              >
                <div className="mx-3 border shadow-2xl rounded-2xl">
                  <nav id="mobile-nav" className="flex flex-col gap-2 px-4 pt-3 pb-4">
                    <Link className={`${navLink} text-white-100/95`} to="/" onClick={() => setMobileOpen(false)}>Home</Link>
                    <Link className={`${navLink} text-white-100/95`} to="/courses" onClick={() => setMobileOpen(false)}>Courses</Link>
                    <Link className={`${navLink} text-white-100/95`} to="/careers" onClick={() => setMobileOpen(false)}>Careers</Link>
                    <Link className={`${navLink} text-white-100/95`} to="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>
                    <Link className={`${navLink} text-white-100/95`} to="/about" onClick={() => setMobileOpen(false)}>About Us</Link>
                  </nav>
                  <div className="flex items-center gap-3 px-4 pb-4">
                    <button className="w-full px-5 py-2 text-sm font-semibold transition-transform duration-200 rounded-full shadow-sm bg-white-100 text-slate-800 hover:scale-[1.02]">
                      Login
                    </button>
                    <button
                      className="w-full px-5 py-2 text-sm font-semibold transition-transform duration-200 border rounded-full text-white-100 bg-white/20 border-white/30 hover:scale-[1.02]"
                      onClick={() => setMobileOpen(false)}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Teal hero below navbar */}
      <div
        className={`relative mx-auto w-[100%] md:w-[100%] min-h-[88vh]   overflow-hidden ${headerHeightClass}`}
        style={{ backgroundColor: teal }}
      >
        <div className="relative grid grid-cols-1 gap-8 px-6 md:grid-cols-2 md:px-10 lg:px-16 ">
          {/* Left copy */}
          <div className="flex flex-col justify-center max-w-xl">
            <motion.h1
              {...fadeUp(0.03)}
              className="text-4xl md:text-5xl lg:text-[44px] leading-tight font-extrabold text-white-100"
            >
              <span style={{ color: orange }}>Studying</span> Online is now
              <br /> much easier
            </motion.h1>

            <motion.p
              {...fadeUp(0.08)}
              className="max-w-md mt-4 text-white-100/85"
            >
              TOTC is an interesting platform that will teach in more an interactive way
            </motion.p>

            <motion.div {...fadeUp(0.12)} className="flex items-center gap-6 mt-6">
              <button className="px-6 py-3 font-semibold transition rounded-full shadow-md bg-white-100/90 text-slate-800 hover:bg-white-100">
                Join for free
              </button>
              <button className="flex items-center gap-3 text-white-100/95">
                <IoPlayCircleOutline size={52} className="transition transition-transform duration-300 rounded-full hover:scale-110" />
                <span className="text-xl font-semibold">Watch how it works</span>
              </button>
            </motion.div>
          </div>

          {/* Right visual */}
          <div className="relative flex items-end justify-center md:justify-end">
            <motion.div {...fadeUp(0.08)} className="relative">
              <div className="relative w-[300px] md:w-[380px] lg:w-[440px] h-[420px] md:h-[520px] lg:h-[30rem] ">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50/20 to-slate-900/10" />
                <img src={HeroGirlImg} alt="Student" className="object-contain w-full h-full" />
                <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/35 via-white/10 to-transparent" />
              </div>

              {/* Small pink analytics chip */}
              <motion.div
                {...float(0)}
                className="absolute grid shadow-xl -right-6 top-10 place-items-center size-12 rounded-xl"
                style={{ backgroundColor: '#FF6E8B' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <rect x="4" y="12" width="3" height="8" rx="1" />
                  <rect x="10.5" y="8" width="3" height="12" rx="1" />
                  <rect x="17" y="5" width="3" height="15" rx="1" />
                </svg>
              </motion.div>

              {/* 250k Assisted Student card */}
              <motion.div
                {...float(0.6)}
                className="absolute flex items-center gap-4 px-5 py-4 shadow-xl bg-white-100 -left-8 md:-left-16 top-16 rounded-2xl"
              >
                <div className="grid place-items-center size-10 rounded-xl" style={{ backgroundColor: '#EAF6F6' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill={teal} aria-hidden="true">
                    <path d="M7 2h10a2 2 0 0 1 2 2v14l-7 4-7-4V4a2 2 0 0 1 2-2zm1 4v2h8V6H8z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-slate-800">250k</div>
                  <div className="text-sm text-slate-500">Assisted Student</div>
                </div>
              </motion.div>

              {/* User Experience Class card */}
              <motion.div
                {...float(0.3)}
                className="absolute -left-8 md:-left-48 bottom-24 bg-white-100 rounded-2xl shadow-2xl w-[300px] md:w-[340px] p-4 bg-opacity-20 backdrop-blur-sm"
              >
                <div className="flex items-start gap-3">
                  <div>
                    <img
                      src={`https://xsgames.co/randomusers/avatar.php?g=male&cb=${Date.now()}`}
                      alt="Random male"
                      className="font-bold rounded-full place-items-center size-10 bg-slate-200 text-slate-600"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-800">User Experience Class</div>
                    <div className="mt-1 text-xs text-slate-500">Today at 12.00 PM</div>
                    <div className="mt-3">
                      <button
                        className="px-4 py-2 text-sm font-semibold rounded-full shadow text-white-100"
                        style={{ backgroundColor: '#F06292' }}
                      >
                        Join Now
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Congratulations card */}
              <motion.div
                {...float(0.9)}
                className="absolute flex items-center gap-4 px-5 py-4 bg-opacity-50 shadow-xl bg-white-100 -right-10 md:-right-16 bottom-40 rounded-2xl backdrop-blur-sm"
              >
                <div className="grid place-items-center size-10 rounded-xl" style={{ backgroundColor: '#F88C3D' }}>
                  <span><FaEnvelope size={22} className="text-white-100" /></span>
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Congratulations</div>
                  <div className="text-sm text-slate-500">Your admission completed</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom wave */}
       
      </div>
    </section>
  );
}
