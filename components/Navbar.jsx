import Link from 'next/link'

export default function Navbar() {
    const leftItems = [
        {
            name: "BeamMP",
            url: 'https://billing.horizonnetworks.uk/store/beammp-server-hosting',
        },
        {
            name: "Garry's Mod",
            url: 'https://billing.horizonnetworks.uk/store/garrys-mod',
        },
        {
            name: 'Web',
            url: 'https://billing.horizonnetworks.uk/store/cpanel-web-hosting',
        },
    ]
    const rightItems = [
        {
            name: 'Minecraft',
            url: 'https://billing.horizonnetworks.uk/store/minecraft-java-server-hosting',
        },
        {
            name: 'Rust',
            url: 'https://billing.horizonnetworks.uk/store/rust-game-server-hosting'
        },
        {
            name: 'Other',
            url: 'https://billing.horizonnetworks.uk/store/'
        },
    ]
    return (
        <>
            <nav>
                <div className="px-2 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-20">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button"
                                    className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open Navbar</span>

                                <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>

                                <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-center sm:m-6">
                            <div className="hidden sm:block sm:ml-6 sm:mr-6">
                                <div className="flex space-x-4 text-white mt-2">
                                    {leftItems.map((item) => {
                                        return (
                                            <>
                                                <Link href={item.url}>{item.name}</Link>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>

                            <a href="/">
                                <div className="flex items-center flex-shrink-0 sm:ml-2 sm:mr-2">
                                    <img
                                        className="block w-auto h-12 select-none lg:hidden"
                                        src="https://archive.horizonnetworks.uk/Branding/Logo/Coloured_Icon.png"
                                        alt="Workflow"
                                    />
                                    <img
                                        className="hidden w-auto h-12 select-none lg:block"
                                        src="https://archive.horizonnetworks.uk/Branding/Logo/Coloured_Icon.png"
                                        alt="Workflow"
                                    /></div
                                >
                            </a>
                            <div className="hidden sm:block sm:ml-6 sm:mr-6">
                                <div className="flex space-x-4 text-white mt-2">
                                    {rightItems.map((item) => {
                                        return (
                                            <>
                                                <Link href={item.url}>{item.name}</Link>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="mobile-menu" className="sm:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a>{`Test`}</a>
                        <a>{`Test`}</a>
                    </div>
                </div>
            </nav>
        </>
    )
}