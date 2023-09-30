import commentsData from "../comments/commentsData.js"
import Comment from "../comments/Comment.js"
import React from "react"
export default function CreateNewPost(){
    const comment = commentsData.map(data => {
        return(
            <Comment user={data.user} data={data.data}/>
        )
    });
    const [user, setUser] = React.useState({username:"", pass: ""});
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user)
    }
    return(
        <div>
            <div>
                {comment}
            </div>
            <div>
                <input className="form-element-input" onChange={handleChange} type="text" id="username" name="username" value={user.username} placeholder='Let others hear your view'/><br/>
            </div>
        </div>
    )
}