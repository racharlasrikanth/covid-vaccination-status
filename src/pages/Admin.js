import React from 'react'
import { useState } from 'react/cjs/react.development';
import Login from '../components/login/Login';
import UserDataList from '../components/UserDataList/UserDataList';

const Admin = () => {

    const [userLoggedStatus, setUserLoggedStatus] = useState(false);
    // const [userLoggedStatus, setUserLoggedStatus] = useState(true);

    return (
        <section className='admin-container'>
            {
                userLoggedStatus ?
                <UserDataList setUserLoggedStatus={setUserLoggedStatus} />
                :
                <Login setUserLoggedStatus={setUserLoggedStatus} />
            }
        </section>
    )
}

export default Admin;
