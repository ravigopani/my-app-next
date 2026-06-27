export default function Route1Layout({ children }) {
    return (
        <div>
            <header>
                <h3>Route1 Layout Header</h3>
            </header>
            <div className="container">
                {children}
            </div>
            <footer>
                <h3>Route1 Layout Footer</h3>
            </footer>
        </div>
    );
}