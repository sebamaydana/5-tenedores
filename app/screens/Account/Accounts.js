import React, { useState, useEffect} from 'react';
import * as firebase from 'firebase';
import UserGuest from './UserGuest';
import UserLogged from './UserLogged';
import Loading from '../../components/Loading';

function Accounts() {

    const [login, setLogin] = useState(null);

    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user)=>{
            !user ? setLogin(false) : setLogin(true);
        });
    }, []);

    if(login === null) return <Loading isVisible={true} text="Cargando..."></Loading>

    return login ? <UserLogged></UserLogged> : <UserGuest></UserGuest>;

}

export default Accounts;