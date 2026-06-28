export default function Layout({ children, modal }) {
    return <div style={{ border: '1px solid red', padding: '10px', margin: '10px' }}>
        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Layout</p>
        {modal}
        {children}
    </div>;
}