/** @format */

const Home = () => {
    return (
        <div className="w-full">
            <div className="relative">
                <img className="w-full max-h-[752px] object-cover" alt="" src="/Rectangle 6.png" />
                <div className="absolute flex justify-center items-center inset-0">
                    <div className="flex flex-col text-center gap-3">
                        <h1 className="text-white text-[52px]">Find Your Dream Home</h1>
                        <div className="flex flex-col text-primary_50 text-[20px]">
                            <span>
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                            </span>
                            <span> Proin sodales ultrices nulla blandit volutpat.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
