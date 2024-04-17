import { ReactComponent as BellIcon } from '../../assets/icons/bell.svg';
import { ReactComponent as DPIcon  } from '../../assets/icons/profile-pic.svg';
import { ReactComponent as ArrowDownIcon  } from '../../assets/icons/arrow-down.svg';

export const MainHeader = ({children}) => {
    return (
        <>
        <div>
            <h2>{children}</h2>
            <div>
                <BellIcon />
                <DPIcon />
                <span></span>
                <ArrowDownIcon />
            </div>
        </div>
        </>
    )
}