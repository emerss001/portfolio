import { CardExperience } from "./ui/card-experience";
import TitleSection from "./ui/title-section";

export function Experiences() {
    return (
        <div className="flex h-full flex-col mb-10 px-6 md:px-20">
            <TitleSection title="Experiências" subtitle="Projetos que me desafiaram e me fizeram crescer" />

            <div className="flex flex-col">
                <CardExperience
                    date="Out 2025 - Nov 2025"
                    locale="Micks Telecom - Guanambi, BA"
                    office="Desenvolvedor Full Stack"
                    position="Estágio"
                    system="Sistema RH"
                    description="Desenvolvimento de uma solução Full Stack para gestão de Recursos Humanos, focada na digitalização de processos internos. Utilizando React e Node.js (Express), foi criada uma plataforma para administração de hierarquias (supervisores e funcionários) e implementei um fluxo de onboarding automatizado, permitindo o auto-cadastro de colaboradores via links seguros, reduzindo a carga operacional do RH."
                    images={[
                        "/experiences/system-rh/image-1.webp",
                        "/experiences/system-rh/image-5.webp",
                        "/experiences/system-rh/image-7.webp",
                        "/experiences/system-rh/image-2.webp",
                        "/experiences/system-rh/image-3.webp",
                        "/experiences/system-rh/image-4.webp",
                        "/experiences/system-rh/image-6.webp",
                    ]}
                    stacks={["React", "Vite", "Express", "MySql", "Docker", "tailwindcss", "TanStack Query"]}
                />
            </div>
        </div>
    );
}
