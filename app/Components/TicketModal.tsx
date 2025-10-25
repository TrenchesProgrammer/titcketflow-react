"use client";
import { useState } from "react";

interface TicketModalProps {
  onClose: () => void;
  onAddTicket: (title: string, description: string) => void;
}

const TicketModal: React.FC<TicketModalProps> = ({ onClose, onAddTicket }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (title.trim() && description.trim()) {
      onAddTicket(title, description);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Add New Ticket</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ticket title"
          className="border px-3 py-2 rounded w-full mb-4"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Ticket description"
          className="border px-3 py-2 rounded w-full mb-4"
          rows={4}
        />
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="bg-gray-300 text-black px-4 py-2 rounded">
            Cancel
          </button>
          <button onClick={handleSubmit} className="bg-black text-white px-4 py-2 rounded">
            Add Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketModal;
