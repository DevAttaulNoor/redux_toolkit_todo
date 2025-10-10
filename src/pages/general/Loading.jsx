const Loading = () => {
    return (
        <main className="relative max-w-[1200px] w-full h-screen mx-auto overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
                <div className="w-24 h-24 border-4 border-t-[#9417e2] border-b-[#9417e2] border-l-transparent border-r-transparent rounded-full animate-spin" />
            </div>
        </main>
    );
};

export default Loading;