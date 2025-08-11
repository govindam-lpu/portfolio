import { useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';

const VoiceflowChatbot = () => {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
    script.onload = () => {
      if (window.voiceflow) {
        window.voiceflow.chat.load({
          verify: { projectID: '68908849c335764d8734ddfa' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          voice: {
            url: "https://runtime-api.voiceflow.com"
          }
        });
      }
    };

    document.head.appendChild(script);
    scriptLoaded.current = true;

    return () => {
      // Cleanup if needed
      const existingScript = document.querySelector('script[src="https://cdn.voiceflow.com/widget-next/bundle.mjs"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const openChatbot = () => {
    if (window.voiceflow && window.voiceflow.chat) {
      window.voiceflow.chat.open();
    }
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-4 text-green-400 font-mono text-xs animate-pulse">
          chatbot.respond(user_input)
        </div>
        <div className="absolute top-8 left-4 text-blue-400 font-mono text-xs delay-300 animate-pulse">
          nlp_confidence: 0.96
        </div>
        <div className="absolute bottom-8 right-4 text-purple-400 font-mono text-xs delay-500 animate-pulse">
          response_time: 120ms
        </div>
      </div>
      
      {/* Central Chat Interface */}
      <div className="relative z-10 text-center space-y-6">
        {/* Chat Icon */}
        <div className="mx-auto p-8 bg-accent/10 rounded-full border border-accent/20 hover:scale-110 transition-transform duration-500 cursor-pointer" onClick={openChatbot}>
          <MessageCircle className="w-16 h-16 text-accent" />
        </div>
        
        {/* Chat Button */}
        <div className="space-y-4">
          <h4 className="text-white text-xl font-semibold">AI Assistant</h4>
          <p className="text-gray-400 text-sm max-w-xs mx-auto">
            Chat with my AI assistant powered by Voiceflow and OpenAI
          </p>
          <button
            onClick={openChatbot}
            className="px-6 py-3 bg-accent hover:bg-accent/80 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
          >
            Start Conversation
          </button>
        </div>
      </div>

      {/* Status Badge */}
      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/10">
        <span className="text-white text-sm font-mono">Completed</span>
      </div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
    </div>
  );
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    voiceflow: {
      chat: {
        load: (config: any) => void;
        open: () => void;
      };
    };
  }
}

export default VoiceflowChatbot;