import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-20 py-24 bg-gray-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">Contact Us</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            お問い合わせ
          </p>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            共同研究のご相談、大学院進学（見学）を希望される方など、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-xl shadow-blue-900/5 border border-gray-100 dark:border-zinc-800">
          
          {/* Contact Information */}
          <div className="p-8 md:p-12 bg-gradient-to-br from-blue-600 to-cyan-700 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-48 h-48 bg-cyan-400 opacity-20 rounded-full blur-2xl"></div>
            
            <h3 className="text-2xl font-bold mb-6 relative z-10">アクセス・連絡先</h3>
            <p className="text-blue-100 mb-10 leading-relaxed relative z-10">
              研究室の見学を希望される学生の方は、事前にメールにて希望日時をご連絡ください。オンラインでの面談も随時受け付けております。
            </p>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-start">
                <svg className="w-6 h-6 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="ml-4">
                  <p className="font-semibold">Email</p>
                  <p className="text-blue-100 text-sm mt-1">contact@aisystems-lab.example.ac.jp</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="ml-4">
                  <p className="font-semibold">所在地</p>
                  <p className="text-blue-100 text-sm mt-1">
                    〒113-xxxx<br/>
                    東京都文京区弥生1-x-x<br/>
                    第X総合研究棟 12階 1205号室
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 md:p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">お名前</label>
                  <input type="text" id="name" className="mt-2 block w-full rounded-lg border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800/50 text-gray-900 dark:text-white shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-3 outline-none transition-colors" placeholder="山田 太郎" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">メールアドレス</label>
                  <input type="email" id="email" className="mt-2 block w-full rounded-lg border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800/50 text-gray-900 dark:text-white shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-3 outline-none transition-colors" placeholder="taro@example.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">ご用件</label>
                <select id="subject" className="mt-2 block w-full rounded-lg border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800/50 text-gray-900 dark:text-white shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-3 outline-none transition-colors appearance-none">
                  <option>研究室見学・進学について</option>
                  <option>共同研究・技術相談について</option>
                  <option>取材・その他のお問い合わせ</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">メッセージ本文</label>
                <textarea id="message" rows={4} className="mt-2 block w-full rounded-lg border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800/50 text-gray-900 dark:text-white shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-3 outline-none transition-colors resize-none" placeholder="メッセージをご記入ください..."></textarea>
              </div>

              <div>
                <button type="submit" className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-lg shadow-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-zinc-900 transition-all active:scale-[0.98]">
                  メッセージを送信する
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
