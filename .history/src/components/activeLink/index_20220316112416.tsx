import Link, { LinkProps } from "next/link";
import { ReactElement } from "react";


interface ActiveLinkProps extends LinkProps {
  children: ReactElement; //Para receber um elemeto react dentro do Link
  activeClassName: string;
}

export function ActiveLink() {
  return (
    <Link>
    
    </Link>
  )
}