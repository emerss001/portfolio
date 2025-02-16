interface ContactsProps {
    icon: string;
    title: string;
    link: string;
}

const LinkContacts = ({ icon, title, link }: ContactsProps) => {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            {/* w-96 h-16 */}
            <div className="max-w-96 justify-between items-center flex w-full h-16 bg-[#292C34] p-5 rounded-xl hover:bg-[#33363f] cursor-pointer transition-all">
                <div className="flex items-center gap-3">
                    <img src={`/contacts/${icon}`} />
                    <p className="font-MavenPro font-medium text-lg text-[#C0C4CE]">{title}</p>
                </div>
                <img src="/contacts/ArrowUpRight.svg" />
            </div>
        </a>
    );
};

export default LinkContacts;
