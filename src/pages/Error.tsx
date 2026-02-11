import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import PageTransition from '../components/shared/PageTransition';
import { fadeInUp, scaleIn } from '../utils/animations';

const Error = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-red-500/20 rounded-full blur-xl"
              />
              <AlertTriangle className="text-red-500 relative z-10" size={120} />
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl font-bold">Something Went Wrong</h1>
            <p className="text-gray-400 text-lg max-w-md mx-auto">
              We encountered an unexpected error. Don't worry, our team has been notified 
              and we're working to fix it.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-sm text-gray-400">
                If the problem persists, please try refreshing the page or contact our support team.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button
                onClick={handleRefresh}
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300 hover:scale-105"
              >
                <RefreshCw size={20} />
                <span>Refresh Page</span>
              </button>

              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 text-white rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Home size={20} />
                <span>Back to Home</span>
              </Link>
            </div>

            {/* Error code display */}
            <div className="mt-12 text-gray-600 text-sm font-mono">
              ERROR_CODE: 500_INTERNAL_SERVER_ERROR
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Error;
