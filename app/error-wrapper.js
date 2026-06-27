'use client';

import { useState } from 'react';

const ErrorSimulator = () => {

    const [error, setError] = useState(null);

    if (error) {
        throw new Error(error);
    }

    return (
        <div>
            <h1>Error Simulator</h1>
            <button onClick={() => setError(true)}>Simulate Error</button>
        </div>
    );
}

export function ErrorWrapper({ children }) {
    return (
        <div style={{ border: '1px solid red', padding: '1rem' }}>
            <h1>Error Wrapper</h1>
            <ErrorSimulator />
            {children}
        </div>
    );
}