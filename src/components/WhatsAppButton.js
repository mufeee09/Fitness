// import React from 'react';
// import { WhatsApp } from 'lucide-react';
// import './WhatsAppButton.css'; // Import the new CSS file
// import { MessageCircle } from 'lucide-react';


// const WhatsAppButton = () => {
//   return (
//     <div className="whatsapp-button">
//       <WhatsApp className="whatsapp-icon" />
//       <MessageCircle className="text-white" size={24} />
//     </div>
//   );
// };

// export default WhatsAppButton;

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon
import './WhatsAppButton.css'; // Import the CSS file

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/your-number-here', '_blank'); // Replace with actual number
  };

  return (
    <button 
      style={{
        position: 'fixed',
        bottom: '25px',
        right: '20px',
        backgroundColor: '#25D366',
        padding: '8px',
        borderRadius: '50%',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease',
        border: 'none',
        cursor: 'pointer'
      }}
      onClick={handleWhatsAppClick}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1EBE55'}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#25D366'}
    >
      <FaWhatsapp style={{ color: 'white', fontSize: '30px' }} />
    </button>
  );
};

export default WhatsAppButton;
