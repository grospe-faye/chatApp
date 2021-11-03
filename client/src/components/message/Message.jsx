import './message.css'
import {format} from 'timeago.js'

export default function Message({message, own}){
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img className="messageImg" src="https://media.istockphoto.com/vectors/portrait-of-a-beautiful-asian-student-girl-in-eyeglasses-vector-flat-vector-id1188458557?k=20&m=1188458557&s=612x612&w=0&h=1oYyr2es8eUIXFf9nFmuFIWxQ51x1MF-fSv7pnyWNVY=" alt="" />
                <p className="messageText">
                    {message.text}
                </p>
            </div>
            <div className="messageBottom">{format(message.createdAt)}</div>
        </div>
    )
}