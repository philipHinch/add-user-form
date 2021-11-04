import '../styles/Modal.css';

const Modal = ({ title, message, setError }) => {

    const handleClick = () => {
        setError()
    }


    return (

        <div className="modal-container" onClick={handleClick}>
            <div className="inner-modal">
                <p className="modal-title">{title}</p>
                <p className="modal-message">{message}</p>
                <button className="modal-btn btn" onClick={handleClick}>Close</button>
            </div>
        </div>

    );
}

export default Modal;