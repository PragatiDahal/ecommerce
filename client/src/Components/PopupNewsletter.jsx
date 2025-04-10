import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function PopupNewsletter() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => setShowPopup(false);

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white/95 backdrop-blur-md w-[90%] max-w-lg rounded-2xl shadow-xl p-6 relative flex flex-col md:flex-row gap-4 pointer-events-auto"
            initial={{ opacity: 0, scale: 0.8, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <X size={20} />
            </button>

            <img
              src="/images/shop.jpg"
              alt="Newsletter"
              className="w-full md:w-1/2 object-cover rounded-xl"
            />

            <div className="flex-1 flex flex-col justify-center text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 font-['Poppins']">
                Join Our Newsletter
              </h2>
              <p className="text-sm text-gray-600 mb-4 font-['Poppins']">
                Get updates on the latest trends and exclusive deals.
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-lg mb-3 text-sm"
              />
              <button className="bg-yellow-500 hover:bg-yellow-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all font-['Poppins']">
                Subscribe
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
