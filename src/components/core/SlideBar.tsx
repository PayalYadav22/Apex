import { MenuItem } from '@/types';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronsUpDown } from 'lucide-react';

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
      <ul>
        {navMenu.map(({ href, label, submenu }, index) => (
          <li key={href || index}>
            {' '}
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
                <CollapsibleContent>
                  <ul>
                    {submenu.map(({ href, label }, subIndex) => (
                      <li key={subIndex}>
                        <Button
                          asChild
                          variant='ghost'
                          className='pl-6'
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
    </div>
  );
};

export default SideBar;
