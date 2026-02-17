"use client";
import { useState, useEffect } from "react";
import AdminProtectedRoute from "@/components/AdminProtectedRoute";
import {
    FaSearch,
    FaFilter,
    FaDownload,
    FaCheckCircle,
    FaClock,
    FaTimesCircle,
    FaWallet,
    FaBox,
    FaArrowLeft
} from "react-icons/fa";
import Link from "next/link";
import * as XLSX from "xlsx";

export default function AdminPaymentsPage() {
    const [payments, setPayments] = useState([]);
    const [filteredPayments, setFilteredPayments] = useState([]);
    const [analytics, setAnalytics] = useState({
        totalPayments: 0,
        successfulPayments: 0,
        pendingPayments: 0,
        totalRevenue: 0
    });
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    // Fetch data
    const fetchPayments = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem("adminToken");
            const response = await fetch("http://localhost:5001/api/payment/admin/all", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();

            if (data.success) {
                setPayments(data.payments);
                setFilteredPayments(data.payments);
                setAnalytics(data.analytics);
            }
        } catch (error) {
            console.error("Error fetching payments:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPayments();
    }, []);

    // Filter and Search logic
    useEffect(() => {
        let result = payments;

        if (statusFilter !== "All") {
            result = result.filter(p => p.status === statusFilter);
        }

        if (searchTerm) {
            result = result.filter(p =>
                p.merchantTxnNo?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.customerName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.paymentDetails?.bankTxnId?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredPayments(result);
    }, [searchTerm, statusFilter, payments]);

    // Export to Excel
    const exportToExcel = () => {
        const dataToExport = filteredPayments.map(p => ({
            "Order ID": p.merchantTxnNo,
            "Customer Name": p.customerName,
            "Email": p.customerEmail,
            "Mobile": p.customerMobile,
            "Amount (₹)": p.amount,
            "Status": p.status,
            "Bank Transaction ID": p.paymentDetails?.bankTxnId || "N/A",
            "Payment Mode": p.paymentDetails?.paymentMode || "N/A",
            "Date": p.createdAt ? new Date(p.createdAt).toLocaleString() : "N/A"
        }));

        const worksheet = XLSX.utils.json_to_sheet(dataToExport);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Payments");
        XLSX.writeFile(workbook, `Payment_Records_${new Date().toISOString().split('T')[0]}.xlsx`);
    };

    return (
        <AdminProtectedRoute>
            <div className="min-h-screen bg-black text-white p-4 lg:p-10">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
                        <div>
                            <Link href="/" className="text-emerald-500 flex items-center gap-2 mb-4 hover:underline">
                                <FaArrowLeft /> Back to Website
                            </Link>
                            <h1 className="text-3xl lg:text-4xl font-serif text-neutral-100 italic">
                                Admin <span className="text-emerald-500">Payment Records</span> Dashboard
                            </h1>
                            <p className="text-neutral-400 mt-2">Monitor, filter, and analyze all World Trade Summit 2026 transactions</p>
                        </div>

                        <button
                            onClick={exportToExcel}
                            className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl transition-all shadow-lg shadow-emerald-500/20 font-bold"
                        >
                            <FaDownload /> Export to Excel
                        </button>
                    </div>

                    {/* Analytics Summary */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        <StatCard
                            title="Total Revenue"
                            value={`₹${analytics.totalRevenue.toLocaleString()}`}
                            icon={<FaWallet className="text-emerald-400" />}
                            bgColor="bg-emerald-500/10"
                            borderColor="border-emerald-500/20"
                        />
                        <StatCard
                            title="Total Payments"
                            value={analytics.totalPayments}
                            icon={<FaBox className="text-blue-400" />}
                            bgColor="bg-blue-500/10"
                            borderColor="border-blue-500/20"
                        />
                        <StatCard
                            title="Successful"
                            value={analytics.successfulPayments}
                            icon={<FaCheckCircle className="text-emerald-400" />}
                            bgColor="bg-emerald-500/10"
                            borderColor="border-emerald-500/20"
                        />
                        <StatCard
                            title="Pending/Failed"
                            value={analytics.pendingPayments + analytics.failedPayments}
                            icon={<FaClock className="text-amber-400" />}
                            bgColor="bg-amber-500/10"
                            borderColor="border-amber-500/20"
                        />
                    </div>

                    {/* Filters & Table */}
                    <div className="bg-neutral-900 rounded-3xl border border-neutral-800 overflow-hidden shadow-2xl">
                        {/* Control Bar */}
                        <div className="p-6 border-b border-neutral-800 flex flex-col md:flex-row gap-4 justify-between bg-neutral-900/50">
                            <div className="relative flex-1 max-w-md">
                                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
                                <input
                                    type="text"
                                    placeholder="Search by Order ID, Name, or Bank ID..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full bg-black border border-neutral-800 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-emerald-500 transition-all text-neutral-200"
                                />
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 text-neutral-400">
                                    <FaFilter /> <span>Status:</span>
                                </div>
                                <select
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                    className="bg-black border border-neutral-800 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 text-neutral-200 cursor-pointer"
                                >
                                    <option value="All">All Status</option>
                                    <option value="SUCCESS">Success</option>
                                    <option value="PENDING">Pending</option>
                                    <option value="FAILED">Failed</option>
                                </select>

                                <button
                                    onClick={fetchPayments}
                                    className="p-3 bg-neutral-800 text-neutral-400 hover:text-white rounded-xl hover:bg-neutral-700 transition-all"
                                    title="Refresh Data"
                                >
                                    <FaClock className={loading ? "animate-spin" : ""} />
                                </button>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-neutral-800/30 text-neutral-400 text-sm uppercase tracking-wider">
                                        <th className="px-6 py-4 font-medium">Order ID</th>
                                        <th className="px-6 py-4 font-medium">Customer</th>
                                        <th className="px-6 py-4 font-medium">Amount</th>
                                        <th className="px-6 py-4 font-medium">Status</th>
                                        <th className="px-6 py-4 font-medium">Bank Txn ID</th>
                                        <th className="px-6 py-4 font-medium">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-neutral-800">
                                    {loading ? (
                                        <tr>
                                            <td colSpan="6" className="px-6 py-20 text-center">
                                                <div className="flex flex-col items-center gap-4">
                                                    <div className="w-10 h-10 border-3 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                                                    <p className="text-neutral-500">Loading payment records...</p>
                                                </div>
                                            </td>
                                        </tr>
                                    ) : filteredPayments.length === 0 ? (
                                        <tr>
                                            <td colSpan="6" className="px-6 py-20 text-center text-neutral-500">
                                                No payment records found.
                                            </td>
                                        </tr>
                                    ) : (
                                        filteredPayments.map((p) => (
                                            <tr key={p._id} className="hover:bg-white/5 transition-colors group">
                                                <td className="px-6 py-4 font-mono text-sm text-neutral-200 group-hover:text-emerald-400 transition-colors">
                                                    {p.merchantTxnNo}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex flex-col">
                                                        <span className="text-neutral-100 font-medium">{p.customerName}</span>
                                                        <span className="text-xs text-neutral-500">{p.customerEmail}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 font-bold text-neutral-200">₹{p.amount}</td>
                                                <td className="px-6 py-4">
                                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${p.status === 'SUCCESS' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                                                            p.status === 'PENDING' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                                                                'bg-red-500/10 text-red-400 border border-red-500/20'
                                                        }`}>
                                                        {p.status === 'SUCCESS' && <FaCheckCircle className="text-[10px]" />}
                                                        {p.status === 'PENDING' && <FaClock className="text-[10px]" />}
                                                        {p.status === 'FAILED' && <FaTimesCircle className="text-[10px]" />}
                                                        {p.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 font-mono text-xs text-neutral-500">
                                                    {p.paymentDetails?.bankTxnId || "---"}
                                                </td>
                                                <td className="px-6 py-4 text-xs text-neutral-400">
                                                    {new Date(p.createdAt).toLocaleString()}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Footer / Pagination Placeholder */}
                        <div className="p-6 border-t border-neutral-800 flex items-center justify-between text-sm text-neutral-500">
                            <p>Showing {filteredPayments.length} of {payments.length} total records</p>
                            <div className="flex gap-2">
                                <button disabled className="px-4 py-2 bg-black border border-neutral-800 rounded-lg opacity-50 cursor-not-allowed">Previous</button>
                                <button disabled className="px-4 py-2 bg-black border border-neutral-800 rounded-lg opacity-50 cursor-not-allowed">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminProtectedRoute>
    );
}

function StatCard({ title, value, icon, bgColor, borderColor }) {
    return (
        <div className={`${bgColor} ${borderColor} border rounded-3xl p-6 transition-all hover:scale-[1.02] shadow-xl`}>
            <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-black/40 rounded-xl">{icon}</div>
            </div>
            <h3 className="text-neutral-400 text-sm mb-1">{title}</h3>
            <p className="text-2xl lg:text-3xl font-bold text-white">{value}</p>
        </div>
    );
}
