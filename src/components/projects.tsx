import CardProject from "./ui/card-project";
import TitleSection from "./ui/title-section";

const Projects = () => {
    return (
        <div className="relative items-center flex flex-col justify-center">
            <TitleSection title={"Meu Trabalho"} subtitle={"Veja os projetos em destaque"} />

            <div className="grid grid-cols-1 gap-4 big:grid-cols-2 lg:grid-cols-3">
                <CardProject
                    title={"My Money"}
                    description={"Aplicativo móvel para gerenciamento de finanças."}
                    imageSrc={"MyMoney.webp"}
                    projectDaddle={{
                        gitHubUrl: "https://github.com/emerss001/my-money",
                        siteUrl: "",
                        ok: false,
                    }}
                />

                <CardProject
                    title={"Barber Top"}
                    description={"Plataforma de agendamento de serviços de barbearia."}
                    imageSrc={"BarberTop.webp"}
                    projectDaddle={{
                        gitHubUrl: "https://github.com/emerss001/barber-top",
                        siteUrl: "https://barber-top-eight.vercel.app/",
                        ok: true,
                    }}
                />

                <CardProject
                    title={"FSW Foods"}
                    description={"Aplicativo de delivery de comida inspirado no iFood."}
                    imageSrc={"FSWFoods.webp"}
                    projectDaddle={{
                        gitHubUrl: "https://github.com/emerss001/fws-foods",
                        siteUrl: "https://fws-foods.vercel.app/",
                        ok: true,
                    }}
                />

                <CardProject
                    title={"In.Orbit"}
                    description={"Plataforma desktop para registro de metas com progresso semanal."}
                    imageSrc={"inOrbit.webp"}
                    projectDaddle={{
                        gitHubUrl: "https://github.com/emerss001/In.Orbit",
                        siteUrl: "https://in-orbit-iota.vercel.app/",
                        ok: true,
                    }}
                />

                <CardProject
                    title={"Expenses AI"}
                    description={
                        "Aplicativo para controle financeiro com plano de assinatura e inteligência artificial."
                    }
                    imageSrc={"ExpensesAi.webp"}
                    projectDaddle={{
                        gitHubUrl: "https://github.com/emerss001/expenses-aI",
                        siteUrl: "",
                        ok: false,
                    }}
                />

                <CardProject
                    title={"Plann.er"}
                    description={"App para montar planos de viagem com amigos, registrar atividades e links úteis."}
                    imageSrc={"Planner.webp"}
                    projectDaddle={{
                        gitHubUrl: "https://github.com/emerss001/Plann.er",
                        siteUrl: "",
                        ok: false,
                    }}
                />

                <CardProject
                    title={"LobãoCare"}
                    description={"Website para um petshop com sistema de agendamento e loja virtual."}
                    imageSrc={"Lobao.webp"}
                    projectDaddle={{
                        gitHubUrl: "https://github.com/emerss001/LobaoCare",
                        siteUrl: "",
                        ok: false,
                    }}
                />

                <CardProject
                    title={"Acervo Inclusivo"}
                    description={
                        "Plataforma de catalogação de materiais com acessibilidade para pessoas com deficiência."
                    }
                    imageSrc={"acervo.webp"}
                    projectDaddle={{
                        gitHubUrl: "https://github.com/emerss001/api-bibliotech",
                        siteUrl: "https://bibliotech-indol.vercel.app/",
                        ok: true,
                    }}
                />
            </div>
        </div>
    );
};

export default Projects;
