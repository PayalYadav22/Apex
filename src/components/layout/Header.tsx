import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { Menu } from 'lucide-react';
import Logo from '@/components/layout/assets/Logo';
import SideBar from '@/components/core/SlideBar';
import { navMenu } from '@/constants';

/**
 * @copyright 2025 Payal Yadav
 * @license Apache-2.0
 */

const Header = () => {
  return (
    <header className='h-16 grid grid-cols-1 items-center md:h-20 lg:h-24'>
      <div className='container flex justify-between'>
        <Logo variant='icon' />
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant='outline'
              size='icon'
              className='lg:hidden'
            >
              <Menu />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <SideBar navMenu={navMenu} />
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
