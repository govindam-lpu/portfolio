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
    <div className="w-full h-full bg-gradient-to-br from-muted/30 via-background to-surface flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 w-32 sm:w-64 h-32 sm:h-64 rounded-full bg-accent/40 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 sm:w-48 h-24 sm:h-48 rounded-full bg-accent/30 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 sm:w-40 h-20 sm:h-40 rounded-full bg-accent/20 blur-2xl"></div>
      </div>

      <div className="text-center space-y-3 sm:space-y-4 max-w-xs sm:max-w-sm relative z-10">
        {/* Chat Icon */}
        <div 
          className="mx-auto w-12 sm:w-16 h-12 sm:h-16 bg-accent/10 rounded-full border border-accent/20 hover:border-accent/40 hover:bg-accent/15 transition-all duration-300 cursor-pointer flex items-center justify-center group" 
          onClick={openChatbot}
        >
          <MessageCircle className="w-6 sm:w-8 h-6 sm:h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
        </div>
        
        {/* Content */}
        <div className="space-y-2 sm:space-y-3">
          <h4 className="text-foreground text-base sm:text-lg font-semibold">AI Assistant</h4>
          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed px-2">
            Chat with my AI assistant powered by Voiceflow and OpenAI
          </p>
          <button
            onClick={openChatbot}
            className="px-4 sm:px-6 py-2 sm:py-2.5 bg-accent hover:bg-accent/90 text-background rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-accent/25 text-sm sm:text-base"
          >
            Start Conversation
          </button>
        </div>
      </div>
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