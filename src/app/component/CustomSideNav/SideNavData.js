import { ReactComponent as HomeLogo } from '../../assets/icons/home.svg'
import { ReactComponent as OrdersLogo } from '../../assets/icons/orders.svg'
import { ReactComponent as WalletLogo } from '../../assets/icons/wallet.svg'
import { ReactComponent as SettingsLogo } from '../../assets/icons/settings.svg'
import { ReactComponent as SupportLogo } from '../../assets/icons/support.svg'

export const SideNavData = [
    {
        title: 'Home',
        path: '/',
        icon: HomeLogo,
        className: 'navText'
    },
    {
        title: 'Orders',
        path: '/orders',
        icon: OrdersLogo,
        className: 'navText'
    },
    {
        title: 'Wallet',
        path: '/wallet',
        icon: WalletLogo,
        className: 'navText'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: SettingsLogo,
        className: 'navText'
    },
    {
        title: 'Support',
        path: '/support',
        icon: SupportLogo,
        className: 'navText'
    },
]