interface CardEducationProps {
    date: string;
    institution: string;
    course: string;
    level: string;
    description?: string;
    logoUrl?: string;
}

export function CardEducation({ date, institution, course, level, description, logoUrl }: CardEducationProps) {
    return (
        <div className="max-w-7xl w-full flex flex-col gap-2 rounded-lg bg-zinc-800 p-4 md:flex-row md:gap-10 shadow-lg border border-zinc-700/50">
            <div className="flex flex-row gap-6 md:w-1/3 flex-shrink-0 items-center">
                {logoUrl && (
                    <img
                        src={logoUrl}
                        alt={`Logo ${institution}`}
                        loading="lazy"
                        className="h-22 w-22 rounded-md object-contain bg-white flex-shrink-0"
                    />
                )}
                <div className="flex flex-col gap-1">
                    <span className="text-xs font-medium uppercase tracking-wider text-zinc-400">{date}</span>
                    <span className="text-sm font-medium tracking-wider text-zinc-400">{institution}</span>
                    <h3 className="text-xl font-bold text-zinc-50">{course}</h3>
                    <span className="text-sm font-medium text-zinc-400">{level}</span>
                </div>
            </div>

            {description && (
                <div className="flex flex-col gap-6 md:w-2/3 overflow-hidden justify-center">
                    <p className="text-zinc-300 leading-relaxed text-sm md:text-base">{description}</p>
                </div>
            )}
        </div>
    );
}
