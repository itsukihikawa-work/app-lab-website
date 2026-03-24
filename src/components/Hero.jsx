import React from 'react';

const Hero = () => {
  return (
    <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[80vh] text-center">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium mb-8 border border-blue-200 dark:border-blue-800/50 shadow-sm transition-transform hover:scale-105">
        <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
        次世代AI・システム工学研究室
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-blue-800 to-cyan-600 dark:from-white dark:via-blue-200 dark:to-cyan-400 mb-6 drop-shadow-sm leading-[1.15]">
        人間と知能が <br className="hidden md:block" /> 共生する社会の実現
      </h1>
      
      <p className="max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-balance">
        当研究室では、高度な機械学習の基盤技術から自然言語処理、ヒューマンコンピュータインタラクション（HCI）までを統合し、人々の生活を豊かにする先端技術を探求しています。
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#research" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-500/25 hover:-translate-y-0.5 transition-transform active:scale-95">
          研究内容を見る
        </a>
        <button className="px-8 py-3.5 rounded-full font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800 hover:shadow-lg transition-all active:scale-95">
          論文・メンバー紹介
        </button>
      </div>
    </main>
  );
};

export default Hero;
