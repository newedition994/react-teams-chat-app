import './App.css';

import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';


const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine 
        height = "100vh"
        projectID = {process.env.REACT_APP_PJ_ID_KEY}
        userName = {localStorage.getItem('username')}
        userSecret = {localStorage.getItem('password')}

        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}

    />
  )
}

export default App;
