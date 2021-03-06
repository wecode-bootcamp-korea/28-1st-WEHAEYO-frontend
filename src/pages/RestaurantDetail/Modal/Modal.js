import { useContext, useState, useEffect } from 'react';
import { ModalContext } from '../modalContext';
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';
import ModalLayout from './ModalLayout';

export default function Modal() {
  let { isModalOpen, modalContent } = useContext(ModalContext);
  const [menuAmount, setMenuAmount] = useState(1);
  const [optionPrice, setOptionPrice] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);

  useEffect(() => {
    isModalOpen === true
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
  }, [isModalOpen]);

  const handleMenuAmount = e => {
    setMenuAmount(e.target.value);
  };

  const increaseMenuAmount = plusMinus => {
    setMenuAmount(plusMinus + Number(menuAmount));
  };

  const handleMenuOptions = e => {
    const price = e.target.value;
    setSelectedOption(Number(e.target.id));
    setOptionPrice(price);
  };

  const calculateTotalPrice = price => {
    let menuPrice = Number(menuAmount) * price;
    if (optionPrice !== 0) menuPrice += Number(optionPrice);
    return menuPrice;
  };

  const isDisabled = Number(menuAmount) > 1;

  return (
    <div>
      {isModalOpen && modalContent && (
        <ModalLayout>
          <div className="modal_content">
            <div className="menu">
              <div className="image_container">
                <img
                  alt={modalContent.menu_title}
                  src={`images/RestaurantDetail/${modalContent.menu_image}`}
                />
              </div>
              <div className="title">{modalContent.menu_title}</div>
              <div className="price">
                <p>가격</p>
                <p>{modalContent.menu_price}원</p>
              </div>
            </div>
            <div className="radio_options">
              <ul>
                {modalContent.options.length > 0 &&
                  modalContent.options.map(option => {
                    return (
                      <li key={option.option_id}>
                        <label htmlFor={option.option_id}>
                          <div className="option">
                            <input
                              type="radio"
                              name="menu_option"
                              id={option.option_id}
                              value={option.price}
                              checked={option.option_id === selectedOption}
                              onChange={handleMenuOptions}
                            />
                            {option.content}
                          </div>
                          <div className="price">+ {option.price}원</div>
                        </label>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="amount">
              <p>수량</p>
              <div>
                <button
                  type="button"
                  disabled={!isDisabled}
                  onClick={() => increaseMenuAmount(-1)}
                >
                  <HiMinusSm />
                </button>
                <input
                  type="number"
                  min={1}
                  value={menuAmount}
                  onChange={handleMenuAmount}
                />
                <button type="button" onClick={() => increaseMenuAmount(1)}>
                  <HiPlusSm />
                </button>
              </div>
            </div>
            <div className="total_price">
              <p>총 주문금액</p>
              <p>{calculateTotalPrice(modalContent.menu_price)}원</p>
            </div>
          </div>
        </ModalLayout>
      )}
    </div>
  );
}
