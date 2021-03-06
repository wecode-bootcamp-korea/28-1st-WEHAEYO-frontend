import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../modalContext';
import { MdKeyboardArrowDown } from 'react-icons/md';

export default function Menu({ category_name, foods, id }) {
  let { openModal } = useContext(ModalContext);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapsingMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const isFirstCategory = id === 2;
    if (isFirstCategory) {
      setIsCollapsed(isFirstCategory);
    }
  }, [id]);

  return (
    <div className="menu">
      <div className="category" onClick={toggleCollapsingMenu}>
        <span>{category_name}</span>
        <MdKeyboardArrowDown className={isCollapsed ? 'collapsed' : ''} />
      </div>
      <div className={`content ${isCollapsed ? 'collapsed' : ''}`}>
        <ul>
          {foods.map(food => {
            return (
              <li key={food.id} onClick={() => openModal(food.id)}>
                <div className="title">
                  <h4>{food.name}</h4>
                  <p>{food.price}원</p>
                </div>
                <div className="photo">
                  <img alt={food.name} src={`${food.image}`} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
