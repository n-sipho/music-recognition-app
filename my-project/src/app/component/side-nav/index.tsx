"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    Home,
    User,
    Settings,
    // Mail,
    // FileText,
    // ChevronRight,
    Music
} from "lucide-react";

const navItems = [
    { icon: Home, label: "Home", href: "/home" },
    { icon: Music, label: "Playlists", href: "/playlists" },
    { icon: User, label: "Profile", href: "/profile" },
    // { icon: FileText, label: "Documents", href: "/documents" },
    // { icon: Mail, label: "Messages", href: "/messages", badge: "12" },
    { icon: Settings, label: "Settings", href: "/settings" },
];

export default function AppSideNav({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean;
    setIsOpen: (val: boolean) => void;
}) {
    const pathname = usePathname();

    return (
        <>
            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <nav
                className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:shadow-none flex flex-col`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">A</span>
                        </div>
                        <span className="font-semibold text-gray-800">App Name</span>
                    </div>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 overflow-y-auto py-4">
                    {navItems.map((item) => {
                        const isActive =
                            pathname === item.href || pathname.startsWith(item.href + "/");
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center justify-between px-4 py-3 transition-all duration-200 group
                  ${isActive
                                        ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:border-r-4 hover:border-blue-600"
                                    }`}
                            >
                                <div className="flex items-center space-x-3">
                                    <item.icon
                                        size={20}
                                        className={
                                            isActive
                                                ? "text-blue-600"
                                                : "text-gray-500 group-hover:text-blue-600"
                                        }
                                    />
                                    <span className="font-medium">{item.label}</span>
                                </div>
                                {/* <div className="flex items-center space-x-2">
                                    {item.badge && (
                                        <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                                            {item.badge}
                                        </span>
                                    )}
                                    <ChevronRight
                                        size={16}
                                        className={`transition-opacity ${isActive
                                            ? "text-blue-600 opacity-100"
                                            : "text-gray-400 opacity-0 group-hover:opacity-100"
                                            }`}
                                    />
                                </div> */}
                            </Link>
                        );
                    })}
                </div>

                {/* User Section */}
                <div className="p-4 border-t border-gray-200">
                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                            <User size={20} className="text-gray-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-800 truncate">
                                John Doe
                            </p>
                            <p className="text-xs text-gray-500 truncate">
                                john@example.com
                            </p>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}