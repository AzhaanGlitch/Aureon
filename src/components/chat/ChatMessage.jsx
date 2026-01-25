// src/components/chat/ChatMessage.jsx
import React from 'react';
import { Bot, User } from 'lucide-react';

const ChatMessage = ({ message }) => {
  const isBot = message.sender === 'bot';

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
      <div 
        className={`flex items-start space-x-2 max-w-[80%] ${
          !isBot ? 'flex-row-reverse space-x-reverse' : ''
        }`}
      >
        {/* Avatar */}
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          isBot ? 'bg-blue-100' : 'bg-gray-200'
        }`}>
          {isBot ? (
            <Bot size={18} className="text-blue-600" />
          ) : (
            <User size={18} className="text-gray-600" />
          )}
        </div>

        {/* Message Bubble */}
        <div>
          <div className={`rounded-lg p-4 ${
            isBot 
              ? 'bg-gray-100 text-gray-800' 
              : 'bg-blue-600 text-white'
          }`}>
            <p className="text-sm whitespace-pre-line">{message.text}</p>
          </div>
          <p className="text-xs text-gray-500 mt-1 px-2">{message.time}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;