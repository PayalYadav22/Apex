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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

/**
 * @copyright 2025 Payal Yadav
 * @license Apache-2.0
 */

const Header = () => {
  return (
    <header className='h-16 grid grid-cols-1 items-center md:h-20 lg:h-24 lg:grid lg:grid-cols-[1fr,3fr,1fr]'>
      <div className='container flex justify-between '>
        <Logo variant='icon' />
        <NavigationMenu className='max-lg:hidden mx-auto'>
          <NavigationMenuList>
            {navMenu.map(({ href, label, submenu }, index) => (
              <NavigationMenuItem key={index}>
                {submenu ? (
                  <>
                    <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className='grid grid-cols-2 gap-2 p-2 w-[640px]'>
                        {submenu.map(({ href, icon, label, desc }, index) => (
                          <li key={index}>
                            <NavigationMenuLink asChild>
                              <a
                                href={href}
                                className='flex gap-3 select-none p-2 rounded-sm transition-colors hover:bg-foreground/5'
                              >
                                <div className='w-10 h-10 bg-foreground/10 rounded-sm shadow-sm border-t  border-foreground/5 flex-shrink-0 grid place-items-center'>
                                  {icon}
                                </div>
                                <div>
                                  <div className='text-[13px] leading-normal mb-1'>
                                    {label}
                                  </div>
                                  <p className='text-[13px] leading-normal text-muted-foreground'>
                                    {desc}
                                  </p>
                                </div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    href={href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {label}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className='flex items-center gap-2 justify-end max-lg:hidden'>
          <Button variant='ghost'>Sign In</Button>
          <Button>Free Trial</Button>
        </div>
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
          <PopoverContent
            align='end'
            className='bg-background/50 backdrop-blur-3xl border-foreground/5 border-x-0 border-b-0 rounded-lg overflow-hidden'
          >
            <SideBar navMenu={navMenu} />
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
