import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import loginImage from '../../assets/common/login.jpg';
import registerImage from '../../assets/common/register.jpg';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8 bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={isLogin ? 'login' : 'register'}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="grid w-full max-w-5xl grid-cols-1 overflow-hidden bg-gray-100 shadow-lg rounded-3xl md:grid-cols-2"
        >
          {/* Left Image Section (Visible on all screens now) */}
          <div className="p-4 border sm:p-6 rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={isLogin ? 'login' : 'register'}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative w-full h-[250px] sm:h-[350px] md:h-full rounded-2xl overflow-hidden"
              >
                <img
                  src={isLogin ? loginImage : registerImage}
                  alt="auth"
                  className="object-cover w-full h-full"
                />
                <div className="absolute text-white bottom-5 left-5 drop-shadow-md">
                  <h2 className="text-xl font-bold text-white">Lorem Ipsum is simply</h2>
                  <p className="text-sm text-white">Lorem Ipsum is simply</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Form Section */}
          <div className="flex flex-col justify-center w-full px-6 py-10 sm:px-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={isLogin ? 'login' : 'register'}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-4"
              >
                {/* Toggle Tabs */}
                <div className="flex justify-center gap-2 mb-6">
                  <div className="gap-4 p-2 bg-green-300 border rounded-full">
                    <button
                      onClick={() => setIsLogin(true)}
                      className={`px-6 py-2 rounded-full transition ${
                        isLogin
                          ? 'bg-green-500 text-white'
                          : 'bg-green-300 text-gray-100'
                      }`}
                    >
                      Login
                    </button>
                    <button
                      onClick={() => setIsLogin(false)}
                      className={`px-6 py-2 rounded-full transition ${
                        !isLogin
                          ? 'bg-green-500 text-white'
                          : 'bg-green-300 text-gray-100'
                      }`}
                    >
                      Register
                    </button>
                  </div>
                </div>

                <p className="text-sm text-center text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>

                {/* Email for Register */}
                {!isLogin && (
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="w-full p-3 border border-teal-300 rounded-full outline-none"
                  />
                )}

                {/* Username */}
                <input
                  type="text"
                  placeholder="Enter your User name"
                  className="w-full p-3 border border-teal-300 rounded-full outline-none"
                />

                {/* Password */}
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your Password"
                    className="w-full p-3 pr-10 border border-teal-300 rounded-full outline-none"
                  />
                  <span
                    className="absolute text-gray-500 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Remember me
                  </label>
                  <button className="hover:underline">Forgot Password?</button>
                </div>

                <button className="w-full p-3 mt-4 text-white transition bg-green-400 rounded-full hover:bg-green-500">
                  {isLogin ? 'Login' : 'Register'}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AuthPage;
