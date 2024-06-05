import { NavLink } from "react-router-dom";
import { SideNavData } from "./SideNavData";
import style from "./SideNavigation.module.css"


export const CustomSideNav = () => {
    return (
        <nav className={style.navmenu}>
            <ul className={style.navMenuItems}>
                {
                    SideNavData.map((item, index) => {
                        return (
                            <li key={index} className={item.className}>
                                <NavLink 
                                    to={item.path}
                                    className={({ isActive }) => isActive ? style.active : ''}
                                >
                                    {item.icon}
                                    <span>{item.title}</span>
                                </NavLink>
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
    );
};

