
import robotProfile from '../assets/robot.png';
import userProfile from '../assets/userimg.png';
import './chatmessage.css';

export function ChatMessage(props){  //props is for properties of the object and make components reusable  
 /*const message = props.message;
 const sender = props.sender;*/ 
 const {message,sender} = props; 

/*
 if(sender == 'robot'){
return(
   <div>
       <img src = "robot.png" width = "50" />
        {message}
      </div>
);
 }*/
  return(
    <div className={sender==='user'?'chat-user':'chat-robot'}>
        {sender == 'robot' && (<img  src = {robotProfile} width = "50" />)}<div className="chat-msg">
        {message}
        </div>
        {sender == 'user' && (<img src = {userProfile} width = "50"/>)}
      
    </div>
  );
}