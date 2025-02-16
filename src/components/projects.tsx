import CardProject from "./ui/card-project";
import TitleSection from "./ui/title-section";

const Projects = () => {
    return (
        <div className="relative items-center flex flex-col justify-center">
            <TitleSection title={"Meu Trabalho"} subtitle={"Veja os projetos em destaque"} />

            <div className="grid grid-cols-1 gap-4">
                <CardProject
                    title={"Barber Top"}
                    description={"Plataforma de agendamento de serviços de barbearia."}
                    imageSrc={"BarberTop.png"}
                    urlDestination={"https://github.com/emerss001/barber-top"}
                />

                <CardProject
                    title={"FSW Foods"}
                    description={"Aplicativo de delivery de comida inspirado no iFood."}
                    imageSrc={"FSWFoods.png"}
                    urlDestination={"https://github.com/emerss001/fws-foods"}
                />

                <CardProject
                    title={"In.Orbit"}
                    description={"Plataforma desktop para registro de metas com progresso semanal."}
                    imageSrc={"inOrbit.png"}
                    urlDestination={"https://github.com/emerss001/In.Orbit"}
                />

                <CardProject
                    title={"Expenses AI"}
                    description={
                        "Aplicativo para controle financeiro com plano de assinatura e inteligência artificial."
                    }
                    imageSrc={"ExpensesAi.png"}
                    urlDestination={"https://github.com/emerss001/expenses-aI"}
                />

                <CardProject
                    title={"Plann.er"}
                    description={"App para montar planos de viagem com amigos, registrar atividades e links úteis."}
                    imageSrc={"Planner.png"}
                    urlDestination={"https://github.com/emerss001/Plann.er"}
                />

                <CardProject
                    title={"LobãoCare"}
                    description={"Website para um petshop com sistema de agendamento e loja virtual."}
                    imageSrc={"Lobao.png"}
                    urlDestination={"https://github.com/emerss001/LobaoCare"}
                />
            </div>
        </div>
    );
};

export default Projects;
