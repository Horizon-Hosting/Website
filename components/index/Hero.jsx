import Image from "next/image";

export default function Hero() {
    return (
        <>
            <div className="container flex flex-col items-center px-5 py-24 pt-24 mx-auto text-gray-300 md:pt-36 md:flex-row">
                <div className="flex flex-col items-center py-5 mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
                    <h1 className="mt-4 text-4xl font-black tracking-tight select-none text-accent sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                        Horizon Hosting
                    </h1>
                    <h2 className="mt-3 font-thin select-none text-md md:block lg:text-3xl xl:text-4xl">
                        ⚡ High performance. 🤑 Low prices. 🔥 No compromises.
                    </h2>
                    <p className="pt-8 text-base md:pt-5 sm:mt-5 sm:text-3xl lg:text-xl xl:text-2xl">
                        Horizon Hosting provides you with high quality game and web hosting services at a low price.
                        Available in the US and Europe.
                        With an on hand support team ready to assist you, so you can be sure that your server will be up
                        and running in no time.
                    </p>
                    <div className="flex justify-center pt-10 md:pt-8">
                        <a href="https://billing.horizonnetworks.uk/store/">
                            <button className="inline-flex px-6 py-2 text-lg text-white border-0 rounded shadow-xl bg-accent focus:outline-none hover:ring-3 ring-accent ring-opacity-50">
                                🛒 Order Now
                            </button>
                        </a>
                        <a href="https://docs.horizonnetworks.uk/knowledgebase/getting_support">
                            <button className="inline-flex px-6 py-2 ml-4 text-lg text-gray-400 bg-gray-800 border-0 rounded shadow-xl focus:outline-none hover:bg-gray-700 hover:text-white">
                                🙋 Need some help?
                            </button>
                        </a>
                    </div>
                </div>
                <div className="z-10 hidden pl-3 lg:max-w-lg lg:w-full md:w-1/7 md:block">
                    <div className="relative h-64 w-96">
                        <Image
                            src={`/assets/index.svg`}
                            alt="Servers Image"
                            layout="fill"
                            objectFit="cover"
                            className="object-cover object-center select-none"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}