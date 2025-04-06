interface ButtonActionProps {
    urlDestination: string;
    title: string;
    pathIcon: string;
}

const ButtonAction = ({ urlDestination, title, pathIcon }: ButtonActionProps) => {
    return (
        <a href={urlDestination} className="block w-full" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-center gap-2 bg-[#33363f] p-2 w-full rounded-lg hover:bg-[#3d404a] transition-all">
                <img src={pathIcon} width={20} />
                <p className="font-MavenPro font-normal text-sm text-[#C0C4CE]">{title}</p>
            </div>
        </a>
    );
};

export default ButtonAction;
