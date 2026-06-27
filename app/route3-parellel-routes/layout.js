
export default function Route3ParellelRoutesLayout({ children, content1, content2, content3 }) {
    const showOnlyChildren3 = false;
    return (
        showOnlyChildren3 ? (
            <div style={{ border: '1px solid red', padding: '10px', margin: '10px' }}>
                <span>{content3}</span>
            </div>
        ) : (
            <div style={{ border: '1px solid red', padding: '10px', margin: '10px' }}>
                <span>Layout</span>
                {children}
                {content1}
                {content2}
                {content3}
            </div>
        )
    );
}