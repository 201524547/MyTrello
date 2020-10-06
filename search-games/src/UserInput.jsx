import React from 'react'
import { useDispatch } from 'react-redux';
import { fetchUserStart } from './app.action';

const UserInput = () =>{
    const dispatch = useDispatch();
    
    function searchUser(e){
        dispatch(fetchUserStart(e.target.value));
    }
    
    return (
        <input className="user-input" placeholder="소환사명..." onChange={searchUser}/>
    )
}

export default UserInput;