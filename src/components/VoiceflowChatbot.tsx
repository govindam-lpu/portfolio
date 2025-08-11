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
    <div className="w-full h-full bg-background flex items-center justify-center p-8">
      <div className="text-center space-y-4 max-w-sm">
        {/* Chat Icon */}
        <div 
          className="mx-auto w-16 h-16 bg-accent/10 rounded-full border border-accent/20 hover:border-accent/40 hover:bg-accent/15 transition-all duration-300 cursor-pointer flex items-center justify-center group" 
          onClick={openChatbot}
        >
          <MessageCircle className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
        </div>
        
        {/* Content */}
        <div className="space-y-3">
          <h4 className="text-foreground text-lg font-semibold">AI Assistant</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Chat with my AI assistant powered by Voiceflow and OpenAI
          </p>
          <button
            onClick={openChatbot}
            className="px-6 py-2.5 bg-accent hover:bg-accent/90 text-background rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-accent/25"
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