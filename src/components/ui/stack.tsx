interface StackProps {
    name: string;
    icon: string;
}

const Stack = ({ name, icon }: StackProps) => {
    return (
        <div className="h-8 bg-gray-600 gap-2 px-4 py-2.5 rounded-4xl flex justify-between items-center">
            <img src={`/icons/stacks/${icon}`} width={16} height={16} />
            <p className="font-MavenPro text-xs text-gray-300 big:text-base">{name}</p>
        </div>
    );
};

export default Stack;
