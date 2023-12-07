
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"


const Navbar = () => {
    return (
        <nav className="flexBetween max-container padding-container z-30 py-5">
            <Link href="/">
                <Image src='bivouac-logo.svg' alt="logo" width={154} height={19} />
            </Link>

            <ul className="hidden h-full gap-12 lg:flex">
                
            {/* 
            Le map permet d'afficher les liens de la navbar en faisant référence au fichier index.ts importer au-dessus (@/constants). 
            
            Le paramètre "link" du map va "itérer" à travers le tableau NAV_LINKS (déclarer dans index.ts)

            link.href définit le lien de l'attribut de la balise
            link.key définité la key de l'attribut key
            link.label permet d'afficher le nom du lien
            */}
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                        {link.label}
                    </Link>
                ))}
            </ul>

            {/*BOUTON LOGIN*/}
            <div className="lg:flexCenter hidden">
                <Button
                    type="button"
                    title="Login"
                    icon="/user.svg"
                    variant='btn_dark_green'
                />
            </div>

            {/*MENU BURGER, il apparaît sur les petits écrans et est caché sur les grands*/}
            <Image
                src="menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
            />
        </nav>
    )
}

export default Navbar