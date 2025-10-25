"use client";
import { useState, useEffect } from 'react';

interface TicketDetailsModalProps {
  ticket: any;
  onClose: () => void;
  onDelete: (ticketId: string) => void;
  onUpdate: (updatedTicket: any) => void;
}

const TicketDetailsModal: React.FC<TicketDetailsModalProps> = ({ ticket, onClose, onDelete, onUpdate }) => {
  const [editedTicket, setEditedTicket] = useState(ticket);

  useEffect(() => {
    setEditedTicket(ticket);
  }, [ticket]);

  if (!ticket) return null;

  const handleSave = () => {
    onUpdate(editedTicket);
    onClose();
  };

  const statusColors: { [key: string]: string } = {
    open: 'bg-green-200 text-green-800',
    in_progress: 'bg-amber-200 text-amber-800',
    closed: 'bg-gray-200 text-gray-800',
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">{ticket.title}</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={editedTicket.description}
            onChange={(e) => setEditedTicket({ ...editedTicket, description: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            rows={4}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            value={editedTicket.status}
            onChange={(e) => setEditedTicket({ ...editedTicket, status: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
        </div>
        <div className="mb-4 text-sm text-gray-500">
          <p><strong>Date Created:</strong> {ticket.date}</p>
        </div>
        <div className="flex justify-between items-center">
          <button onClick={() => onDelete(ticket.id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Delete
          </button>
          <div className="flex gap-3">
            <button onClick={onClose} className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300">
              Cancel
            </button>
            <button onClick={handleSave} className="bg-black text-white px-4 py-2 rounded">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetailsModal;
