interface CardExperienceProps {
    date: string;
    office: string;
    locale: string;
    position: string;
    system: string;
    description: string;
    images: string[];
    stacks: string[];
}

export function CardExperience({
    date,
    office,
    locale,
    position,
    system,
    description,
    images,
    stacks,
}: CardExperienceProps) {
    return (
        <div className="flex flex-col gap-2 rounded-lg bg-zinc-800 p-4 md:flex-row md:gap-10 md:p-10 shadow-lg border border-zinc-700/50">
            <div className="flex flex-col gap-1 md:w-1/4 flex-shrink-0">
                <span className="text-xs font-medium uppercase tracking-wider text-zinc-400">{date}</span>
                <span className="text-sm font-medium tracking-wider text-zinc-400">{locale}</span>
                <h3 className="text-xl font-bold text-zinc-50">{office}</h3>
                <h4 className="text-lg font-bold text-zinc-50">{system}</h4>
                <span className="text-sm font-medium text-zinc-400">{position}</span>
            </div>

            <div className="flex flex-col gap-6 md:w-3/4 overflow-hidden">
                <p className="text-zinc-300 leading-relaxed text-sm md:text-base">{description}</p>

                {images && images.length > 0 && (
                    <div className="group relative w-full">
                        <div className="flex w-full gap-4 overflow-x-auto pb-4 scrollbar-hide cursor-grab active:cursor-grabbing">
                            {images.map((imgSrc, index) => (
                                <img
                                    key={index}
                                    src={imgSrc}
                                    alt={`Evidência do projeto ${index + 1}`}
                                    className="h-48 w-[320px] flex-shrink-0 rounded-lg object-cover transition-transform duration-300 hover:scale-[1.01] border border-zinc-700 md:h-64 md:w-[450px]"
                                />
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex flex-wrap gap-2">
                    {stacks.map((stack, index) => (
                        <span
                            key={index}
                            className="rounded-full bg-zinc-700/50 border border-zinc-600 px-3 py-1 text-xs font-medium text-zinc-100 hover:bg-zinc-600 transition-colors"
                        >
                            {stack.trim()}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
