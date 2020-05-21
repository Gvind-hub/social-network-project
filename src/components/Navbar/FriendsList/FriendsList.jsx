import React from 'react';
import s from './FriendsList.module.css';
import {NavLink} from "react-router-dom";

const FriendsList = (props) => {

    return (
        <div className={s.friendsList}>
            <img src="https://images.theconversation.com/files/304864/original/file-20191203-67028-qfiw3k.jpeg?ixlib=rb-1.1.0&rect=638%2C2%2C795%2C745&q=45&auto=format&w=496&fit=clip" alt=""/>
            <p>{props.name}</p>
        </div>
    );
};

export default FriendsList;
