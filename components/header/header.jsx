import Image from 'next/image';
import logoSrc from './icons/logo.svg';
import { Profile } from '../profile';
import { UiButton } from '../uiKit/';
import { ArrowDownIcon } from './icons/arrowDown';

function Header() {
  return (
    <header className="px-8 flex items-center h-24 bg-white shadow-lg">
      <Image src={logoSrc} alt="title" />
      <div className="w-px h-10 bg-slate-300 mx-5" />
      <UiButton className="w-44" size='big' variant="basic">
        Играть!
      </UiButton>
      <button className="ml-auto flex items-center gap-2 text-start text-teal-600 hover:text-teal-500 transition-colors">
        <Profile name='Михаил Филиппов' rating='1230'/>
        <ArrowDownIcon/>
      </button>
    </header>
  );
}

export { Header };
