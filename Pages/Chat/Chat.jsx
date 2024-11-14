

// // export default Chat;
// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import nikita from './nikita_svg.svg';
// import './Chat.css';

// function Chat({ chat }) {
//   const [messages, setMessages] = useState([
//     { sender: 'nikita', text: 'Привет!', time: '08:49 PM' },
//     { sender: 'me', text: 'Привет! Как дела?', time: '08:50 PM' }
//   ]);
//   const [newMessage, setNewMessage] = useState('');

//   const handleSendMessage = () => {
//     if (newMessage.trim()) {
//       setMessages([...messages, { sender: 'me', text: newMessage, time: new Date().toLocaleTimeString() }]);
//       setNewMessage('');
//     }
//   };

//   return (
//     <div className="chat">
//       <div className='name_nik'>
//     <img  width="44" height="44" src={nikita} alt="nikita" className="nikita_logo" />  
//     <h2>{chat.name}</h2>
//      </div> 
//       <div className="message-list">
//         <div className='foto_data'>
//         <img  width="96" height="96" src={nikita} alt="nikita" className="nikita_logo" /> 
//         <h2 className='Nik'>{chat.name}</h2>
//         <p>nikiita · ICHgram</p>
//         <button  className='View_profile'>View_profile</button>
//         </div>
        

//         {messages.map((msg, index) => (
//           <div key={index} className={`message ${msg.sender === 'me' ? 'sent' : 'received'}`}>
//             <p>{msg.text}</p>
//             <span>{msg.time}</span>
//           </div>
//         ))}
//       </div>
//       <div className="message-input">
//         <input
//           type="text"
//           placeholder="Write message"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           className="chat-input"    
//         />
//         <button onClick={handleSendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }

// Chat.propTypes = {
//   chat: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default Chat;



// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import './Chat.css';

// function Chat({ chat }) {
//   // Состояние для списка сообщений и нового сообщения
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//       sender: 'nikita',
//       isUser: false,
//     },
//     {
//       id: 2,
//       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//       sender: 'user',
//       isUser: true,
//     },
//   ]);
//   const [newMessage, setNewMessage] = useState('');

//   // Обработчик для отправки сообщения
//   const handleSendMessage = () => {
//     if (newMessage.trim()) {
//       const newMessageObj = {
//         id: messages.length + 1,
//         text: newMessage,
//         sender: 'user',
//         isUser: true,
//       };
//       setMessages([...messages, newMessageObj]); // Добавляем новое сообщение в список
//       setNewMessage(''); // Очищаем поле ввода
//     }
//   };

//   return (
//     <div className="chat">
//       <div className="chat-header">
//         <img src={chat.avatar} alt={`${chat.name} avatar`} className="chat-avatar" />
//         <div>
//           <h3>{chat.name}</h3>
//           <p>{chat.name} · ICHgram</p>
//           <button className="profile-button">View profile</button>
//         </div>
//       </div>
//       <div className="chat-timestamp">Jun 26, 2024, 08:49 PM.</div>
//       <div className="messages-thread">
//         {messages.map((message) => (
//           <div key={message.id} className={`message ${message.isUser ? 'user-message' : 'other-message'}`}>
//             {!message.isUser && <img src={chat.avatar} alt={`${message.sender} avatar`} className="message-avatar" />}
//             <p>{message.text}</p>
//           </div>
//         ))}
//       </div>
//       <div className="message-input">
//         <input
//           type="text"
//           placeholder="Write message"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           className="chat-input"
//         />
//         <button onClick={handleSendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }

// // Определение PropTypes для компонента Chat
// Chat.propTypes = {
//   chat: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default Chat;


// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import './Chat.css';

// function Chat({ chat }) {
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//       sender: 'nikita',
//       isUser: false,
//     },
//     {
//       id: 2,
//       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//       sender: 'user',
//       isUser: true,
//     },
//   ]);

//   const [newMessage, setNewMessage] = useState('');

//   const handleSendMessage = () => {
//     if (newMessage.trim()) {
//       const newMessageObj = {
//         id: messages.length + 1,
//         text: newMessage,
//         sender: 'user',
//         isUser: true,
//       };
//       setMessages([...messages, newMessageObj]);
//       setNewMessage('');
//     }
//   };

//   return (
//     <div className="chat">
//       <div className="chat-header">
//         <img src={chat.avatar} alt={`${chat.name} avatar`} className="chat-avatar" />
//         <div>
//           <h3>{chat.name}</h3>
//           <p>{chat.name} · ICHgram</p>
//           <button className="profile-button">View profile</button>
//         </div>
//       </div>
//       <div className="chat-timestamp">Jun 26, 2024, 08:49 PM.</div>
//       <div className="messages-thread">
//         {messages.map((message) => (
//           <div key={message.id} className={`message ${message.isUser ? 'user-message' : 'other-message'}`}>
//             {!message.isUser && <img src={chat.avatar} alt={`${message.sender} avatar`} className="message-avatar" />}
//             <p>{message.text}</p>
//           </div>
//         ))}
//       </div>
//       <div className="message-input">
//         <input
//           type="text"
//           placeholder="Write message"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           className="chat-input"
//         />
//         <button onClick={handleSendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }

// Chat.propTypes = {
//   chat: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default Chat;


import { useState } from 'react';
import PropTypes from 'prop-types';
import './Chat.css';


function Chat({ chat }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      sender: 'nikita',
      isUser: false,
    },
    {
      id: 2,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      sender: 'user',
      isUser: true,
    },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMessageObj = {
        id: messages.length + 1,
        text: newMessage,
        sender: 'user',
        isUser: true,
      };
      setMessages([...messages, newMessageObj]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat">
      <div className="log_name">
           <img src={chat.avatar} alt={`${chat.name} avatar`} className="chat-avatar1" />
           <h3>{chat.name}</h3>
           </div>
      <div className="chat-header">
        <img src={chat.avatar} alt={`${chat.name} avatar`} className="chat-avatar" />
        {/* <div className='chatAll'> */}
          <h3>{chat.name}</h3>
          <p>{chat.name} · ICHgram</p>
          <button className="profile-button">View profile</button>
          </div>
        {/* </div> */}
        <div className="chat-timestamp">Jun 26, 2024, 08:49 PM.</div>
      
      {/* <div className="chat-timestamp">Jun 26, 2024, 08:49 PM.</div> */}

      <div className="messages-thread">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.isUser ? 'user-message' : 'other-message'}`}>
            {!message.isUser && <img src={chat.avatar} alt={`${message.sender} avatar`} className="message-avatar" />}
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Write message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="chat-input"
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
     
    </div>
    
  );

 
}

Chat.propTypes = {
  chat: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

export default Chat;



