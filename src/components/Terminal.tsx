import { useState, useEffect } from 'react';

const Terminal = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [displayText, setDisplayText] = useState<string[]>([]);

  const lines = [
    "$ whoami",
    "govindam-vats",
    "$ cat introduction.txt",
    "Hi! I'm Govindam Vats",
    "You can call me Gova 👋",
    "Welcome to my digital space",
    "AI Developer & Technical Consultant",
    "$ ls skills/",
    "machine-learning/ web-development/ consulting/",
    "$ echo 'Let\\'s build something amazing together!'",
    "Let's build something amazing together!",
    "$ _"
  ];

  useEffect(() => {
    if (currentLine < lines.length) {
      const line = lines[currentLine];
      
      if (currentChar <= line.length) {
        const timer = setTimeout(() => {
          const newDisplayText = [...displayText];
          newDisplayText[currentLine] = line.substring(0, currentChar);
          setDisplayText(newDisplayText);
          
          if (currentChar === line.length) {
            setTimeout(() => {
              setCurrentLine(prev => prev + 1);
              setCurrentChar(0);
            }, 800);
          } else {
            setCurrentChar(prev => prev + 1);
          }
        }, 50);

        return () => clearTimeout(timer);
      }
    }
  }, [currentLine, currentChar, displayText, lines]);

  return (
    <div className="w-full max-w-lg mx-auto lg:mx-0">
      <div className="bg-gray-900 rounded-lg border border-gray-700 shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-gray-400 text-sm font-mono">terminal</div>
          <div className="w-16"></div>
        </div>
        
        {/* Terminal Content */}
        <div className="p-4 font-mono text-sm bg-gray-900 min-h-[400px]">
          {displayText.map((line, index) => (
            <div key={index} className="mb-2">
              <span className={`
                ${line && line.startsWith('$') ? 'text-green-400' : 
                  line && (line.includes('govindam-vats') || line.includes('Gova') || line.includes('Govindam')) ? 'text-blue-400' :
                  line && (line.includes('machine-learning') || line.includes('web-development') || line.includes('consulting')) ? 'text-yellow-400' :
                  line && line.includes('Let\'s build') ? 'text-purple-400' :
                  'text-gray-300'}
              `}>
                {line || ''}
                {index === currentLine && currentChar <= lines[currentLine]?.length && (
                  <span className="animate-pulse text-green-400">|</span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terminal;