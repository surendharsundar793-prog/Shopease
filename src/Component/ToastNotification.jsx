import React, { useContext } from 'react';
import { RealTimeContext } from '../Context/RealTimeContext';

const ToastNotification = () => {
    const { notifications } = useContext(RealTimeContext);

    if (notifications.length === 0) return null;

    return (
        <div className="toast-container">
            {notifications.map((note) => (
                <div key={note.id} className="toast-message">
                    <span className="toast-icon">🛍️</span>
                    <p>{note.message}</p>
                </div>
            ))}
        </div>
    );
};

export default ToastNotification;
