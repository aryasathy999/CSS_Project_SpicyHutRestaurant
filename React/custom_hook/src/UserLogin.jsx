import {useState} from 'react';

function UserLogin(){
    const [isLoggedIn,setIsLoggedIn]=useState(false);

    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

    return {isLoggedIn, login, logout};
}

export default UserLogin;