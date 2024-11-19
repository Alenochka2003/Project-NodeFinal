import  { useEffect } from "react";
import PropTypes from "prop-types";

const Notification = ({ message, type, onClose, duration = 5000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const typeClasses = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
  };

  return (
    <div className={`fixed bottom-4 right-4 p-4 rounded shadow-lg ${typeClasses[type]}`}>
      {message}
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "error"]).isRequired,
  onClose: PropTypes.func.isRequired,
  duration: PropTypes.number,
};

export default Notification;
