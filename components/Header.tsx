'use client '

import { useRouter } from "next/router";
import {twMerge} from 'tailwind-merge'
interface HeaderProps {
    children:React.ReactNode;
    className?:string;
}

const Header:React.FC<HeaderProps> = ({children,className})=>{

    const router = useRouter()

    const handleLogout =()=>{
        // handle logout  
    }

    return(
       <div className={twMerge(`h-fit bg-gradiant-to-b from-emerald-800 p-6`)}>

       </div>
    )
}

export default Header