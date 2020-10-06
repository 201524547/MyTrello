import React from "react"
import { useSelector } from "react-redux"
import { mySelector } from "./app.reducer"

const UserResult = () => {

    const user = useSelector(mySelector);

    return (
        user ?
        <div className="user-result">
            <img alt="profile" src={`//opgg-static.akamaized.net/images/profile_icons/profileIcon${user.profileIconId}.jpg?image=q_auto&v=1518361200`} />
            <span>{user.name}</span>
            <span>{user.summonerLevel}</span>
        </div> : null
    )
}

export default UserResult