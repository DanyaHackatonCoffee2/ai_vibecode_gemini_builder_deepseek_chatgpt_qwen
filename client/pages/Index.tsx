import { useState } from "react";

export default function Index() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileInputKey, setFileInputKey] = useState(0);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleLogout = () => {
    setSelectedFile(null);
    setFileInputKey(prev => prev + 1);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-white to-[#80A8FF]">
      {/* Sidebar - Hidden on mobile, shown on md+ */}
      <aside className="hidden md:flex md:w-[265px] flex-col justify-between p-6 border-r-2 border-black relative">
        <div>
          <h2 className="text-[30px] font-medium leading-[110%] tracking-[-0.9px] text-center text-black font-raleway">
            История анализа писем
          </h2>
        </div>

        <div className="text-center">
          <p className="text-xl font-medium leading-[110%] tracking-[-0.6px] text-black/75 mb-2 font-inter">
            Вы вошли как Белкин Сергей Викторович.
          </p>
          <button
            onClick={handleLogout}
            className="text-xl font-medium leading-[110%] tracking-[-0.6px] text-black font-inter hover:underline transition-all"
          >
            Выйти
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-4 py-8 md:py-0">
        {/* Title */}
        <div className="w-full max-w-4xl text-center mt-4 md:mt-12">
          <h1 className="text-3xl md:text-5xl lg:text-[50px] font-medium leading-[110%] tracking-[-1.5px] text-black font-raleway">
            Банковский ассистент Захар
          </h1>
        </div>

        {/* File Upload Section */}
        <div className="w-full max-w-4xl mt-12 md:mt-24 flex flex-col items-center gap-8">
          <div className="relative">
            <input
              key={fileInputKey}
              type="file"
              id="file-upload"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              onChange={handleFileSelect}
              accept=".eml,.msg,.txt"
            />
            <label
              htmlFor="file-upload"
              className="block w-[300px] sm:w-[400px] h-[82px] rounded-full bg-[#8FB8FF] shadow-[0_8px_4px_0_rgba(0,0,0,0.5)] flex items-center justify-center cursor-pointer hover:bg-[#7DA7EE] transition-all"
            >
              <span className="text-2xl md:text-[30px] font-semibold leading-[110%] tracking-[-0.9px] text-black font-raleway">
                Выберите файл
              </span>
            </label>
          </div>

          <div className="text-center">
            <p className="text-2xl md:text-[30px] font-medium leading-[110%] tracking-[-0.9px] text-black font-raleway">
              {selectedFile ? selectedFile.name : "Файл не выбран"}
            </p>
          </div>

          <div className="text-center max-w-xl px-4">
            <p className="text-xl md:text-[30px] font-medium leading-[110%] tracking-[-0.9px] text-black font-raleway">
              Результат обработки письма появится снизу.
            </p>
          </div>
        </div>

        {/* Mobile logout - shown only on mobile */}
        <div className="md:hidden mt-auto pb-8 text-center">
          <p className="text-sm font-medium text-black/75 mb-2 font-inter">
            Вы вошли как Белкин Сергей Викторович.
          </p>
          <button
            onClick={handleLogout}
            className="text-sm font-medium text-black font-inter hover:underline transition-all"
          >
            Выйти
          </button>
        </div>
      </main>
    </div>
  );
}
