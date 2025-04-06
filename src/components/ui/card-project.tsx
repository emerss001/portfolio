import ButtonAction from "./button-action";

interface CardProjectProps {
    title: string;
    description: string;
    imageSrc: string;
    projectDaddle: {
        gitHubUrl: string;
        siteUrl: string;
        ok: boolean;
    };
}

const CardProject = ({ title, description, imageSrc, projectDaddle }: CardProjectProps) => {
    return (
        <div>
            <div className="p-3 bg-[#292C34] gap-5 flex flex-col rounded-xl w-80">
                <div className="rounded-lg">
                    <img src={`/projects/${imageSrc}`} className="rounded-lg h-40 object-cover w-full object-top" />
                </div>
                <div>
                    <p className="font-Asap text-lg font-bold text-gray-300">{title}</p>
                    <p className="font-MavenPro font-normal text-sm text-[#C0C4CE]">{description}</p>
                </div>

                <div className="flex items-center justify-center gap-2 cursor-pointer">
                    {projectDaddle.ok && (
                        <ButtonAction
                            title="Acessar site"
                            pathIcon="/icons/globe.svg"
                            urlDestination={projectDaddle.siteUrl}
                        />
                    )}
                    <ButtonAction
                        title="Ver no GitHub"
                        pathIcon="/icons/githubIcon.svg"
                        urlDestination={projectDaddle.gitHubUrl}
                    />
                </div>
            </div>
        </div>
    );
};

export default CardProject;
