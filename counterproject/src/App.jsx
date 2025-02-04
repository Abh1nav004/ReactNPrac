import React, { useState } from "react";
import { motion } from "framer-motion";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl p-8 text-center"
      >
        <h1 className="text-6xl font-bold text-gray-800 mb-8">Counter App</h1>
        <motion.div
          key={count}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-9xl font-bold text-purple-600 mb-8"
        >
          {count}
        </motion.div>
        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={decrement}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-purple-700 transition-all"
          >
            Decrement
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={reset}
            className="bg-gray-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-gray-700 transition-all"
          >
            Reset
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={increment}
            className="bg-pink-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-pink-700 transition-all"
          >
            Increment
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Counter;