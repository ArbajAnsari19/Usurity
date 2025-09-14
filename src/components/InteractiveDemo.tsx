import React, { useState, useEffect } from 'react';
import { MessageCircle, Send } from 'lucide-react';

const InteractiveDemo: React.FC = () => {
  const [messages, setMessages] = useState([
    { type: 'ai', text: 'Hello! I\'m Usurity AI. Upload a claim document to get started.' }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const demoFlow = [
    { type: 'user', text: 'Analyze this auto claim: Minor fender bender, $2,400 estimate' },
    { type: 'ai', text: 'Analyzing claim... ✓ Documents processed\n• Damage assessment: Consistent with low-impact collision\n• Estimate validation: Within 5% of market rates\n• Fraud indicators: None detected\n• Recommendation: Approve with standard deductible' },
    { type: 'user', text: 'What about policy coverage?' },
    { type: 'ai', text: 'Policy analysis complete:\n• Coverage: Comprehensive + Collision ✓\n• Deductible: $500\n• Policy status: Active, premium current\n• Claim count: 1 of 3 annual limit\n• Estimated payout: $1,900' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (messages.length < demoFlow.length + 1) {
        const nextIndex = messages.length - 1;
        if (nextIndex < demoFlow.length) {
          setIsTyping(true);
          setTimeout(() => {
            setMessages(prev => [...prev, demoFlow[nextIndex]]);
            setIsTyping(false);
          }, 2000);
        }
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [messages]);

  return (
    <section id="demo" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            See Usurity in Action
          </h2>
          <p className="text-xl text-gray-300">
            Watch our AI process a real insurance claim in real-time
          </p>
        </div>
        
        {/* Demo Chat Panel */}
        <div 
          className="backdrop-blur-xl bg-white/5 border border-brand/30 rounded-3xl p-6 shadow-2xl"
          style={{
            boxShadow: '0 0 0 1px rgba(173,114,78,0.25), 0 0 60px rgba(173,114,78,0.10)',
          }}
        >
          <div className="flex items-center mb-6 pb-4 border-b border-white/10">
            <div className="p-2 rounded-full bg-brand/20 mr-3">
              <MessageCircle className="w-5 h-5 text-brand" />
            </div>
            <h3 className="text-lg font-semibold text-white">Usurity AI Assistant</h3>
            <div className="ml-auto flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
          </div>
          
          <div className="space-y-4 mb-6 max-h-80 overflow-y-auto">
            {messages.map((message, index) => (
              <div 
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    message.type === 'user' 
                      ? 'bg-brand text-black' 
                      : 'bg-white/10 text-gray-100 border border-white/20'
                  }`}
                >
                  <pre className="whitespace-pre-wrap text-sm font-medium">
                    {message.text}
                  </pre>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 border border-white/20 px-4 py-3 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-brand rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-brand rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-brand rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Input Area */}
          <div className="flex items-center space-x-3">
            <input 
              type="text" 
              placeholder="Try typing a message..."
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              className="flex-1 px-4 py-3 rounded-full bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-brand/50 focus:ring-2 focus:ring-brand/20"
            />
            <button className="p-3 rounded-full bg-brand hover:bg-brand/90 transition-colors duration-200">
              <Send className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;