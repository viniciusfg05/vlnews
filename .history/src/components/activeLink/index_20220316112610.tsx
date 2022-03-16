import Link, { LinkProps } from "next/link";
import { ReactElement } from "react";


interface ActiveLinkProps extends LinkProps { //para passarmos as props do Link para o ActiveLink
  children: ReactElement; //Para receber um elemeto react dentro do Link
  activeClassName: string;
}

export function ActiveLink({children, activeClassName, ...rest}: ActiveLinkProps) {
  return (
    <Link {...rest}>
      {children}
    </Link>
  )
}