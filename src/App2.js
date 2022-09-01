import App3 from "./App3"

function App2() {
    return (
        <div>
            <nav class="bg-slate-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded">
                <div class="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="#" class="flex items-center">
                        <span class="self-center text-xl font-semibold whitespace-nowrap">Mobile Plan</span>
                    </a>
                </div>
            </nav>
            <div className="w-100 h-screen flex bg-violet-400" >
                <div className="w-1/4 h-full text-sm font-medium py-10 px-4 bg-white">
                </div>
                <div className="w-3/4 h-full pt-10 flex flex-col flex-wrap content-center bg-slate-400">
                </div>
            </div>
        </div>
      );
}

export default App2