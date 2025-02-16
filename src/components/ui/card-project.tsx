interface CardProjectProps {
    title: string;
    description: string;
    imageSrc: string;
    urlDestination: string;
}

const CardProject = ({ title, description, imageSrc, urlDestination }: CardProjectProps) => {
    return (
        <a href={urlDestination} target="_blank" rel="noreferrer">
            <div className="p-3 bg-[#292C34] gap-5 flex flex-col rounded-xl w-80 hover:bg-[#33363f] cursor-pointer transition-all">
                <div className="rounded-lg">
                    <img src={`/projects/${imageSrc}`} className="rounded-lg h-40 object-cover w-full object-top" />
                </div>
                <div>
                    <p className="font-Asap text-lg font-bold text-gray-300">{title}</p>
                    <p className="font-MavenPro font-normal text-sm text-[#C0C4CE]">{description}</p>
                </div>
            </div>
        </a>
    );
};

export default CardProject;
