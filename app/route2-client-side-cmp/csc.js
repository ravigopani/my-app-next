/* this is a client side component */

"use client"

export const CSC = () => {
    return <div>
        <h1>Client Side Component</h1>
        <button onClick={() => {
            alert('button clicked');
        }}>
            Click me
        </button>
    </div>;
}