import { NavLink } from "react-router-dom"
import { SideNavData} from "./SideNavData"

export const SideNav = ()  => {
    return (
        <nav className="nav-menu">
            <ul className="nav-menu-items">
                {
                    SideNavData.map((item, index) => {
                        return (
                            <li key={index} className={`${item.cName} ${item.isActive ? 'active' : ''}`}>
                                <NavLink  to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
        
    )
}