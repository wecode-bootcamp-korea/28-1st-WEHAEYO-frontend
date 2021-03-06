import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Restaurant.scss';

export default function Restaurant({ id, image, name, rating, reviews }) {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/restaurants/detail/${id}`);
  };

  return (
    <>
      <div className="restaurant" onClick={goToDetail}>
        <div className="listImg">
          <img alt="restaurantImage" src={image} />
        </div>
        <div className="listMain">
          <h2>{name}</h2>
          <div className="resInfo">
            <span className="iconStar">★ 별점: {rating}</span>
            <span className="reviewNumber">리뷰갯수: {reviews}</span>
          </div>
        </div>
      </div>
    </>
  );
}
