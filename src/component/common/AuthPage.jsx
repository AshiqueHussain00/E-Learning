import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import loginImage from '../../assets/common/login.jpg';
import registerImage from '../../assets/common/register.jpg';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const toggleAuth = () => setIsLogin((prev) => !prev);
  const togglePassword = () => setShowPassword((prev) => !prev);

  const cardVariants = {
    initial: { opacity: 0, y: 24, scale: 0.98, filter: 'blur(6px)' },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 320, damping: 26 },
    },
    exit: {
      opacity: 0,
      y: -12,
      scale: 0.900,
      filter: 'blur(4px)',
      transition: { duration: 0.18, ease: 'easeInOut' },
    },
  };

  const imageVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 260, damping: 28, delay: 0.05 },
    },
    exit: { opacity: 0, x: 20, transition: { duration: 0.18 } },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submission logic goes here
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8 bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
      <AnimatePresence mode="wait">
        <motion.div
          key={isLogin ? 'login-card' : 'register-card'}
          variants={cardVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="grid w-full max-w-5xl grid-cols-1 overflow-hidden shadow-lg rounded-3xl bg-white/80 backdrop-blur md:grid-cols-2 ring-1 ring-emerald-100"
        >
          {/* Left Image Section */}
          <motion.div
            key={isLogin ? 'left-login' : 'left-register'}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative h-[220px] w-full overflow-hidden p-0 sm:h-[320px] md:h-auto"
          >
            <img
              src={isLogin ? loginImage : registerImage}
              alt={isLogin ? 'Login' : 'Register'}
              className="object-cover w-full h-full"
            />
            <div className="absolute text-white bottom-5 left-5 drop-shadow">
              <h2 className="text-xl font-semibold">Lorem Ipsum is simply</h2>
              <p className="text-sm opacity-90">Lorem Ipsum is simply</p>
            </div>
          </motion.div>

          {/* Right Form Section */}
          <div className="flex flex-col justify-center w-full px-6 py-10 sm:px-10">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Toggle Tabs */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 p-2 rounded-full bg-emerald-100/70 ring-1 ring-emerald-300">
                  <button
                    type="button"
                    onClick={() => setIsLogin(true)}
                    className={`px-6 py-2 rounded-full transition ${
                      isLogin
                        ? 'bg-emerald-500 text-white-100 shadow'
                        : 'bg-transparent text-emerald-800 hover:bg-emerald-200/60'
                    }`}
                    aria-pressed={isLogin}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsLogin(false)}
                    className={`px-6 py-2 rounded-full transition ${
                      !isLogin
                        ? 'bg-emerald-500 text-white-100 shadow'
                        : 'bg-transparent text-emerald-800 hover:bg-emerald-200/60'
                    }`}
                    aria-pressed={!isLogin}
                  >
                    Register
                  </button>
                </div>
              </div>

              <p className="text-sm text-center text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>

              {/* Email for Register */}
              {!isLogin && (
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border rounded-full outline-none border-emerald-300"
                  autoComplete="email"
                  required
                />
              )}

              {/* Username */}
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full p-3 border rounded-full outline-none border-emerald-300"
                autoComplete="username"
                required
              />

              {/* Password */}
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="w-full p-3 pr-12 border rounded-full outline-none border-emerald-300"
                  autoComplete={isLogin ? 'current-password' : 'new-password'}
                  required
                />
                <button
                  type="button"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute text-gray-500 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                  onClick={togglePassword}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <button type="button" className="hover:underline">Forgot Password?</button>
              </div>

              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full p-3 mt-2 transition rounded-full text-white-100 bg-emerald-500 hover:bg-emerald-600"
              >
                {isLogin ? 'Login' : 'Register'}
              </motion.button>

              {/* One-click toggle link */}
              <div className="pt-2 text-sm text-center text-gray-600">
                <button type="button" onClick={toggleAuth} className="underline decoration-dotted underline-offset-4">
                  {isLogin ? 'New here? Create an account' : 'Already have an account? Sign in'}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AuthPage;
