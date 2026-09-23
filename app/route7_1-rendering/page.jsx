/* this is a Client Component */
'use client';

import { useState } from 'react';
export default function Route7RenderingPage() {
    /* this will log on twice on console */
    /* once render on server and once render on client side. */
    console.log('Route7RenderingPage');
    const [name, setName] = useState('John');

    return <div>
        <h1>Route7 Rendering Page</h1>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <p>Name: {name}</p>
    </div>;
}