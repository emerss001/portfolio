interface CardServiceProps {
    title: string;
    description: string;
    imageUrl: string;
}

const CardService = ({ title, description, imageUrl }: CardServiceProps) => {
    return (
        <div className="border border-[#33363f] px-5 py-8 rounded-xl flex flex-col items-center gap-5 w-96">
            <img src={`/services/${imageUrl}`} width={28} />
            <div className="text-center">
                <p className="font-Asap text-base font-bold text-[#E2E4E9]">{title}</p>
                <p className="font-MavenPro text-sm font-normal text-[#C0C4CE]">{description}</p>
            </div>
        </div>
    );
};

export default CardService;
