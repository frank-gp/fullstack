import user from "../assets/user-solid.svg"
import userSlash from "../assets/users-slash-solid.svg"

import "../styles/UserPortrait.css"

function UserPortrait({status}){
    return (
        <div>
            {status ? (
                <img className="icon" src={user} alt="user" />
            ) : (
                <img className="icon" src={userSlash} alt="user" />
            )}
        </div>
    )
}

export default UserPortrait;
