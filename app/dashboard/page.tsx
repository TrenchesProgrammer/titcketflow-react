"use client";
import { getSession } from '../utils/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link';

interface Session {
    fullname: string;
    email: string;
}

interface Ticket {
    id: string;
    user: string;
    title: string;
    description: string;
    status: 'open' | 'in_progress' | 'closed';
    date: string;
}

const DashboardPage = () => {
    const router = useRouter();
    const [session, setSession] = useState<Session | null>(null);
    const [tickets, setTickets] = useState<Ticket[]>([]);

    useEffect(() => {
        const sessionData = getSession();
        if (!sessionData) {
            router.push("/login");
        } else {
            setSession(sessionData);
            const allTickets: Ticket[] = JSON.parse(localStorage.getItem("ticketapp_tickets") || '[]');
            const userTickets = allTickets.filter(ticket => ticket.user === sessionData.email);
            setTickets(userTickets);
        }
    }, [router]);

    if (!session) {
        return null; // Or a loading spinner
    }

    const ticketCounts = {
        total: tickets.length,
        open: tickets.filter(t => t.status === 'open').length,
        in_progress: tickets.filter(t => t.status === 'in_progress').length,
        closed: tickets.filter(t => t.status === 'closed').length,
    };

    const recentTickets = [...tickets].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5);

    const statusColors: { [key: string]: string } = {
        open: 'bg-green-200 text-green-800',
        in_progress: 'bg-amber-200 text-amber-800',
        closed: 'bg-gray-200 text-gray-800',
    };

    return (
        <div className='padding-container py-8'>
            <header className="mb-8">
                <h1 className='text-3xl font-bold'>Welcome, {session.fullname}</h1>
                <p className='text-gray-500'>Here’s a summary of your activity.</p>
            </header>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-gray-500">Total Tickets</h3>
                    <p className="text-3xl font-bold">{ticketCounts.total}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-gray-500">Open</h3>
                    <p className="text-3xl font-bold">{ticketCounts.open}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-gray-500">In Progress</h3>
                    <p className="text-3xl font-bold">{ticketCounts.in_progress}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-gray-500">Closed</h3>
                    <p className="text-3xl font-bold">{ticketCounts.closed}</p>
                </div>
            </div>

            {/* Recent Tickets */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold">Recent Tickets</h2>
                    <Link href="/tickets" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                        View All Tickets
                    </Link>
                </div>
                <ul className="space-y-4">
                    {recentTickets.length > 0 ? (
                        recentTickets.map(ticket => (
                            <li key={ticket.id} className="border-b pb-2 flex justify-between items-center">
                                <div>
                                    <p className="font-semibold">{ticket.title}</p>
                                    <p className="text-sm text-gray-500">{ticket.date}</p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-sm ${statusColors[ticket.status] || statusColors.closed}`}>
                                    {ticket.status.replace('_', ' ')}
                                </span>
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-500">You have no recent tickets.</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default DashboardPage;