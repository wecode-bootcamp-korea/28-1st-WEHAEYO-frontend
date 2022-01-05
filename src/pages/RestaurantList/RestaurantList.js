import React, { useState, useEffect } from 'react';
import Restaurant from '../Restaurant/Restaurant';
import { useNavigate, useLocation } from 'react-router-dom';
import './RestaurantList.scss';
import Buttons from '../Restaurant/Buttons';
import SelectBar from '../Restaurant/Selectbar';

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  console.log('location', location);

  //데이터 로딩
  useEffect(() => {
    fetch(`{API}/user${location.search}`)
      .then(res => res.json())
      .then(result => setRestaurants(result));
  }, [location.search]);

  const updateKeywords = buttonKeyword => {
    //button에서 전달이 된 매개인자를 keyword 변수에 담는다.
    const keyword = 'buttonKeyword';
    //변수르 활용해서 쿼리스트링 형식으로 만든다.
    const queryString = `?keyword=${keyword}`;
    console.log(keyword);
    console.log(queryString);
    //쿼리스트링 url로 이동한다
    navigate(`/restaurants?keyword=${queryString}`);
  };

  const updateCategories = optionKeyword => {
    const sortedOption = 'optionKeyword';
    const sortedqueryString = `sortedOption=${sortedOption}`;
    console.log(sortedOption);
    console.log(sortedqueryString);

    navigate(`/restaurants?keyword=${queryString}&${sortedqueryString}`);
  };

  return (
    <div className="restaurantList">
      <div className="restaurantListMain">
        {restaurants.map(restaurant => {
          return (
            <>
              <SelectBar updateCategories={updateCategories} />
              <Buttons updateKeywords={updateKeywords} />
              <Restaurant
                key={restaurant.id}
                img={restaurant.img}
                name={restaurant.name}
                rates={restaurant.rates}
                reviews={restaurant.reviews}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
