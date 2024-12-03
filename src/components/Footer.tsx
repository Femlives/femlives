import { FCProps } from '@/types/app';
import Image from 'next/image';
import logo from '../../public/images/femlives-logo.svg';
import AppLink from './AppLink';
import { Route } from '@/enums';

export const Footer: FCProps = () => {
  const links = [
    { label: 'Terms of Service', route: Route.GTC },
    { label: 'Privacy Policy', route: Route.PRIVACY_POLICY },
    { label: 'About Us', route: Route.ABOUT_US },
    { label: 'Get in Touch', route: Route.CONTACT_US },
  ];

  return (
    <footer className="w-full bg-quinary-default flex-center flex-col items-center gap-8 py-12">
      <Image src={logo} alt="Femlives Logo" />

      <nav>
        <ul className="flex items-start gap-16 text-lg text-black font-bold">
          {links.map(({ label, route }, index) => (
            <li key={index}>
              <AppLink
                label={label}
                className="no-underline text-black hover:text-primary"
                internalRoute={route}
              />
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

