import React from 'react';
import Link from 'next/link';
const Header: React.FC = () => (
    <header className="w-full px-8 py-4 bg-gray-900 text-white flex items-center justify-between">
        <h1 className="m-0 text-xl font-bold">My Project</h1>
        <nav>
            <Link href="/" className="text-white no-underline mr-4 hover:underline">Mainhome</Link>
            <Link href="/home" className="text-white no-underline hover:underline">Home</Link>
            <Link href="/about" className="text-white no-underline hover:underline">About</Link>
            <Link href="/posts" className="text-white no-underline hover:underline">Posts</Link>
            <Link href="/users" className="text-white no-underline hover:underline">Users</Link>
        </nav>
    </header>
);

export default Header;
