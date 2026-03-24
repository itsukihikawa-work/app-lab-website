import React from 'react';

const Members = () => {
  const members = [
    {
      role: "教授 (Professor)",
      name: "山田 太郎",
      englishName: "Taro Yamada",
      research: "基盤モデル、自然言語処理",
      image: "https://ui-avatars.com/api/?name=Taro+Yamada&background=0D8ABC&color=fff&size=200"
    },
    {
      role: "准教授 (Associate Professor)",
      name: "佐藤 花子",
      englishName: "Hanako Sato",
      research: "ヒューマン・コンピューター・インタラクション",
      image: "https://ui-avatars.com/api/?name=Hanako+Sato&background=0D8ABC&color=fff&size=200"
    },
    {
      role: "特任助教 (Assistant Professor)",
      name: "鈴木 健",
      englishName: "Ken Suzuki",
      research: "自律ロボティクス、強化学習",
      image: "https://ui-avatars.com/api/?name=Ken+Suzuki&background=0D8ABC&color=fff&size=200"
    },
    {
      role: "博士後期課程 (Ph.D. Student)",
      name: "田中 由美",
      englishName: "Yumi Tanaka",
      research: "AIの社会実装と倫理",
      image: "https://ui-avatars.com/api/?name=Yumi+Tanaka&background=0D8ABC&color=fff&size=200"
    }
  ];

  const students = [
    { type: "博士前期課程 (Master's)", count: 12 },
    { type: "学部生 (Undergraduates)", count: 8 },
    { type: "研究生 (Research Students)", count: 2 },
  ];

  return (
    <section id="members" className="scroll-mt-20 py-24 bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">Our Team</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            メンバー紹介
          </p>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            多様なバックグラウンドを持つ研究者と学生が、次世代システムを探求しています。
          </p>
        </div>

        {/* Staff & Ph.D */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div 
              key={index} 
              className="group bg-gray-50 dark:bg-zinc-950 rounded-2xl p-6 text-center border border-gray-200 dark:border-zinc-800 hover:border-blue-400 dark:hover:border-blue-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full blur-sm opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-zinc-900 shadow-sm"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">
                {member.englishName}
              </p>
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full mb-3">
                {member.role}
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-zinc-800 pt-4 mt-2">
                <span className="block text-xs text-gray-400 mb-1">専門分野</span>
                {member.research}
              </p>
            </div>
          ))}
        </div>

        {/* Students Summary */}
        <div className="max-w-3xl mx-auto mt-20 p-8 bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-900/30">
          <h3 className="text-lg font-bold text-center text-gray-900 dark:text-white mb-8">
            学生数
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {students.map((student, idx) => (
              <div key={idx} className="bg-white dark:bg-zinc-900 rounded-xl p-4 shadow-sm border border-white dark:border-zinc-800/50">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  {student.type}
                </p>
                <p className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                  {student.count}<span className="text-lg font-medium text-gray-400 ml-1">名</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
