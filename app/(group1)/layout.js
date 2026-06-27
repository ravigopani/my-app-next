'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
    { name: 'g1-route1-loading', href: '/g1-route1-loading' },
    { name: 'g1-route2', href: '/g1-route2' },
    { name: 'g3-route3', href: '/g3-route3' },
];

export default function G1Layout({ children }) {

    const pathname = usePathname();
    const [search, setSearch] = useState('');

    return (
        <div>
            <header>
                <h3>Group1 Layout Header [Nested Layout]</h3>
                <nav className="home-nav">
                    {navigation.map((item) => {
                        return (
                            <Link key={item.href} href={item.href} className={`home-nav-link ${pathname === item.href ? 'active' : ''}`}>
                                {item.name}
                            </Link>
                        )
                    }
                    )}
                </nav>
            </header>
            <div>
                from layout: <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            {children}
            <footer>
                <h3>Group2 Layout Footer [Nested Layout]</h3>
            </footer>
        </div>
    );
}