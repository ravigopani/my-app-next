"use client"

export default function Error({ error, reset }) {
    return (
        <div style={{border: '1px solid red', padding: '10px', margin: '10px'}}>
            <h1>Error from Root</h1>
            <p>{error.message}</p>
            {/* <button onClick={reset}>Reset</button> */}
        </div>
    );
}