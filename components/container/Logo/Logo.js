import React from 'react';
import useMedia from '../../../hook/use-media';
import Image from 'next/image';
const Logo = (props) => {
    const match = useMedia('(max-width: 991px)');
    return (
        <Image
            className={props.className}
            decoding="async"
            src={'/logo-icon-new.svg'}
            alt='logo'
            width={match ? '46.67' : '80'}
            height={match ? '32' : '80'}
            priority
            {...props}
        />
    );
};

export default Logo;
