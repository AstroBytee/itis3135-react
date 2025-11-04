export default function Header() {
    return (
        <> {/* React Fragment */}
            <header>
                <h1>Ryan LaCroix's Regal Lynx || ITIS3135</h1>
                <nav>
                    <a href="/">Home</a>
                    {' | '}
                    <a href="/introduction">Introduction</a> 
                    {' | '}
                    <a href="/contract">Contract</a>
                </nav>
            </header>
        </>
    )
}