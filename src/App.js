import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import chatAppProps from './components/ChatAppProps';



function App() {
  return (
    <div className="App">
      <ChatEngine
      height="100vh" 
      projectID={"40e40ecf-ed8c-4b64-a080-b01de30c3d7a"}
      userName={"Fuad"}
      userSecret={"123456"}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
      onNewMessage = {() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play}
      />
      
    </div>
  );
}

export default App;
