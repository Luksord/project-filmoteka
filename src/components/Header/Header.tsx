import { useState } from 'react';
import css from './Header.module.css';
import { ReactComponent as Menu } from '../../assets/icons/icon-menu.svg';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { menu } from '../../utils/navData';

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className={css.section}>
      <div className={css.navContainer}>
        <ul className={css.navList}>
          {menu.map(({ navName, navLink }) => (
            <li key={navName}>
              <a href={navLink} className={css.navItem}>
                {navName}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Menu className={css.menuIcon} onClick={() => setMenuOpen(true)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
};
