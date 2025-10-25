"use client";
import { useEffect, useState } from "react";
import { getSession } from "../utils/auth";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import TicketModal from "../Components/TicketModal";
import TicketDetailsModal from "../Components/TicketDetailsModal";
import ConfirmationModal from "../Components/ConfirmationModal";

export default function Tickets() {
  const router = useRouter();
  const session = getSession();

  const [tickets, setTickets] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<any>(null);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [ticketToDelete, setTicketToDelete] = useState<string | null>(null);

  useEffect(() => {
    if (!session) return router.push("/login");

    const saved = localStorage.getItem("ticketapp_tickets");
    setTickets(saved ? JSON.parse(saved) : []);
  }, []);

  const handleAddTicket = (title: string, description: string) => {
    if (!title.trim() || !description.trim()) return;

    const newTicket = {
      id: uuidv4(),
      user: session.email,
      title,
      description,
      status: "open",
      date: new Date().toISOString().split("T")[0],
    };

    const updated = [...tickets, newTicket];
    setTickets(updated);
    localStorage.setItem("ticketapp_tickets", JSON.stringify(updated));
  };

  const handleUpdateTicket = (updatedTicket: any) => {
    const updatedTickets = tickets.map((ticket) =>
      ticket.id === updatedTicket.id ? updatedTicket : ticket
    );
    setTickets(updatedTickets);
    localStorage.setItem("ticketapp_tickets", JSON.stringify(updatedTickets));
    setSelectedTicket(updatedTicket);
  };

  const handleDeleteTicket = (ticketId: string) => {
    setTicketToDelete(ticketId);
    setIsConfirmModalOpen(true);
  };

  const confirmDelete = () => {
    if (ticketToDelete) {
      const updatedTickets = tickets.filter((ticket) => ticket.id !== ticketToDelete);
      setTickets(updatedTickets);
      localStorage.setItem("ticketapp_tickets", JSON.stringify(updatedTickets));
      setSelectedTicket(null); // Close the details modal
      setIsConfirmModalOpen(false); // Close the confirm modal
      setTicketToDelete(null);
    }
  };

  if (!session) return null;

  const statusColors: { [key: string]: string } = {
    open: 'bg-green-200 text-green-800',
    in_progress: 'bg-amber-200 text-amber-800',
    closed: 'bg-gray-200 text-gray-800',
  };

  return (
    <div className="padding-container py-10">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Your Tickets</h2>
        <button onClick={() => setIsModalOpen(true)} className="bg-green-400 text-white px-4 py-2 rounded">
          Add Ticket
        </button>
      </div>

      {isModalOpen && (
        <TicketModal
          onClose={() => setIsModalOpen(false)}
          onAddTicket={handleAddTicket}
        />
      )}

      {selectedTicket && (
        <TicketDetailsModal
          ticket={selectedTicket}
          onClose={() => setSelectedTicket(null)}
          onDelete={handleDeleteTicket}
          onUpdate={handleUpdateTicket}
        />
      )}

      {isConfirmModalOpen && (
        <ConfirmationModal
          message="Are you sure you want to delete this ticket?"
          onConfirm={confirmDelete}
          onCancel={() => setIsConfirmModalOpen(false)}
        />
      )}

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tickets
          .filter((t) => t.user === session.email)
          .map((ticket) => (
            <div key={ticket.id} onClick={() => setSelectedTicket(ticket)} className="border p-4 rounded-lg shadow-md bg-white flex flex-col justify-between cursor-pointer hover:shadow-lg transition-shadow">
              <div>
                <h3 className="font-bold text-lg mb-2">{ticket.title}</h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{ticket.description}</p>
              </div>
              <div className="text-sm text-gray-500 mt-2">
                <span className={`px-2 py-1 rounded-full text-xs ${statusColors[ticket.status] || statusColors.closed}`}>
                  {ticket.status}
                </span>
                <p className="mt-2">{ticket.date}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
