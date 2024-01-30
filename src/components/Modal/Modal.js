import React from "react";

export default function Modal({ onClose, item }) {
  return (
    <div className="modal">
      <div className="modal-content scrollbar">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={item.imageUrl} alt={item.title} />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        {/* Additional details */}
      </div>
    </div>
  );
}
