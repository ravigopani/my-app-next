'use client';
export default function GlobalError({ error }) {
    return (
        <div style={{ border: '1px solid blue', padding: '1rem' }}>
            <h1>Global Error</h1>
            <p>{error.message}</p>
            <button onClick={() => {
                window.location.reload();
            }}>Reload</button>
        </div>
    );
}