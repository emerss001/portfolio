interface TitleSectionProps {
    title: string;
    subtitle: string;
    description?: string;
}

const TitleSection = ({ subtitle, title, description }: TitleSectionProps) => {
    return (
        <div className="text-center gap-2 mb-10">
            <p className="font-Inconsolata font-normal text-xl text-red-400">{title}</p>
            <h2 className="font-Asap text-xl text-gray-200 font-semibold 2xl:text-2xl">{subtitle}</h2>
            {description && <p className="font-MavenPro text-[#C0C4CE] text-sm">{description}</p>}
        </div>
    );
};

export default TitleSection;
