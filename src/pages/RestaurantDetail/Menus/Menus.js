import SignatureMenu from './SignatureMenu';
import Menu from './Menu';
import './Menus.scss';

export default function Menus({ menus, signature }) {
  return (
    <div className="menus">
      <SignatureMenu signatures={signature} />
      {menus.map(menu => {
        return (
          <Menu
            key={menu.category_id}
            id={menu.category_id}
            category_name={menu.category_name}
            foods={menu.food}
          />
        );
      })}
    </div>
  );
}
