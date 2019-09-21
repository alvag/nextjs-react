import Link from 'next/link';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-warning">
            <div className="container">
                <Link href="/"><a className="navbar-brand">Todo Bitcoin</a></Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link href="/"><a className="nav-link">Inicio</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link prefetch as={'mi-super-ruta.html'} href="/nosotros"><a className="nav-link">Nosotros</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contacto"><a className="nav-link">Contacto</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
