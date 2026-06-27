'use client';

import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

export default function Error({ error, reset }) {

    const router = useRouter();

    const handleReset = () => {
        console.log('handleReset');
        startTransition(() => {
            reset();
            router.refresh();
        });
    }

    return <div style={{ border: '1px solid red', padding: '10px', margin: '10px' }}>
        <h1>Error from Route1</h1>
        <p>{error.message}</p>
        <button onClick={handleReset}>Reset</button>
    </div>;
}