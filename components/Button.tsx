import Image from "next/image";

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string; // le "?" déclare un paramètre optionnel
    variant: string
    full?: boolean;
}

// le bouton est un composant réutilisé plusieurs fois avec des styles différents. De cette façon on l'a déclaré avec un paramètre "variant" que l'on pourra changer selon le style souhaité. Chaque style est définit dans le fichier global.css et plus particulièrement le layer Utilities.
const Button = ({type, title, icon, variant, full}: ButtonProps) => {
  return (
    <button
        type={type}
        className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
    >   
        {icon && <Image src={icon} alt={title} width={24} height={24}/>}
        <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button