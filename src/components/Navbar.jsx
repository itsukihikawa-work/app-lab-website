import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'ホーム', href: '#home' },
    { name: '研究内容', href: '#research' },
    { name: '業績・論文', href: '#publications' },
    { name: 'メンバー', href: '#members' }
  ];

  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-gray-200/50 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
              AI
            </div>
            <span className="font-bold text-lg tracking-tight text-gray-900 dark:text-white hidden sm:block">
              次世代AI・システム工学研究室
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a href="#contact" className="inline-block px-5 py-2 text-sm font-medium text-white bg-blue-600 dark:bg-blue-500 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-all active:scale-95 shadow-md shadow-blue-600/20">
              お問い合わせ
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-64 border-b border-gray-200/50 dark:border-white/10 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-lg' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 space-y-3 shadow-inner">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a href="#contact" className="block w-full text-center mt-4 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg shadow-md hover:from-blue-700 hover:to-cyan-600 active:scale-95 transition-all">
            お問い合わせ
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
