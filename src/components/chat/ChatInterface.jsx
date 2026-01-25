// src/components/chat/ChatInterface.jsx
import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ChatInterface = ({ onSendMessage, disabled = false }) => {
  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    onSendMessage(inputMessage);
    setInputMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex space-x-3">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Ask me anything about your finances..."
          disabled={disabled}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:bg-gray-50 disabled:text-gray-400"
        />
        <button
          type="submit"
          disabled={!inputMessage.trim() || disabled}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center space-x-2"
        >
          <Send size={20} />
          <span className="hidden sm:inline">Send</span>
        </button>
      </div>
    </form>
  );
};

export default ChatInterface;