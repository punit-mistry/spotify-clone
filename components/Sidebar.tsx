interface SidebarProps {
    Children :React.ReactNode
}

const Sidebar:ReactFC<SidebarProps> =({Children})=>{
    return(
        <div>
            {Children}
        </div>
    )
}

export default Sidebar