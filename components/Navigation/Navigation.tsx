import Link from 'next/link';

const Navigation = () => {
    return (
        <ul>
            <li><Link href="/"><a>Inicio</a></Link></li>
            <li><Link href="/nosotros"><a>Nosotros</a></Link></li>
            <li><Link href="/contacto"><a>Contacto</a></Link></li>
        </ul>
    );
};

export default Navigation;
