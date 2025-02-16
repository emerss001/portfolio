import Stack from "./ui/stack";

const Intro = () => {
    return (
        <div className="h-screen mt-8 relative flex justify-center elative bg-cover bg-center bg-fixed xl:bg-[url(Background_Intro.png)]">
            {/* <div className="h-screen relative bg-cover bg-center bg-fixed  items-center justify-center flex flex-col"> */}
            <div className="absolute z-10 flex flex-col items-center justify-center">
                <img src="Avatar.png" className="h-20 w-20" />
                <div className="text-center mt-8 w-[90%]">
                    <p className="text-sm text-gray-400 font-Inconsolata font-normal mb-2">
                        Hello World! Meu nome é <span className="text-red-400">Emerson Neves</span> e sou
                    </p>
                    <h1 className="text-4xl font-Asap font-bold text-gray-300 mb-5">Desenvolvedor Fullstack</h1>
                    <p className="font-MavenPro font-normal text-gray-400 mt-4 text-[10px]">
                        Transformo ideias em aplicações funcionais, intuitivas e eficientes. Combino tecnologia e
                        criatividade para construir soluções inovadoras que resolvem desafios complexos e impulsionam
                        resultados.
                    </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 w-[80%] my-8">
                    <Stack name={"React"} icon={"React.svg"} />
                    <Stack name={"Node.js"} icon={"Nodejs.svg"} />
                    <Stack name={"Java"} icon={"Java.svg"} />
                    <Stack name={"Next.js"} icon={"Nextjs.svg"} />
                    <Stack name={"Docker"} icon={"Docker.svg"} />
                    {/* <Stack name={"Nest.js"} icon={"Nestjs.svg"} /> */}
                </div>

                <img src="/icons/CaretDoubleDown.svg" width={24} />
            </div>
        </div>
        // </div>
    );
};

export default Intro;
