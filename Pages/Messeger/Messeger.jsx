// import { useState } from 'react';
// import Chat from '../Chat/Chat';
// import './Messeger.css'

// function Messages() {
//   const [selectedChat, setSelectedChat] = useState(null);
//   const chats = [
//     { id: 1, name: 'nikita', lastMessage: 'Nikita sent a message...', time: '2 weeks' },
//     { id: 2, name: 'sashaa', lastMessage: 'Sashaa sent a message...', time: '2 weeks' }
//   ];

//   const handleSelectChat = (chat) => {
//     setSelectedChat(chat);
//   };

//   return (
//     <div className="messages">
//       <div className="chat-list">
//         {chats.map((chat) => (
//           <div key={chat.id} className="chat-item" onClick={() => handleSelectChat(chat)}>
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
import { useState } from 'react';
import Chat from '../Chat/Chat';
import './Messeger.css';

function Messages() {
  const [selectedChat, setSelectedChat] = useState(null);
  const chats = [
    { id: 1, name: 'nikita', lastMessage: 'Nikita sent a message...', time: '2 weeks' },
    { id: 2, name: 'sashaa', lastMessage: 'Sashaa sent a message...', time: '2 weeks' }
  ];

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <div className="messages">
      <div className="chat-list">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`chat-item ${selectedChat === chat ? 'selected' : ''}`}
            onClick={() => handleSelectChat(chat)}
          >
            <p>{chat.name}</p>
            <p>{chat.lastMessage}</p>
          </div>
        ))}
      </div>
      {selectedChat && <Chat chat={selectedChat} />}
    </div>
  );
}

export default Messages;
