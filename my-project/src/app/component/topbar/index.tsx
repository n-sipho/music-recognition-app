"use client";

import { Menu, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

export default function TopBar({ onMenuClick }: { onMenuClick: () => void }) {
    const pathname = usePathname();

    // Map paths to readable titles
    const titles: Record<string, string> = {
        "/home": "Home",
        "/playlists": "Playlists",
        "/profile": "Profile",
        "/documents": "Documents",
        "/messages": "Messages",
        "/settings": "Settings",
    };

    const title = titles[pathname] || "Dashboard";

    return (
        <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-3 lg:px-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={onMenuClick}
                        className="lg:hidden p-2 rounded-md hover:bg-gray-100"
                    >
                        <Menu size={20} className="text-gray-600" />
                    </button>

                    {/* Dynamic Title */}
                    <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
                </div>

                <div className="flex items-center space-x-3">
                    {/* Placeholder for actions */}
                    <button className="p-2 rounded-full hover:bg-gray-100">
                        <Settings size={20} className="text-gray-600" />
                    </button>
                </div>
            </div>
        </header>
    );
}