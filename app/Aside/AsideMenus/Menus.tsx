
import styles from '../SideMenu.module.scss';
import MainMenu from './MainMenu';
import SubMenu from './SubMenu';

function Menus() {
   return (
      <div className={styles.sidebar__menus}>
         <MainMenu />
         <SubMenu />
      </div>
   )
}
export default Menus;