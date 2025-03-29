import React from "react";

export const Frame = (): JSX.Element => {
  return (
    <div className="bg-zinc-900 flex flex-col w-full min-h-screen">
      <div className="sm:hidden bg-zinc-900 w-full mx-auto px-4">
        <header className="w-full h-[70px] bg-zinc-900 flex items-center justify-between">
          <div className="font-bold text-white text-[20px] font-['Istok_Web',Helvetica]">
            Waffle.Inc
          </div>
          <div className="flex gap-4">
            <a href="https://t.me/Waffle_Channel" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img
                className="w-8 h-8 invert"
                alt="Telegram icon"
                src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/telegram.svg"
              />
            </a>
            <a href="https://github.com/waffle-inc" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img
                className="w-8 h-8 invert"
                alt="GitHub icon"
                src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/github.svg"
              />
            </a>
          </div>
        </header>

        <main className="flex flex-col pt-12 pb-12">
          <div className="relative min-h-[250px] mb-16">
            <div>
              <h1 className="font-['Istok_Web',Helvetica] font-bold text-[#bd993d] text-[60px] tracking-tight leading-[0.9]">
                Waffle.Inc
              </h1>
              <div className="ml-[10px]">
                <h2 className="font-['Istok_Web',Helvetica] font-normal text-white text-[16px] mt-3">
                  Код, пропитанный совершенством.
                </h2>
              </div>
            </div>

            <div className="mt-8 ml-[10px] flex flex-col gap-4">
              <a 
                href="https://github.com/waffle-inc/repositories" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-['Istok_Web',Helvetica] font-bold text-zinc-900 bg-[#bd993d] text-[18px] py-2 px-4 rounded-[12px] inline-block hover:bg-[#d5ad4e] transition-all duration-300 text-center"
              >
                Наши проекты
              </a>
              <a 
                href="https://t.me/wafflesupport" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-['Istok_Web',Helvetica] font-bold text-[#bd993d] text-[18px] py-2 px-4 rounded-[12px] inline-block border border-[#bd993d] hover:bg-zinc-800 transition-all duration-300 text-center"
              >
                Связаться с нами
              </a>
            </div>

            <div className="mt-8 max-w-full">
              <div className="relative">
                <div className="relative z-10 font-['Istok_Web',Helvetica] font-bold text-white text-center py-6 px-6 text-[18px]">
                  Мы создаем программные решения, которые помогают бизнесу расти и
                  развиваться в современном цифровом мире.
                </div>
                <div className="absolute inset-0 z-0 rounded-[20px] border-[1px] border-solid border-[#be9a3d]" />
              </div>
            </div>
          </div>

          <div className="py-12">
            <div className="flex justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#bd993d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            
            <h2 className="font-['Istok_Web',Helvetica] font-bold text-[#bd993d] text-[30px] text-center mb-10">
              Наши услуги
            </h2>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-zinc-800 rounded-[20px] p-6 border-[1px] border-[#be9a3d] hover:bg-zinc-700 transition-all duration-300">
                <div className="mb-4 text-[#bd993d] text-4xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-['Istok_Web',Helvetica] font-bold text-white text-[22px] mb-4">Веб-разработка</h3>
                <p className="font-['Istok_Web',Helvetica] text-gray-300 mb-6">
                  Создаем интуитивно понятные и высокопроизводительные веб-приложения с современным дизайном и адаптивным интерфейсом.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">React</span>
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">Vue</span>
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">Next.js</span>
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">TypeScript</span>
                </div>
              </div>

              <div className="bg-zinc-800 rounded-[20px] p-6 border-[1px] border-[#be9a3d] hover:bg-zinc-700 transition-all duration-300">
                <div className="mb-4 text-[#bd993d] text-4xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3zm0 0h16m-8 0v16" />
                  </svg>
                </div>
                <h3 className="font-['Istok_Web',Helvetica] font-bold text-white text-[22px] mb-4">DevOps</h3>
                <p className="font-['Istok_Web',Helvetica] text-gray-300 mb-6">
                  Автоматизируем процессы разработки и развертывания, обеспечивая непрерывную интеграцию и доставку вашего продукта.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">Docker</span>
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">Kubernetes</span>
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">CI/CD</span>
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">AWS/GCP</span>
                </div>
              </div>

              <div className="bg-zinc-800 rounded-[20px] p-6 border-[1px] border-[#be9a3d] hover:bg-zinc-700 transition-all duration-300">
                <div className="mb-4 text-[#bd993d] text-4xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="font-['Istok_Web',Helvetica] font-bold text-white text-[22px] mb-4">Бэкенд-разработка</h3>
                <p className="font-['Istok_Web',Helvetica] text-gray-300 mb-6">
                  Разрабатываем масштабируемые и безопасные серверные решения, обеспечивающие стабильную работу вашего приложения.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">Node.js</span>
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">Python</span>
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">Go</span>
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">Микросервисы</span>
                </div>
              </div>

              <div className="bg-zinc-800 rounded-[20px] p-6 border-[1px] border-[#be9a3d] hover:bg-zinc-700 transition-all duration-300">
                <div className="mb-4 text-[#bd993d] text-4xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-['Istok_Web',Helvetica] font-bold text-white text-[22px] mb-4">Data Science</h3>
                <p className="font-['Istok_Web',Helvetica] text-gray-300 mb-6">
                  Превращаем ваши данные в ценную информацию и строим интеллектуальные системы с помощью машинного обучения.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">Python</span>
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">TensorFlow</span>
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">NLP</span>
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">ML</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="hidden sm:block bg-zinc-900 w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 overflow-x-hidden">
        <header className="w-full h-[80px] bg-zinc-900 flex items-center justify-between">
          <div className="font-bold text-white text-[24px] md:text-[28px] font-['Istok_Web',Helvetica]">
            Waffle.Inc
          </div>
          <div className="flex gap-4 md:gap-6">
            <a href="https://t.me/Waffle_Channel" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img
                className="w-8 h-8 md:w-10 md:h-10 invert"
                alt="Telegram icon"
                src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/telegram.svg"
              />
            </a>
            <a href="https://github.com/waffle-inc" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img
                className="w-8 h-8 md:w-10 md:h-10 invert"
                alt="GitHub icon"
                src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/github.svg"
              />
            </a>
          </div>
        </header>

        <main className="flex flex-col pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-24 md:pb-32">
          <div className="relative min-h-[280px] sm:min-h-[300px] md:min-h-[350px] mb-24 sm:mb-28 md:mb-36 lg:mb-40">
            <div className="max-w-full overflow-hidden">
              <h1 className="font-['Istok_Web',Helvetica] font-bold text-[#bd993d] text-[55px] sm:text-[70px] md:text-[90px] lg:text-[120px] tracking-tight leading-[0.9]">
                Waffle.Inc
              </h1>
              <div className="ml-[15px] sm:ml-[20px] md:ml-[25px]">
                <h2 className="font-['Istok_Web',Helvetica] font-normal text-white text-[20px] sm:text-[22px] md:text-[25px] mt-3">
                  Код, пропитанный совершенством.
                </h2>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 md:mt-12 ml-[15px] sm:ml-[20px] md:ml-[25px] flex flex-wrap gap-4 sm:gap-6">
              <a 
                href="https://github.com/waffle-inc/repositories" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-['Istok_Web',Helvetica] font-bold text-zinc-900 bg-[#bd993d] text-[18px] sm:text-[20px] md:text-[22px] py-2 px-4 sm:px-6 rounded-[12px] inline-block hover:bg-[#d5ad4e] transition-all duration-300"
              >
                Наши проекты
              </a>
              <a 
                href="https://t.me/wafflesupport" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-['Istok_Web',Helvetica] font-bold text-[#bd993d] text-[18px] sm:text-[20px] md:text-[22px] py-2 px-4 sm:px-6 rounded-[12px] inline-block border border-[#bd993d] hover:bg-zinc-800 transition-all duration-300"
              >
                Связаться с нами
              </a>
            </div>

            <div className="absolute right-4 sm:right-6 md:right-8 top-[140px] sm:top-[180px] md:top-[220px] max-w-[340px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[550px] overflow-visible">
              <div className="rounded-[20px] sm:rounded-[25px] bg-zinc-900 ring-2 ring-[#be9a3d]">
                <div className="font-['Istok_Web',Helvetica] font-bold text-white text-center py-5 sm:py-6 md:py-7 lg:py-8 px-5 sm:px-6 md:px-7 lg:px-8 text-[16px] sm:text-[18px] md:text-[22px] lg:text-[25px]">
                  Мы создаем программные решения, которые помогают бизнесу расти и
                  развиваться в современном цифровом мире.
                </div>
              </div>
            </div>
          </div>

          <div className="py-12 sm:py-14 md:py-16 overflow-x-hidden">
            <div className="flex justify-center mb-6 sm:mb-7 md:mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-[#bd993d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            
            <h2 className="font-['Istok_Web',Helvetica] font-bold text-[#bd993d] text-[30px] sm:text-[35px] md:text-[40px] text-center mb-10 sm:mb-12 md:mb-16">
              Наши услуги
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7 lg:gap-8 mx-auto max-w-full">
              <div className="bg-zinc-800 rounded-[20px] p-3 sm:p-4 md:p-5 lg:p-6 border-[1px] border-[#be9a3d] hover:bg-zinc-700 transition-all duration-300 h-full">
                <div className="mb-3 sm:mb-4 text-[#bd993d] text-4xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-['Istok_Web',Helvetica] font-bold text-white text-[18px] sm:text-[20px] md:text-[22px] mb-3 sm:mb-4">Веб-разработка</h3>
                <p className="font-['Istok_Web',Helvetica] text-gray-300 mb-4 sm:mb-5 md:mb-6 text-[14px] sm:text-[15px] md:text-[16px]">
                  Создаем интуитивно понятные и высокопроизводительные веб-приложения с современным дизайном и адаптивным интерфейсом.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">React</span>
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">Vue</span>
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">Next.js</span>
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">TypeScript</span>
                </div>
              </div>

              <div className="bg-zinc-800 rounded-[20px] p-3 sm:p-4 md:p-5 lg:p-6 border-[1px] border-[#be9a3d] hover:bg-zinc-700 transition-all duration-300 h-full">
                <div className="mb-3 sm:mb-4 text-[#bd993d] text-4xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3zm0 0h16m-8 0v16" />
                  </svg>
                </div>
                <h3 className="font-['Istok_Web',Helvetica] font-bold text-white text-[18px] sm:text-[20px] md:text-[22px] mb-3 sm:mb-4">DevOps</h3>
                <p className="font-['Istok_Web',Helvetica] text-gray-300 mb-4 sm:mb-5 md:mb-6 text-[14px] sm:text-[15px] md:text-[16px]">
                  Автоматизируем процессы разработки и развертывания, обеспечивая непрерывную интеграцию и доставку вашего продукта.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">Docker</span>
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">Kubernetes</span>
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">CI/CD</span>
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">AWS/GCP</span>
                </div>
              </div>

              <div className="bg-zinc-800 rounded-[20px] p-3 sm:p-4 md:p-5 lg:p-6 border-[1px] border-[#be9a3d] hover:bg-zinc-700 transition-all duration-300 h-full">
                <div className="mb-3 sm:mb-4 text-[#bd993d] text-4xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="font-['Istok_Web',Helvetica] font-bold text-white text-[18px] sm:text-[20px] md:text-[22px] mb-3 sm:mb-4">Бэкенд-разработка</h3>
                <p className="font-['Istok_Web',Helvetica] text-gray-300 mb-4 sm:mb-5 md:mb-6 text-[14px] sm:text-[15px] md:text-[16px]">
                  Разрабатываем масштабируемые и безопасные серверные решения, обеспечивающие стабильную работу вашего приложения.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">Node.js</span>
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">Python</span>
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">Go</span>
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">Микросервисы</span>
                </div>
              </div>

              <div className="bg-zinc-800 rounded-[20px] p-3 sm:p-4 md:p-5 lg:p-6 border-[1px] border-[#be9a3d] hover:bg-zinc-700 transition-all duration-300 h-full">
                <div className="mb-3 sm:mb-4 text-[#bd993d] text-4xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-['Istok_Web',Helvetica] font-bold text-white text-[18px] sm:text-[20px] md:text-[22px] mb-3 sm:mb-4">Data Science</h3>
                <p className="font-['Istok_Web',Helvetica] text-gray-300 mb-4 sm:mb-5 md:mb-6 text-[14px] sm:text-[15px] md:text-[16px]">
                  Превращаем ваши данные в ценную информацию и строим интеллектуальные системы с помощью машинного обучения.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">Python</span>
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">TensorFlow</span>
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">NLP</span>
                  <span className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-full">ML</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
