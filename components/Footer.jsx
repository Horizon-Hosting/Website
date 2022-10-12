import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faYoutube, faDiscord, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    const main = [
        {name: 'Status Page', href: 'https://status.horizonnetworks.uk/'},
        {name: 'Legal', href: 'https://docs.horizonnetworks.uk/'},
        {
            name: 'Report Abuse',
            href: 'https://billing.horizonnetworks.uk/submitticket.php?step=2&deptid=5',
        },
        {name: 'Contact Us', href: 'mailto:ask@horizonnetworks.uk'},
    ]
    const social = [
        {
            name: 'Twitter',
            href: 'https://twitter.com/HorizonNetUK/',
            icon: faTwitter
        },
        {
            name: 'YouTube',
            href: 'https://www.youtube.com/channel/UCWJPyqWoRc2IpdKczUBR1RQ/',
            iconPrefix: 'fab',
            icon: faYoutube
        },
        {
            name: 'Discord',
            href: 'https://horizonnetworks.uk/discord/',
            iconPrefix: 'fab',
            icon: faDiscord
        },
        {
            name: 'GitHub',
            href: 'https://github.com/Horizon-Hosting/',
            iconPrefix: 'fab',
            icon: faGithub
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/horizonhostingltd/',
            iconPrefix: 'fab',
            icon: faInstagram
        },
    ]
    return (
        <>
            <footer className="bg-background-800 snap snap-footer">
                <div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
                    <nav className="flex flex-wrap justify-center -mx-5 -my-2 select-none" aria-label="Footer">
                        <div>
                            {main.map((item) => {
                                return (
                                    <>
                                        <Link href={item.href}>
                                            <a className="text-base text-gray-400 hover:text-white mx-4">
                                                {item.name}
                                            </a>
                                        </Link>
                                    </>
                                )
                            })}
                        </div>
                    </nav>
                    <div className="flex justify-center mt-8 space-x-6">
                        {social.map((item) => {
                            return (
                                <>
                                    <a>
                                        <span className="sr-only">{item.name}</span>
                                        <FontAwesomeIcon className="text-white" icon={item.icon} />
                                    </a>
                                </>
                            )
                        })}
                    </div>
                    <p className="mt-8 text-base text-center text-gray-500 select-auto">
                        &copy; 2022 Horizon Hosting Limited. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    )
}