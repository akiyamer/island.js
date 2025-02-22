import { DefaultTheme } from 'shared/types';
import Down from '../../assets/down.svg';
import Right from '../../assets/right.svg';
import { Link } from '../Link/index';

export interface NavMenuGroupItem {
  text?: string | React.ReactElement;
  items: DefaultTheme.NavItemWithLink[];
  activeIndex?: number;
}

export function NavMenuGroup(item: NavMenuGroupItem) {
  const { activeIndex } = item;

  return (
    <div relative="" className="nav-menu-group">
      <button
        flex="center"
        nav-h="mobile sm:desktop"
        font="medium"
        text="sm text-1 hover:text-2"
        transition="color duration-200"
        className="nav-menu-group-button"
      >
        <span mr="1" text="sm" font="medium">
          {item.text}
        </span>
        <Down />
      </button>
      <div
        absolute=""
        pos="top-13 right-0"
        m="x-0.8"
        opacity="0"
        transition="opacity duration-300"
        className="nav-menu-group-content invisible"
      >
        <div
          p="3"
          w="100%"
          h="100%"
          className="min-w-128px max-h-100vh"
          border-1=""
          rounded="xl"
          bg="bg-default"
          style={{
            boxShadow: 'var(--island-shadow-3)',
            marginRight: '-1.5rem'
          }}
        >
          {item.items.map((child, index) => {
            if (index === activeIndex) {
              return (
                <div key={child.link} rounded="md" p="y-1.6 l-3">
                  <span mr="1" text="brand">
                    {child.text}
                  </span>
                </div>
              );
            } else {
              return (
                <div key={child.link} font="medium">
                  <Link href={child.link}>
                    <div rounded="md" hover="bg-bg-mute" p="y-1.6 l-3">
                      <div flex="">
                        <span mr="1">{child.text}</span>
                        <Right w="11px" h="11px" text="text-3" m="t-1 r-1" />
                      </div>
                    </div>
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
