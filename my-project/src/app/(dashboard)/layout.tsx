"use client";

import { useState } from "react";
import AppSideNav from "../component/side-nav";
import TopBar from "../component/topbar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <AppSideNav isOpen={isOpen} setIsOpen={setIsOpen} />

            {/* Main Content */}
            <div className="flex-1 lg:ml-64">
                <TopBar onMenuClick={() => setIsOpen(true)} />
                <main className="p-4 lg:p-6">{children}</main>
            </div>
        </div>
    );
}