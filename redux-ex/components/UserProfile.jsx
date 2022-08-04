import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers/index';

function UserProfile(props) {
    const dispatch = useDispatch();

    const onLogOut = useCallback(() => {
        dispatch(logoutAction());
    }, []);
    return (
        <div>
            프로필
            <div>
                <button onClick={onLogOut}>로그아웃</button>
            </div>
        </div>
    );
}

export default UserProfile;