import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';


const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
          <ChatEngine
            height = "100vh"
            projectID = "d82ed3dd-ae92-4ca6-8f0a-cd21e251b538"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
            />
    );
}

export default App;