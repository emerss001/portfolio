import { CardEducation } from "./ui/card-education";
import TitleSection from "./ui/title-section";

export function Education() {
    return (
        <div className="flex h-full flex-col mb-10 px-6 md:px-20 items-center">
            <TitleSection title="Formações" subtitle="Minha trajetória acadêmica e conhecimentos adquiridos" />

            <div className="flex flex-col gap-6 w-full max-w-7xl">
                <CardEducation
                    date="Em andamento"
                    institution="Instituto Federal Baiano - Campus Guanambi"
                    course="Análise e Desenvolvimento de Sistemas"
                    level="Ensino Superior - Tecnólogo"
                    description="Formação focada no projeto, implementação e manutenção de sistemas de software, abrangendo desde o levantamento de requisitos e metodologias ágeis até a criação de arquiteturas escaláveis, desenvolvimento full stack e banco de dados."
                    logoUrl="/imgs/if-logo.jpg"
                />

                <CardEducation
                    date="Concluído - 2020 - 2023"
                    institution="Instituto Federal Baiano - Campus Guanambi"
                    course="Técnico em Informática para Internet"
                    level="Ensino Técnico"
                    description="Curso com foco no desenvolvimento de aplicações web, englobando fundamentos de programação, estruturação e estilização de interfaces, lógica computacional e manutenção de sistemas para a internet."
                    logoUrl="/imgs/if-logo.jpg"
                />
            </div>
        </div>
    );
}
