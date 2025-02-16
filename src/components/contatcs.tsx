import LinkContacts from "./ui/link-contacts";
import TitleSection from "./ui/title-section";

const Contacts = () => {
    return (
        <div className="bg-cover bg-center bg-fixed px-10 bg-[url(Background_Contacts.png)] flex flex-col items-center">
            <div className="my-8 z-10 flex flex-col items-center justify-center">
                <TitleSection
                    title={"Contato"}
                    subtitle={"Gostou do meu trabalho?"}
                    description={"Entre em contato ou acompanhe as minhas redes sociais!"}
                />

                <div className="flex w-full flex-col gap-4">
                    <LinkContacts
                        title={"Linkedin"}
                        icon={"LinkedinLogo.svg"}
                        link={"www.linkedin.com/in/emerson-neves-santos-527871183"}
                    />
                    <LinkContacts
                        title={"Instagram"}
                        icon={"InstagramLogo.svg"}
                        link={"instagram.com/emerson.nevess/"}
                    />
                    <LinkContacts title={"Github"} icon={"GithubLogo.svg"} link={"github.com/emerss001/"} />
                    <LinkContacts title={"Email"} icon={"EnvelopeSimple.svg"} link={"emersonnevess80@gmail.com"} />
                </div>
            </div>
        </div>
    );
};

export default Contacts;
