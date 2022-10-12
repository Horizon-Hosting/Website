import getConfig from 'next/config'

const {publicRuntimeConfig} = getConfig()

export default function Features() {
    const features = publicRuntimeConfig.features
    const featuresTop = features.top
    const featuresBottom = features.bottom
    return (
        <>
            <div className="pb-16">
                <section className="max-w-8xl mx-auto container pt-16">
                    <div>
                        <div role="contentinfo" className="flex items-center flex-col px-4">
                            <h1 tabIndex="0"
                                className="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-white lg:w-5/12 md:w-9/12 pt-4">
                                Our Features
                            </h1>
                        </div>
                        <div tabIndex="0" aria-label="group of cards"
                             className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4">
                            {featuresTop.map((feature, index) => {
                                return (
                                    <div key={feature.name} tabIndex="0" aria-label={`card ${index}`}
                                         className="focus:outline-none flex sm:w-full md:w-5/12 pb-15">
                                        <div className="w-16 h-16 relative mr-5">
                                            <div
                                                className="absolute text-white bottom-0 left-0 bg-accent rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                                <div className="feature-icon">
                                                    <img
                                                        src={feature.icon}
                                                        alt="headset"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-10/12">
                                            <h2 tabIndex="0"
                                                className="focus:outline-none text-lg font-bold leading-tight text-white">
                                                {feature.title}
                                            </h2>
                                            <p tabIndex="0"
                                               className="focus:outline-none text-base text-gray-300 leading-normal pt-2">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}

                            {featuresBottom.map((feature) => {
                                return (
                                    <div key={feature.name} tabIndex="0" aria-label="card 1"
                                         className="focus:outline-none flex sm:w-full md:w-5/12 pb-15">
                                        <div className="w-16 h-16 relative mr-5">
                                            <div
                                                className="absolute text-white bottom-0 left-0 bg-accent rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                                <div className="feature-icon">
                                                    <img
                                                        src={feature.icon}
                                                        alt="headset"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-10/12">
                                            <h2 tabIndex="0"
                                                className="focus:outline-none text-lg font-bold leading-tight text-white">
                                                {feature.title}
                                            </h2>
                                            <p tabIndex="0"
                                               className="focus:outline-none text-base text-gray-300 leading-normal pt-2">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}