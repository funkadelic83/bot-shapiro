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
            validator: (value) => {
              if (value.length > 15) {
                  return 'Too long!';
              } if (value.includes(" ")) {
                return 'One word names only please, liberal.';
              }
              return true;
          },
            trigger: (value) => {
              if (value.steps.firstName.value.toLowerCase() === 'mike') {
                return '4'
              } else if (
                value.steps.firstName.value.toLowerCase() === 'chad' || 
                value.steps.firstName.value.toLowerCase() === 'josh' || 
                value.steps.firstName.value.toLowerCase() === 'john' || 
                value.steps.firstName.value.toLowerCase() === 'michael' || 
                value.steps.firstName.value.toLowerCase() === 'christopher' || 
                value.steps.firstName.value.toLowerCase() === 'chris' || 
                value.steps.firstName.value.toLowerCase() === 'joshua' || 
                value.steps.firstName.value.toLowerCase() === 'andy' || 
                value.steps.firstName.value.toLowerCase() === 'daniel' || 
                value.steps.firstName.value.toLowerCase() === 'dan' || 
                value.steps.firstName.value.toLowerCase() === 'james' || 
                value.steps.firstName.value.toLowerCase() === 'jim' || 
                value.steps.firstName.value.toLowerCase() === 'nick' || 
                value.steps.firstName.value.toLowerCase() === 'joseph' || 
                value.steps.firstName.value.toLowerCase() === 'joe' || 
                value.steps.firstName.value.toLowerCase() === 'nicholas' || 
                value.steps.firstName.value.toLowerCase() === 'nick' || 
                value.steps.firstName.value.toLowerCase() === 'ryan' || 
                value.steps.firstName.value.toLowerCase() === 'jacob' || 
                value.steps.firstName.value.toLowerCase() === 'brandon' ||
                value.steps.firstName.value.toLowerCase() === 'andy' || 
                value.steps.firstName.value.toLowerCase() === 'justin' || 
                value.steps.firstName.value.toLowerCase() === 'robert' || 
                value.steps.firstName.value.toLowerCase() === 'rob' || 
                value.steps.firstName.value.toLowerCase() === 'bob' ||  
                value.steps.firstName.value.toLowerCase() === 'william' ||
                value.steps.firstName.value.toLowerCase() === 'will' ||
                value.steps.firstName.value.toLowerCase() === 'anthony' ||
                value.steps.firstName.value.toLowerCase() === 'tony' ||
                value.steps.firstName.value.toLowerCase() === 'johnathan' ||
                value.steps.firstName.value.toLowerCase() === 'jonathan' ||
                value.steps.firstName.value.toLowerCase() === 'jon' ||
                value.steps.firstName.value.toLowerCase() === 'tyler' ||
                value.steps.firstName.value.toLowerCase() === 'ben' ||
                value.steps.firstName.value.toLowerCase() === 'benjamin' ||
                value.steps.firstName.value.toLowerCase() === 'justin' ||
                value.steps.firstName.value.toLowerCase() === 'oliver' ||
                value.steps.firstName.value.toLowerCase() === 'noah' ||
                value.steps.firstName.value.toLowerCase() === 'liam' ||
                value.steps.firstName.value.toLowerCase() === 'zach'
                )
                {
                return 'maleName';
              } else if (
                value.steps.firstName.value.toLowerCase() === 'jessica' || 
                value.steps.firstName.value.toLowerCase() === 'jess' || 
                value.steps.firstName.value.toLowerCase() === 'ashley' || 
                value.steps.firstName.value.toLowerCase() === 'amanda' || 
                value.steps.firstName.value.toLowerCase() === 'sarah' || 
                value.steps.firstName.value.toLowerCase() === 'sara' || 
                value.steps.firstName.value.toLowerCase() === 'jennifer' || 
                value.steps.firstName.value.toLowerCase() === 'emily' || 
                value.steps.firstName.value.toLowerCase() === 'samantha' || 
                value.steps.firstName.value.toLowerCase() === 'elizabeth' || 
                value.steps.firstName.value.toLowerCase() === 'liz' || 
                value.steps.firstName.value.toLowerCase() === 'stephanie' || 
                value.steps.firstName.value.toLowerCase() === 'steph' || 
                value.steps.firstName.value.toLowerCase() === 'lauren' || 
                value.steps.firstName.value.toLowerCase() === 'nichole' || 
                value.steps.firstName.value.toLowerCase() === 'brittany' || 
                value.steps.firstName.value.toLowerCase() === 'megan' || 
                value.steps.firstName.value.toLowerCase() === 'meghan' || 
                value.steps.firstName.value.toLowerCase() === 'rachel' || 
                value.steps.firstName.value.toLowerCase() === 'hannah' ||
                value.steps.firstName.value.toLowerCase() === 'hanna' || 
                value.steps.firstName.value.toLowerCase() === 'kayla' || 
                value.steps.firstName.value.toLowerCase() === 'melissa' || 
                value.steps.firstName.value.toLowerCase() === 'amber' || 
                value.steps.firstName.value.toLowerCase() === 'danielle' ||  
                value.steps.firstName.value.toLowerCase() === 'taylor' ||
                value.steps.firstName.value.toLowerCase() === 'eleanor' ||
                value.steps.firstName.value.toLowerCase() === 'susan' ||
                value.steps.firstName.value.toLowerCase() === 'sue' ||
                value.steps.firstName.value.toLowerCase() === 'kim' ||
                value.steps.firstName.value.toLowerCase() === 'kimberly' ||
                value.steps.firstName.value.toLowerCase() === 'kimmy' ||
                value.steps.firstName.value.toLowerCase() === 'molly' ||
                value.steps.firstName.value.toLowerCase() === 'valerie' ||
                value.steps.firstName.value.toLowerCase() === 'vanessa' ||
                value.steps.firstName.value.toLowerCase() === 'beth' ||
                value.steps.firstName.value.toLowerCase() === 'ashley' ||
                value.steps.firstName.value.toLowerCase() === 'allison' ||
                value.steps.firstName.value.toLowerCase() === 'erica' ||
                value.steps.firstName.value.toLowerCase() === 'heather' ||
                value.steps.firstName.value.toLowerCase() === 'stacy'
                ) {
                return 'femaleName';
              } else {
                return 'unknownName'
              }
            },
          },
          {

            id: '4',
            message: `Hello Mike`,
            end: true
          },
          {

            id: 'unknownName',
            message: `What kind of name is {previousValue}? Liberals have more names than they have genders! What is your preferred pronoun?`,
            end: true
          },
          {
            id: 'maleName',
            message: `You must be a dude.`,
            end: true
          },
{
  id: 'femaleName',
  message: `You sound like a feminist.`,
  end: true,
}

        ]}
      />
    </div>
  );
}

export default App;
