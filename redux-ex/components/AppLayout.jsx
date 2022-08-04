import Link from 'next/link';
import React from 'react';
import {useSelector} from 'react-redux';

import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

function AppLayout({children}) {
    const { isLoggedIn }  = useSelector((state) => state.user);
    return (
        <div>

       
        <div>
            <Link href="/">메인페이지</Link>
            <Link href="/profile">프로필</Link>
            <Link href="/profile">회원가입</Link>
        </div>
        <div>
            {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </div>
        <div>
            {children}
        </div>
        </div>
    );
}

export default AppLayout;