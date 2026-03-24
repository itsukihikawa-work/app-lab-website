import React from 'react';

const Research = () => {
  const themes = [
    {
      title: '基盤モデルと自然言語処理',
      description: '大規模言語モデル（LLM）の高度化から、効率的な学習アルゴリズムの探求まで、次世代のAI基盤となるモデルの研究を行っています。',
      icon: (
        <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: 'ヒューマン・コンピューター・インタラクション',
      description: '人間とAIが自然に協調し、人々の創造性や生産性を拡張する新しいインターフェースやXR環境（VR/AR）の設計・評価手法を開発します。',
      icon: (
        <svg className="w-8 h-8 text-cyan-500 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: '自律ロボティクスシステム',
      description: '不確実な実世界環境において、ロボットが自律的に状況を認識し、適切な行動を学習・計画するための強化学習や制御理論を研究します。',
      icon: (
        <svg className="w-8 h-8 text-indigo-500 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      )
    },
    {
      title: 'AIの社会実装とトラスト',
      description: 'AI技術を実社会へ適応させる際の課題（公平性、説明可能性、プライバシー保護）を解決し、信頼できるAIシステム（Trustworthy AI）の実現を目指します。',
      icon: (
        <svg className="w-8 h-8 text-teal-500 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section id="research" className="scroll-mt-20 py-24 bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">Research Areas</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            研究内容
          </p>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            当ラボでは4つの主要なテーマを柱として、<br className="hidden md:block"/>多角的な視点から次世代システムの研究開発にアプローチしています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {themes.map((theme, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-50 dark:bg-zinc-950 p-8 rounded-2xl border border-gray-200/60 dark:border-zinc-800/60 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 group-hover:scale-110 transition-transform duration-300">
                  {theme.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {theme.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {theme.description}
              </p>
              
              <div className="mt-6 flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 cursor-pointer w-fit">
                詳細を見る 
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
