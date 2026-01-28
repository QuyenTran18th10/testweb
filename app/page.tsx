'use client';

import React from "react"

import { useState } from 'react';
import { Moon, Sun, Plus, Trash2 } from 'lucide-react';

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [tasks, setTasks] = useState<string[]>(['Học lập trình', 'Xây dựng website']);
  const [inputValue, setInputValue] = useState('');
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        isDark
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
          : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
      }`}
      onMouseMove={handleMouseMove}
    >
      {/* Cursor glow effect */}
      <div
        className={`fixed pointer-events-none w-48 h-48 rounded-full blur-3xl transition-all duration-75 ${
          isDark
            ? 'bg-purple-600/10'
            : 'bg-purple-400/10'
        }`}
        style={{
          left: `${mouseX - 96}px`,
          top: `${mouseY - 96}px`,
        }}
      />

      {/* Header */}
      <header
        className={`sticky top-0 z-50 backdrop-blur-sm transition-all duration-300 ${
          isDark
            ? 'bg-slate-900/50 border-slate-700'
            : 'bg-white/50 border-blue-100'
        } border-b`}
      >
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1
            className={`text-2xl font-bold transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            ✨ MyApp
          </h1>
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isDark
                ? 'bg-slate-700 hover:bg-slate-600'
                : 'bg-blue-100 hover:bg-blue-200'
            }`}
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700" />
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="text-center">
            <h2
              className={`text-5xl font-bold mb-4 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Chào mừng bạn! 👋
            </h2>
            <p
              className={`text-lg mb-8 transition-colors duration-300 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Đây là một website đơn giản được xây dựng với HTML, CSS và JavaScript
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isDark
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                Đi đến Task List
              </button>
            </div>
          </div>
        </section>

        {/* Features Cards */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '💻', title: 'Dễ Dàng', desc: 'Giao diện đơn giản và dễ sử dụng' },
            { icon: '🎨', title: 'Đẹp', desc: 'Thiết kế hiện đại và hấp dẫn' },
            { icon: '⚡', title: 'Nhanh', desc: 'Tải trang nhanh chóng và mượt mà' },
          ].map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                isDark
                  ? 'bg-slate-800 border border-slate-700 hover:bg-slate-700'
                  : 'bg-white border border-blue-100 hover:shadow-blue-200'
              }`}
            >
              <div className="text-4xl mb-2">{feature.icon}</div>
              <h3
                className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`transition-colors duration-300 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </section>

        {/* Task List Section */}
        <section className={`rounded-lg p-8 transition-all duration-300 ${
          isDark
            ? 'bg-slate-800 border border-slate-700'
            : 'bg-white border border-blue-100 shadow-lg'
        }`}>
          <h3
            className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            📝 Danh Sách Công Việc
          </h3>

          {/* Input */}
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
              placeholder="Thêm công việc mới..."
              className={`flex-1 px-4 py-3 rounded-lg transition-all duration-300 ${
                isDark
                  ? 'bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20'
                  : 'bg-blue-50 border border-blue-200 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20'
              }`}
            />
            <button
              onClick={addTask}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                isDark
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              <Plus className="w-5 h-5" />
              Thêm
            </button>
          </div>

          {/* Task List */}
          <ul className="space-y-3">
            {tasks.length === 0 ? (
              <p
                className={`text-center py-8 transition-colors duration-300 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                Không có công việc nào. Thêm một cái mới nhé!
              </p>
            ) : (
              tasks.map((task, index) => (
                <li
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-lg transition-all duration-300 group ${
                    isDark
                      ? 'bg-slate-700 hover:bg-slate-600'
                      : 'bg-blue-50 hover:bg-blue-100'
                  }`}
                >
                  <span className={`transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    ✓ {task}
                  </span>
                  <button
                    onClick={() => deleteTask(index)}
                    className={`p-2 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                      isDark
                        ? 'bg-red-900/30 hover:bg-red-900/50 text-red-400'
                        : 'bg-red-100 hover:bg-red-200 text-red-600'
                    }`}
                    aria-label={`Delete task: ${task}`}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </li>
              ))
            )}
          </ul>
        </section>

        {/* Footer */}
        <footer
          className={`mt-16 pt-8 border-t transition-all duration-300 text-center ${
            isDark
              ? 'border-slate-700 text-slate-400'
              : 'border-blue-100 text-slate-600'
          }`}
        >
          <p>Made with ❤️ - Website đơn giản của bạn</p>
          <p className="text-sm mt-2">© 2025 | Tất cả quyền được bảo lưu</p>
        </footer>
      </main>
    </div>
  );
}
