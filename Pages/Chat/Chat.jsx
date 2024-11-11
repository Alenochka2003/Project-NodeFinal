// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import './Chat.css'

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
//       <h2>{chat.name}</h2>
//       <div className="message-list">
//         {messages.map((msg, index) => (
//           <div key={index} className={`message ${msg.sender === 'me' ? 'sent' : 'received'}`}>
//             <p>{msg.text}</p>
//             <span>{msg.time}</span>
//           </div>
//         ))}
//       </div>
//       <input
//         type="text"
//         placeholder="Write message"
//         value={newMessage}
//         onChange={(e) => setNewMessage(e.target.value)}
//       />
//       <button onClick={handleSendMessage}>Send</button>
//     </div>
//   );
// }

// // Добавление propTypes для валидации пропсов
// Chat.propTypes = {
//   chat: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default Chat;
import { useState } from 'react';
import PropTypes from 'prop-types';
import nikita from './nikita_svg.svg';
import './Chat.css';

function Chat({ chat }) {
  const [messages, setMessages] = useState([
    { sender: 'nikita', text: 'Привет!', time: '08:49 PM' },
    { sender: 'me', text: 'Привет! Как дела?', time: '08:50 PM' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: 'me', text: newMessage, time: new Date().toLocaleTimeString() }]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat">
      <div className='name_nik'>
    <img  width="44" height="44" src={nikita} alt="nikita" className="nikita_logo" />  
    <h2>{chat.name}</h2>
     </div> 
      <div className="message-list">
        <div className='foto_data'>
        <img  width="96" height="96" src={nikita} alt="nikita" className="nikita_logo" /> 
        <h2 className='Nik'>{chat.name}</h2>
        <p>nikiita · ICHgram</p>
        <button  className='View_profile'>View_profile</button>
        </div>
        

        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === 'me' ? 'sent' : 'received'}`}>
            <p>{msg.text}</p>
            <span>{msg.time}</span>
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
  }).isRequired,
};

export default Chat;
