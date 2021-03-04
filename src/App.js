import './App.css';

import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';


const App = () => {
  return (
    <ChatEngine 
        height = "100vh"
        projectID = {process.env.REACT_APP_PJ_ID_KEY}
        userName = "reactmastery"
        userSecret = {process.env.REACT_APP_USER_SECRET}

        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }

    />
  )
}

export default App;
