import './App.css';

import { ChatEngine } from 'react-chat-engine';


const App = () => {
  return (
    <ChatEngine 
        height = "100vh"
        projectID = {process.env.PJ_ID_KEY}
        userName = "reactmastery"
        userSecret = {process.env.USER_SECRET}

    />
  )
}

export default App;
