import React from 'react';

const Publications = () => {
  const papers = [
    {
      year: "2026",
      type: "Journal",
      title: "Towards Generalizable Foundation Models for Human-Robot Collaboration",
      authors: "Taro Yamada, Hanako Sato, John Doe",
      venue: "IEEE Transactions on Robotics (T-RO)",
      link: "#"
    },
    {
      year: "2026",
      type: "Conference",
      title: "Efficient Alignment of Large Language Models via Sparse Feedback",
      authors: "Hanako Sato, Taro Yamada",
      venue: "Proceedings of the 64th Annual Meeting of the Association for Computational Linguistics (ACL 2026)",
      link: "#"
    },
    {
      year: "2025",
      type: "Conference",
      title: "Trustworthy Decision Making in Autonomous Driving Systems",
      authors: "Ken Suzuki, John Doe, Taro Yamada",
      venue: "NeurIPS 2025",
      link: "#"
    },
    {
      year: "2025",
      type: "Journal",
      title: "Evaluating Cognitive Load in Extended Reality Interfaces",
      authors: "Yumi Tanaka, Taro Yamada",
      venue: "ACM Transactions on Computer-Human Interaction (TOCHI)",
      link: "#"
    }
  ];

  return (
    <section id="publications" className="scroll-mt-20 py-24 bg-gray-50 dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">Publications</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            業績・論文
          </p>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            当研究室から発表された主要な学術論文の一覧です。
          </p>
        </div>

        <div className="space-y-8">
          {papers.map((paper, index) => (
            <div 
              key={index} 
              className="group relative bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-blue-500/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                  {paper.year}
                </span>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {paper.type}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <a href={paper.link} className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {paper.title}
                </a>
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                {paper.authors}
              </p>
              
              <p className="text-sm font-medium italic text-gray-500 dark:text-gray-400">
                {paper.venue}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 rounded-full font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors">
            すべての業績を見る
          </button>
        </div>
      </div>
    </section>
  );
};

export default Publications;
