import css from './MobileMenu.module.css';
import { menu } from '../../utils/navData';

export const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <div className={`${css.modal} ${isOpen ? css.show : ''}`}>
      <button className={css.close} onClick={onClose}>
        ✕
      </button>
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
  );
};
