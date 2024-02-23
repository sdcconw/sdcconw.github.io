import './navbar.css';

export default function NavBar() {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="/sdcc-icon.png" alt="SDCC Logo" width="32" height="32" className="d-inline-block align-text-top"></img>
                        島根データセンター友の会
                    </a>
                </div>
            </nav>
        </>
    )
}