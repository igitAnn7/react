import { useRef,useEffect } from 'react'
import { ChatMessage } from './Chatmessage';
import './chatmessages.css';

 function ChatMessages({chatMessages}){
  const chatmsgRef=useRef(null);
  useEffect(() => {
   const containerElem= chatmsgRef.current;
   if(containerElem){
    containerElem.scrollTop=containerElem.scrollHeight;;
   }
  },[chatMessages]);
  return(
    <div className="chat-msg-container" ref={chatmsgRef}>
    { chatMessages.map((chatMessage) => {
      return(
        <ChatMessage
        message={chatMessage.message}
        sender={chatMessage.sender}            
        key= {chatMessage.id}

        // a key component must be given if we make an array to help react keep track of changes in array

        // we dont have to type out each component of input manually if we make a seperate html component which maps every component of the array we put manually

        />
    );
  })}
   </div>
 );
}
export default ChatMessages;