import { MenuItem } from '@/types';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronsUpDown } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

/**
 * @copyright 2025 Payal Yadav
 * @license Apache-2.0
 */

type SideBarProps = {
  navMenu: MenuItem[];
};

const SideBar = ({ navMenu }: SideBarProps) => {
  return (
    <div>
      <ul className='mb-3'>
        {navMenu.map(({ href, label, submenu }, index) => (
          <li key={index}>
            {submenu ? (
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button
                    asChild
                    variant='ghost'
                    className='w-full justify-between'
                  >
                    <a
                      href={href}
                      className='flex items-center'
                    >
                      {label}
                      <ChevronsUpDown />
                    </a>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className='ps-2'>
                  <ul className='border-l border-l-muted-foreground/20'>
                    {submenu.map(({ href, label }, subIndex) => (
                      <li key={subIndex}>
                        <Button
                          asChild
                          variant='ghost'
                          className='w-full justify-start text-muted-foreground hover:bg-transparent'
                        >
                          <a href={href}>{label}</a>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <Button
                asChild
                variant='ghost'
                className='w-full justify-start'
              >
                <a href={href}>{label}</a>
              </Button>
            )}
          </li>
        ))}
      </ul>
      <Separator className='bg-muted-foreground/20' />
      <div className='flex items-center gap-2 mt-4'>
        <Button
          variant='ghost'
          className='w-full'
        >
          Sign In
        </Button>
        <Button className='w-full'>Free Trial</Button>
      </div>
    </div>
  );
};

export default SideBar;
