import { FCProps } from '@/types/app';
import Image from 'next/image';
import logo from '../../public/images/femlives-logo.svg';
import AppLink from './AppLink';
import { Route } from '@/enums';

const Footer: FCProps = () => {
  return (
    <footer className="w-full bg-quinary-default flex-center flex-col items-center gap-8 py-12">
      <Image src={logo} alt="Femlives Logo"/>

      <nav>
        <ul className="flex items-start gap-16 text-lg text-black font-bold">
        <li>
            <AppLink label="Terms of Service" className="no-underline text-black hover:text-primary" internalRoute={Route.GTC} />
          </li>
          <li>
            <AppLink label="Privacy Policy" className="no-underline text-black hover:text-primary" internalRoute={Route.PRIVACY_POLICY} />
          </li>
          <li>
            <AppLink label="About Us" className="no-underline text-black hover:text-primary" internalRoute={Route.ABOUT_US} />
          </li>
          <li>
            <AppLink label="Get in Touch" className="no-underline text-black hover:text-primary" internalRoute={Route.CONTACT_US} />
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;