import { ReactComponent as BellIcon } from '../../assets/icons/bell.svg';
import { ReactComponent as DPIcon  } from '../../assets/icons/profile-pic.svg';
import { ReactComponent as ArrowDownIcon  } from '../../assets/icons/arrow-down.svg';
import style from './style.module.css';

export const MainHeader = ({children}) => {
    return (
        <>
        <div className={style.wrapper}>
            <h2>{children}</h2>
            <div className={style.flex}>
                <BellIcon />
                <DPIcon />
                <span></span>
                <ArrowDownIcon />
            </div>
        </div>
        </>
    )
}