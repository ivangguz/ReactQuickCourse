import { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react"

type ContainerProps<T extends ElementType > = {
    as?: T;
    children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({
    as,
    children,
    ...props
}:ContainerProps<C>){
    const Component = as || 'div'; //We just remap the name 
    return <Component className="container" {...props}>{children}</Component>
}