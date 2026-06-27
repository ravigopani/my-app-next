'use client';
import { useState } from 'react';

export default function G1Layout({ children }) {
    
    const [search, setSearch] = useState('');
    
    return (
        <div>
            <header>
                <h3>Group1 Template Header</h3>
            </header>
            <div className="container">
                from template: <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            {children}
            <footer>
                <h3>Group2 Template Footer</h3>
            </footer>
        </div>
    );
}