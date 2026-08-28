import { useState } from 'react'
import './App.css';
import { ChatInput } from './components/chatinput.jsx';
import ChatMessages from './components/chatmessages.jsx';

 
function App(){
    const [chatMessages,setChatMessages] = useState([{   
    //updating the data willnow update the html too
    message: 'hello chatbot',
    sender: 'user',
    id: 'id1'
  },{
    message: 'hello how can i help you?',
    sender: 'robot',
    id: 'id2'
  }]);

//const [chatMessages,setChatMessages]=array;//shortcut for the 2 lines
//const chatMessages = array[0];
//const setChatMessages=array[1];
//second array function is made to update the data
// cant update react manually.use this function to update data and react will update html
  return(
<div className="app-container">
 <ChatMessages 
  chatMessages={chatMessages}
 />
  <ChatInput
    chatMessages={chatMessages}
    setChatMessages={setChatMessages}
  />
</div>
  );
}

export default App;
