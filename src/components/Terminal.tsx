import { useState, useEffect } from 'react';

const Terminal = () => {
  const [displayText, setDisplayText] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const lines = [
    "$ whoami",
    "govindam-vats",
    "",
    "$ cat introduction.txt",
    "Hi! I am Gova.",
    "And its really nice to meet you!",
    "I mean I can't actually see you,",
    "but we can always change that haha.",
    "",
    "Scroll through,",
    "and see if I am the perfect fit for you?",
    "If we match, hit me up.",
    "I look forward to hearing from you.",
    "Have fun!",
    "",
    "$ _"
  ];

  useEffect(() => {
    if (currentLine >= lines.length) {
      setIsComplete(true);
      return;
    }

    const currentLineText = lines[currentLine] || "";
    const delay = currentLineText.startsWith('$') ? 1200 : currentLineText === "" ? 400 : 700;
    
    const timer = setTimeout(() => {
      setDisplayText(prev => {
        const newDisplay = [...prev];
        newDisplay[currentLine] = currentLineText;
        return newDisplay;
      });
      
      setCurrentLine(prev => prev + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [currentLine, lines]);

  return (
    <div className="w-full max-w-lg mx-auto lg:mx-0">
      <div className="bg-gray-900 rounded-lg border border-gray-700 shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-red-500 rounded-full"></div>
            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-gray-400 text-xs sm:text-sm font-mono text-center flex-1">terminal</div>
          <div className="w-12 sm:w-16"></div>
        </div>
        
        {/* Terminal Content */}
        <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm bg-gray-900 min-h-[350px] sm:min-h-[400px]">
          {displayText.map((line, index) => (
            <div key={index} className="mb-1 leading-relaxed">
              <span className={`
                ${(line && line.startsWith && line.startsWith('$')) ? 'text-green-400 font-semibold' : 
                  (line && line.includes && line.includes('govindam-vats')) ? 'text-cyan-400' :
                  (line && line.includes && (line.includes('Gova') || line.includes('Govindam'))) ? 'text-blue-400' :
                  (line && line.includes && line.includes('Hi!')) ? 'text-yellow-400' :
                  (line && line.includes && line.includes('fun')) ? 'text-pink-400' :
                  'text-gray-300'}
              `}>
                {line}
                {index === currentLine && !isComplete && (
                  <span className="animate-pulse text-green-400 ml-1">█</span>
                )}
              </span>
            </div>
          ))}
          {isComplete && (
            <div className="mt-4">
              <span className="text-green-400 animate-pulse">$ █</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Terminal;