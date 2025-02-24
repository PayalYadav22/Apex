import { favicon, logo } from '@/assets';

/**
 * @copyright 2025 Payal Yadav
 * @license Apache-2.0
 */

type LogoProps = {
  variant?: 'default' | 'icon';
};

const Logo = ({ variant = 'default' }: LogoProps) => {
  return (
    <>
      <a
        href=''
        className=''
      >
        {variant === 'default' && (
          <img
            src={logo}
            alt='ApeX logo'
            width={150}
            height={31}
          />
        )}
        {variant === 'icon' && (
          <img
            src={favicon}
            alt='ApeX logo'
            width={31}
            height={32}
          />
        )}
      </a>
    </>
  );
};

export default Logo;
