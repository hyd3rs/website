import { ProjectCard } from "../Card";
export default function Projects() {
    return (
        <div>
            <div className="PageBannerPhoto" style={{ zIndex: "0" }}>
                <video src="/assets/mp4/watercolour.mp4" autoPlay={true} muted={true} loop={true} style={{ zIndex: "-1", position: "absolute" }} className="hidden sm:block" />
                <h1 className="PageBanner" style={{ zIndex: "1" }}>Projects</h1>
            </div>
            <div className="flex gap-y-6 flex-col py-12 h-screen items-center bg-gray-900 text-center">
                <h2 className="Tagline">A collection of my most active or my best projects. Some are relatively small, whilst others are reasonably large.</h2>
                <div className="py-6 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <ProjectCard>
                        <ProjectCard.Title>Hydrabank</ProjectCard.Title>

                        <ProjectCard.Description>
                            We can handle your web application development and systems infrastructure management. That way, you can focus on what you do best - running your own business.
                        </ProjectCard.Description>

                        <ProjectCard.Link>https://hydrabank.systems</ProjectCard.Link>

                        <ProjectCard.Image>/assets/img/projects/hydrabank.png</ProjectCard.Image>

                        <ProjectCard.ImageDescription>Hydrabank wave</ProjectCard.ImageDescription>
                        
                        <ProjectCard.ButtonText>Website</ProjectCard.ButtonText>
                    </ProjectCard>

                    <ProjectCard>
                        <ProjectCard.Title>Songfish</ProjectCard.Title>

                        <ProjectCard.Description>
                            An invite-only Discord music bot.
                        </ProjectCard.Description>

                        <ProjectCard.Link>https://github.com/hydrabank/songfish</ProjectCard.Link>

                        <ProjectCard.Image>/assets/img/projects/songfish.jpg</ProjectCard.Image>

                        <ProjectCard.ImageDescription>Songfish</ProjectCard.ImageDescription>
                        
                        <ProjectCard.ButtonText>Repository</ProjectCard.ButtonText>
                    </ProjectCard>

                    <ProjectCard>
                        <ProjectCard.Title>Exchange Rate Wrapper (Node.js)</ProjectCard.Title>

                        <ProjectCard.Description>
                            An exchange rate API using data from Forex, via <a className="text-blue-300" rel="noreferrer noopener" target="_blank" href="https://exchangerate.host">exchangerate.host</a>.
                        </ProjectCard.Description>

                        <ProjectCard.Link>https://github.com/Dannnington/node-exchangerate</ProjectCard.Link>

                        <ProjectCard.Image>/assets/img/icon2.gif</ProjectCard.Image>

                        <ProjectCard.ImageDescription>?</ProjectCard.ImageDescription>
                        
                        <ProjectCard.ButtonText>Repository</ProjectCard.ButtonText>
                    </ProjectCard>

                    <ProjectCard>
                        <ProjectCard.Title>Reactbreeze</ProjectCard.Title>

                        <ProjectCard.Description>
                            React is a breeze. Why not add more power to it with Tailwind?
                        </ProjectCard.Description>

                        <ProjectCard.Link>https://github.com/hydrabank/cra-template-reactbreeze</ProjectCard.Link>

                        <ProjectCard.Image>/assets/img/projects/reactbreeze.jpg</ProjectCard.Image>

                        <ProjectCard.ImageDescription>A breeze in the wind.</ProjectCard.ImageDescription>
                        
                        <ProjectCard.ButtonText>Repository</ProjectCard.ButtonText>
                    </ProjectCard>
                </div>
            </div>
        </div>
    );
};