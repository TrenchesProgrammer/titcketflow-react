  import { useState, useEffect } from 'react';
  import { showNotification } from "@mantine/notifications";

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
      try {
        onUpdate(editedTicket);
        showNotification({
          title: "Ticket Updated",
          message: "Ticket has been updated successfully.",
          color: "green",
        });
        onClose();
      } catch (error) {
        showNotification({
          title: "Update Failed",
          message: "Failed to update ticket.",
          color: "red",
        });
      }
    };

    const handleDelete = () => {
      try {
        onDelete(ticket.id);
        showNotification({
          title: "Ticket Deleted",
          message: "Ticket has been deleted successfully.",
          color: "green",
        });
        onClose();
      } catch (error) {
        showNotification({
          title: "Deletion Failed",
          message: "Failed to delete ticket.",
          color: "red",
        });
      }
    };

    const statusColors: { [key: string]: string } = {
      open: 'bg-green-200 text-green-800',
      in_progress: 'bg-amber-200 text-amber-800',
      closed: 'bg-gray-200 text-gray-800',
    };

    const isClosed = ticket.status === 'closed';

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Ticket Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">
            &times;
          </button>
        </div>
        <p className="font-bold text-lg mb-4">{ticket.title}</p>
        <div className="mb-4">
          <p className="mt-1 text-sm text-gray-900">{ticket.description}</p>
        </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              value={editedTicket.status}
              onChange={(e) => setEditedTicket({ ...editedTicket, status: e.target.value })}
              className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 ${isClosed ? 'bg-gray-100' : ''}`}
              disabled={isClosed}
            >
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="closed">Closed</option>
            </select>
          </div>
          <div className="mb-4 text-sm text-gray-500">
            <p><strong>Date Created:</strong> {new Date(ticket.date).toLocaleDateString()}</p>
          </div>
          <div className="flex justify-between items-center">
            <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Delete
            </button>
            <div className="flex gap-3">
              <button onClick={handleSave} className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg ${isClosed ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isClosed}>
                Save & Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default TicketDetailsModal;