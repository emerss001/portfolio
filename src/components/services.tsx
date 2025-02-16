import CardService from "./ui/card-service";
import TitleSection from "./ui/title-section";

const Services = () => {
    return (
        <div className="w-full bg-[#0D0E11] flex flex-col mt-10 py-12">
            <TitleSection title={"Meus serviços"} subtitle={"Como posso ajudar o seu negócio"} />
            <div className="mx-12 flex gap-3 items-center overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden">
                <CardService
                    title={"Websites e aplicativos"}
                    description={"Desenvolvimento de interfaces"}
                    imageUrl={"pc.svg"}
                />

                <CardService
                    title={"API e banco de dados"}
                    description={"Criação de serviços do sistema"}
                    imageUrl={"bd.svg"}
                />

                <CardService
                    title={"Análise e modelagem"}
                    description={"Planejar a estruturação do sistema"}
                    imageUrl={"infra.svg"}
                />
            </div>
        </div>
    );
};

export default Services;
