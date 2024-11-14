

// // export default Messages;
// import { useState } from 'react';
// import Chat from '../Chat/Chat';
// import './Messeger.css';
// import sasha from './Sasha.svg'


// function Messages() {
//   const [selectedChat, setSelectedChat] = useState(null);
//   const chats = [
//     {  id: 1, name: 'nikita', lastMessage: 'Nikita sent a message...', time: '2 weeks' },
//     { id: 2, name: 'sashaa', lastMessage: 'Sashaa sent a message...', time: '2 weeks' }
//   ];

//   const handleSelectChat = (chat) => {
//     setSelectedChat(chat);
//   };

//   return (
//     <div className="messages">
//       <div className="chat-list">
//         {chats.map((chat) => (
//           <div
//             key={chat.id}
//             className={`chat-item ${selectedChat === chat ? 'selected' : ''}`}
//             onClick={() => handleSelectChat(chat)}
//           >
//             {chat.name === 'sashaa' && <img src={sasha} alt="sashaa" className="user-photo" />}
//             <p>{chat.name}</p>
//             <p>{chat.lastMessage}</p>
//           </div>
//         ))}
//       </div>
//       {selectedChat && <Chat chat={selectedChat} />}
//     </div>
//   );
// }

// export default Messages;
// import  { useState } from 'react';
// import Chat from '../Chat/Chat';
// import './Messeger.css'; // Import styles for Messages component
// import avatar2 from './Avatar2.svg'; // Placeholder image for Sasha
// import avatar1 from './Avatar1.svg'; // Placeholder image for Nikita


// function Messages() {
//   const [selectedChat, setSelectedChat] = useState(null);
//   const chats = [
//     { id: 1, name: 'nikita', lastMessage: 'Nikita sent a message...', time: '2 weeks', avatar: avatar1 },
//     { id: 2, name: 'sashaa', lastMessage: 'Sashaa sent a message...', time: '2 weeks', avatar: avatar2 }
//   ];

//   const handleSelectChat = (chat) => {
//     setSelectedChat(chat);
//   };

//   return (
//     <div className="messages">
//       <div className="chat-list">
//         <h2>itcareerhub</h2>
//         {chats.map((chat) => (
//           <div
//             key={chat.id}
//             className={`chat-item ${selectedChat === chat ? 'selected' : ''}`}
//             onClick={() => handleSelectChat(chat)}
//           >
//             <img src={chat.avatar} alt={`${chat.name} avatar`} className="avatar" />
//             <div className="chat-info">
//               <p className="chat-name">{chat.name}</p>
//               <p className="chat-lastMessage">{chat.lastMessage}</p>
//               <span className="chat-time">{chat.time}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//       {selectedChat && <Chat chat={selectedChat} />}
//     </div>
//   );
// }

// export default Messages;

import { useState } from 'react';
import Chat from '../Chat/Chat';
import './Messeger.css';
import avatar2 from './Avatar2.svg';
import avatar1 from './Avatar1.svg';

function Messages() {
  const [selectedChat, setSelectedChat] = useState(null);
  const chats = [
    { id: 1, name: 'nikita', lastMessage: 'Nikita sent a message...', time: '2 wek', avatar: avatar2 },
    { id: 2, name: 'sashaa', lastMessage: 'Sashaa sent a message...', time: '2 wek', avatar: avatar1 }
  ];

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <div className="messages">
      <div className="chat-list">
        <h2>itcareerhub</h2>
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`chat-item ${selectedChat === chat ? 'selected' : ''}`}
            onClick={() => handleSelectChat(chat)}
          >
            <img src={chat.avatar} alt={`${chat.name} avatar`} className="avatar" />
            <div className="chat_info">
              <p className="chat_name">{chat.name}</p>
             
        
              <p className="chat-lastMessage">{chat.lastMessage}</p>
              <span className="chat-time">{chat.time}</span>
              </div>
          </div>
        ))}
      </div>
      {selectedChat && <Chat chat={selectedChat} />}
      
    </div>

    
  );
}

  
export default Messages;
