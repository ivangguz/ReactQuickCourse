import { type ReactNode } from "react";

interface HeaderProps{
    image: {
        src: string;
        alt: string
    };
    children: ReactNode;
}

export default function Header({image, children}: HeaderProps){
    return (
        <header>
            {/* Cualquiera de las dos es valida */}
            {/* <img src={image.src} alt={image.alt}/> */}
            <img {...image}/>
            {children}
        </header>
    );
}