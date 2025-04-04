import Stack from "./ui/stack";

const Intro = () => {
    return (
        <div className="mb-8 mt-8 relative flex justify-center elative bg-cover bg-center bg-fixed bg-[url(/Background_Intro.png)] big:h-screen">
            {/* <div className="h-screen relative bg-cover bg-center bg-fixed  items-center justify-center flex flex-col"> */}
            <div className="z-10 flex flex-col items-center justify-center">
                <img src="Avatar.png" className="h-20 w-20 2xl:w-24 2xl:h-24" />
                <div className="text-center mt-8 w-[90%] sm:w-[80%] lg:w-[60%] xl:w-[48%]">
                    <p className="text-base text-gray-400 font-Inconsolata font-normal mb-2 sm:text-base">
                        Hello World! Meu nome é <span className="text-red-400">Emerson Neves</span> e sou
                    </p>
                    <h1 className="text-4xl font-Asap font-bold text-gray-300 mb-5">Desenvolvedor Fullstack</h1>
                    <p className="font-MavenPro font-normal text-gray-400 mt-4 text-[10px] sm:text-sm">
                        Transformo ideias em aplicações funcionais, intuitivas e eficientes. Combino tecnologia e
                        criatividade para construir soluções inovadoras que resolvem desafios complexos e impulsionam
                        resultados.
                    </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 w-[80%] mt-8 mb-10">
                    <Stack name={"React"} icon={"React.svg"} />
                    <Stack name={"Node.js"} icon={"Nodejs.svg"} />
                    <Stack name={"Java"} icon={"Java.svg"} />
                    <Stack name={"Next.js"} icon={"Nextjs.svg"} />
                    <Stack name={"Docker"} icon={"Docker.svg"} />
                    <Stack name={"Nest.js"} icon={"Nestjs.svg"} />
                    <Stack name={"Tailwindcss"} icon={"Tailwind.svg"} />
                </div>

                <img
                    src="/icons/CaretDoubleDown.svg"
                    width={30}
                    className="animate-bounce big:mt-10 cursor-pointer"
                    onClick={() => {
                        if (window.innerWidth >= 835) {
                            window.scrollTo({
                                top: window.innerHeight,
                                behavior: "smooth",
                            });
                        }
                    }}
                />
            </div>
        </div>
        // </div>
    );
};

export default Intro;
