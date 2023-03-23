import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
    return (
        <ChatEngine 
            height="100vh"
            projectID="6ec3ee79-7c6a-435d-8d74-e17dfc343278"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;