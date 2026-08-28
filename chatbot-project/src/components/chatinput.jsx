import { useState} from 'react'
import {Chatbot} from 'supersimpledev';
import './chatinput.css';





export function ChatInput({chatMessages,setChatMessages}){
          const [inputText,setInputText]= useState('');

          function saveInputText(event){
              setInputText(event.target.value);
            //gives the element that were typing in(FUNNN)
                      }
            function sendMessage(){
              const newChatMessages = [
                 ...chatMessages,
                  //spread operator(create copy of array): uses the current or initial data and updates html with the new data  with it
                  {
                  message: inputText,
                  sender: 'user',
                  id: crypto.randomUUID() 
                  }];
                
              setChatMessages(newChatMessages);

                  const response=Chatbot.getResponse(inputText);
                   setChatMessages([
                   ...newChatMessages,
                  {
                  message: response,
                  sender: 'robot',
                  id: crypto.randomUUID() 
                  }
                  ]);


                  setInputText('');
                      }

        return(
          <div className="input-container">
            <input placeholder = "Send a message to ChatBot" size = "30"
            onChange={saveInputText}
            value={inputText}
            className="input-in"
            />
            <button
            onClick={sendMessage}
            className="send-button"
            >Send</button>
            </div>
          );
      }