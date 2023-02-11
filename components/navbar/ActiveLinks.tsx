
import Link from "next/link"
import { useRouter } from "next/router"
import { CSSProperties, FC } from "react";

interface Props {
  text : string;
  href : string;
}

export const ActiveLinks: FC <Props>= ({text, href}) => {
    const style: CSSProperties ={
        color: 'red',
        fontWeight: 'bold',
        textDecoration: 'underline'
    }
    const router = useRouter();
    
  return (
    <Link style={ router.asPath===href? style:{}} href={href}>
        {text}
    </Link>
    
  )
}
