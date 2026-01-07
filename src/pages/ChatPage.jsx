// src/pages/ChatPage.jsx
import React, { useState } from 'react';
import Header from '../components/common/Header';
import BottomNav from '../components/common/BottomNav';
import { DUMMY_USER } from '../data/dummyData';
import { Send, Bot, User } from 'lucide-react';

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hi Emma! 👋 I'm your AI financial assistant. Ask me anything about your finances!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickSuggestions = [
    "How much did I spend on food last month?",
    "Am I on track with my budget?",
    "When can I afford a new laptop?",
    "Show my biggest expenses"
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: inputMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, userMessage]);
    setInputMessage('');

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        sender: 'bot',
        text: getBotResponse(inputMessage),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('food') || input.includes('dining')) {
      return "This month, you've spent $197.50 on food (5 days in). That's broken down as:\n• Dining Out: $125 (63%)\n• Groceries: $72.50 (37%)\n\nYou're on track to exceed your food budget by $820. Consider cooking at home more to save money!";
    }
    
    if (input.includes('budget')) {
      return "Great question! Your January budget status:\n• Total Budget: $2,500\n• Spent: $497.50 (20%)\n• Remaining: $2,002.50\n\nYou're doing well overall, but watch your transportation spending - it's at 64% of budget already.";
    }
    
    if (input.includes('laptop')) {
      return "Based on your current finances:\n• You have $3,460 available cash\n• After keeping $2,000 for emergencies, you have $1,460\n\nYou can afford a $1,200 laptop now, but I'd recommend saving for 4 months ($300/mo) to keep your emergency fund intact. You could afford it by May 2026!";
    }
    
    if (input.includes('expense')) {
      return "Your biggest expenses this month:\n1. Housing: $0 (due Jan 15) - $800\n2. Food & Dining: $197.50\n3. Transportation: $127\n4. Groceries: $120\n5. Entertainment: $65\n\nTransportation is your fastest-growing category!";
    }
    
    return "I can help you with:\n• Tracking spending by category\n• Budget analysis\n• Goal planning\n• Expense predictions\n• Money-saving tips\n\nWhat would you like to know?";
  };

  const handleSuggestionClick = (suggestion) => {
    setInputMessage(suggestion);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header user={DUMMY_USER} />
      
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 pb-32">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">AI Financial Assistant</h1>

        {/* Chat Messages */}
        <div className="bg-white rounded-xl shadow-sm mb-4 flex flex-col" style={{ height: 'calc(100vh - 350px)' }}>
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === 'bot' ? 'bg-blue-100' : 'bg-gray-200'
                  }`}>
                    {message.sender === 'bot' ? (
                      <Bot size={18} className="text-blue-600" />
                    ) : (
                      <User size={18} className="text-gray-600" />
                    )}
                  </div>
                  <div>
                    <div className={`rounded-lg p-4 ${
                      message.sender === 'bot' 
                        ? 'bg-gray-100 text-gray-800' 
                        : 'bg-blue-600 text-white'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 px-2">{message.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Suggestions */}
          {messages.length === 1 && (
            <div className="p-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-3">Quick suggestions:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {quickSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="text-left text-sm p-3 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-blue-500 transition"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSendMessage} className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex space-x-3">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask me anything about your finances..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              <Send size={20} />
              <span className="hidden sm:inline">Send</span>
            </button>
          </div>
        </form>
      </main>

      <BottomNav />
    </div>
  );
};

export default ChatPage;