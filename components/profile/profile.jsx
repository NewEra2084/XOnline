import React from 'react';
import Image from 'next/image';
import avatarSrc from './avatar1.png';

function Profile({name = 'null', rating = 'null', avatar = avatarSrc}) {
  return (
    <div className="w-52 flex text-teal-600 gap-3 items-center hover:text-teal-500 transition-colors">
      <Image src={avatar} alt="avatar" width={48} height={48} />
      <div className='overflow-hidden'>
        <p className="text-lg leading-tight truncate">{name}</p>
        <p className="text-xs text-slate-400 leading-tight">Рейтинг: {rating}</p>
      </div>
    </div>
  );
}

export { Profile };
