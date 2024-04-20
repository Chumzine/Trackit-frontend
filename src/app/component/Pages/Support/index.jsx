import Logo from '../../../assets/images/logo.png';
import { SideNav } from '../../SideNav/SideNavigation';
import { MainHeader } from '../../MainHeader';
import { ReactComponent as CallUsIcon } from '../../../assets/icons/call-us.svg';
import { ReactComponent as EmailUsIcon } from '../../../assets/icons/email-us.svg';
import { ReactComponent as ChatIcon } from '../../../assets/icons/chat.svg';
import { ReactComponent as SocialMediaIcon } from '../../../assets/icons/social-media.svg';
import style from './style.module.css';

export const Support = () => {
    return (
        <>
        <header>
            <img src={Logo} alt="Trackit logo" />
        </header>
        <main>
            <SideNav />
            <div className={style.container}>
                <div>
                    <MainHeader />
                </div>
                <div className={style['content-container']}>
                    <div className={style.flexone}>
                        <div className={style.call}>
                            <CallUsIcon />
                            <div>
                                <h5>Call Us</h5>
                                <p>+23498765432</p>
                            </div>
                        </div>
                        <div className={style.email}>
                            <EmailUsIcon />
                            <div>
                                <h5>Email Us</h5>
                                <p>support@trackit.com</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.flextwo}>
                        <div className={style.chat}>
                            <ChatIcon />
                            <div>
                                <h5>Chat</h5>
                                <p>9AM-5PM.M-F</p>
                            </div> 
                        </div>
                        <div className={style.socials}>
                            <SocialMediaIcon />
                            <div>
                                <h5>Social Media</h5>
                                <p>@trackit</p>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </main>
        </>
    )
}