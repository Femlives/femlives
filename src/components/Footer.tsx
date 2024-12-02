import { FCProps } from '@/types/app';
import Image from 'next/image';

import logo from '../../public/images/femlives-logo.svg';

const Footer: FCProps = () => {
  return (
    <footer className="w-full bg-quinary-default flex-center flex-col items-center gap-8 py-12">
      <Image src={logo} alt="Femlives Logo"/>

      <nav>
        <ul className="flex items-start gap-[90px] text-lg text-black font-bold">
          <li>
            <a >
              Terms of Service
            </a>
          </li>
          <li>
            <a>
              Privacy Policy
            </a>
          </li>
          <li>
            <a>
              About us
            </a>
          </li>
          <li>
            <a>
              Get in touch
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
