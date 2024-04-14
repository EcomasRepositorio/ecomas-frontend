import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
} from '@heroicons/react/solid';
import Link from 'next/link';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    {
        name: 'Inicio',
        href: '/',
        icon: HomeIcon
    },
    {
        name: 'Diplomados',
        href: '/diplomados',
        icon: DocumentDuplicateIcon,
    },
    {
        name: 'Certificados',
        href: '/customers',
        icon: UserGroupIcon
    },
    {
        name: 'Contáctanos',
        href: '/#contacto',
        icon: UserGroupIcon
    },
];

export default function NavLinks() {
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-lg text-white hover:text-blue-200"
                    >
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
