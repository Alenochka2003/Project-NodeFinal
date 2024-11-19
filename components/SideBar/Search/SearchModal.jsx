
import PropTypes from 'prop-types';
import Search from './Search'; // Make sure to import the Search component if it's defined in another file

const SearchModal = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
    
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <Search /> {/* Ensure Search component is defined or imported correctly */}
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

// Define PropTypes for the component
SearchModal.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default SearchModal;
