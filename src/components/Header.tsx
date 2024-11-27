import { FCProps } from '@/types/app';
import Image from 'next/image';

import logo from '../../public/images/femlives-logo.svg';
const Header: FCProps = () => {
  return (
    <header className='w-full px-36 py-4 bg-primary-lighter'>
      <Image src={logo} alt='Femlives Logo' />
    </header>
  );
};

export default Header;
