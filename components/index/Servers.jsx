import getConfig from 'next/config'
import Link from 'next/link'
const {publicRuntimeConfig} = getConfig()

export default function Servers() {
    const servers = publicRuntimeConfig.servers
    return (
        <>
            <div className="pb-16">
                <section className="container pt-16 mx-auto max-w-8xl">
                    <div>
                        <div role="contentinfo" className="flex flex-col items-center px-4">
                            <h1
                                tabIndex="0"
                                className="pt-4 text-4xl font-extrabold leading-10 text-center text-white focus:outline-none lg:text-4xl lg:w-5/12 md:w-9/12"
                            >
                                Services
                            </h1>
                        </div>
                        <div
                            tabIndex="0"
                            aria-label="group of cards"
                            className="flex flex-wrap justify-center gap-10 px-4 mt-20 focus:outline-none"
                        >
                            {servers.map((server) => {
                                return (
                                    <button>
                                        <Link href={server.href}>
                                            <div tabIndex="0" aria-label="card 4" className="relative flex h-40 focus:outline-none w-80 pb-15">
                                                <img
                                                    src={server.background}
                                                    className="rounded-md shadow-md w-96 h-50"
                                                    alt={server.name}
                                                />
                                                <div className="absolute w-10 h-10 left-4 bottom-16">
                                                    <img src={server.icon} alt={server.name}/>
                                                </div>
                                                <h1 className="absolute text-lg font-extrabold text-white left-4 bottom-8">
                                                    {server.name}
                                                </h1>
                                            </div>
                                        </Link>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}