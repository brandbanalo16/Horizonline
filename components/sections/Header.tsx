'use client';

import { usePathname } from 'next/navigation';
import HeaderStyle2 from '../HeaderStyle2';

const Header = () => {
    const pathname = usePathname();
    const isHomePage = pathname === '/' || pathname.startsWith('/home');
    
    return <HeaderStyle2 isInnerPage={!isHomePage} />;
}

export default Header;