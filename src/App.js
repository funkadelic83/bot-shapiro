import React from 'react';
import './App.css';
import ChatBot from 'react-simple-chatbot';

function App() {
  return (
    <div>
      <ChatBot
        steps={[
          {
            id: 'hello-world',
            message: 'Hello World! I am Bot Shapiro. My wife is a doctor. Debate me! I will destroy you with FACTS and LOGIC. Please enter your first name.',
            trigger: 'firstName',
          },
          {
            id: 'firstName',
            user: true,
            trigger: (value) => {
              if ({previousValue} === "Mike") {
                return '4'
              } else {
                return '5'
              }
            }
          },
          // {
          //   id: '3',
          //   message: `OK {previousValue}, this is epic.`,
          //   trigger: (va) => {
          //     if (firstName === "Mike") {
          //       return '4'
          //     } else {
          //       return '5'
          //     }
          //   }
          // },
          {

            id: '4',
            message: `Hello Mike`,
            end: true
          },
          {

            id: '5',
            message: `You are not Mike`,
            end: true
          }
        ]}
      />
    </div>
  );
}

export default App;
