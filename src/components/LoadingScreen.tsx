import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const cards = ['♠', '♥', '♦', '♣'];
  const values = ['A', 'K', 'Q', 'J'];

  useEffect(() => {
    const cardInterval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % 4);
    }, 500);

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 800);
    }, 3000);

    return () => {
      clearInterval(cardInterval);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="text-center space-y-8">
            {/* Playing Cards Animation */}
            <div className="relative w-32 h-44 mx-auto">
              {cards.map((suit, index) => (
                <motion.div
                  key={suit}
                  className={`absolute inset-0 w-32 h-44 bg-surface border-2 border-border rounded-xl flex flex-col items-center justify-between p-4 ${
                    suit === '♥' || suit === '♦' ? 'text-red-500' : 'text-foreground'
                  }`}
                  initial={{ 
                    rotateY: -180,
                    x: index * 5,
                    y: index * 3,
                    zIndex: 4 - index
                  }}
                  animate={{
                    rotateY: currentCard === index ? 0 : -180,
                    x: currentCard === index ? 0 : index * 5,
                    y: currentCard === index ? 0 : index * 3,
                    scale: currentCard === index ? 1.1 : 1,
                    zIndex: currentCard === index ? 10 : 4 - index
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                    rotateY: { duration: 0.4 }
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden"
                  }}
                >
                  <div className="text-2xl font-bold">
                    {values[index]}
                  </div>
                  <div className="text-4xl">
                    {suit}
                  </div>
                  <div className="text-2xl font-bold rotate-180">
                    {values[index]}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold gradient-text">
                Loading Experience
              </h2>
              <div className="flex items-center justify-center space-x-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-accent rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Card Magic Quote */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-text-subtle text-sm max-w-md mx-auto italic"
            >
              "The best magic tricks are performed with code" ✨
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;