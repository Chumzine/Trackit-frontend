import { NavLink } from "react-router-dom"
import { SideNavData} from "./SideNavData"
import style from "./SideNavigation.css"

// export const CustomSideNav = ()  => {
//     return (
//         <nav className="nav-menu">
//             <ul className="nav-menu-items">
//                 {
//                     SideNavData.map((item, index) => {
//                         return (
//                             <li key={index} className={`${item.cName} ${item.isActive ? 'active' : ''}`}>
//                                 <NavLink  to={item.path}>
//                                     {item.icon}
//                                     <span>{item.title}</span>
//                                 </NavLink>
//                             </li>
//                         )
//                     })
//                 }
//             </ul>
//         </nav>
        
//     )
// }


export const CustomSideNav = () => {
  return (
    <nav className={style.navmenu}>
      <ul className={style.navMenuItems}>
        {SideNavData.map((item, index) => (
          <li
            key={index}
            className={`${item.className} ${item.isActive ? "active" : ""}`}
          >
            <NavLink to={item.path}>
              {item.icon && <item.icon className="icon" />}{" "}
              <span className={style.navText}>{item.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};