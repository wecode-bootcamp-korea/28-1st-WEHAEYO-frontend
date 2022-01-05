import React from 'react';
import './Buttons.scss';

export default function Buttons({ updateKeywords }) {
  return (
    //클릭을 헀을 떄 all, korean, chinese, japanese 등의 키워드를 매개인자로 updateKeywords 함수에 보낸다.
    <div className="restaurantMenuTap">
      <button onClick={() => updateKeywords('all')} value="all">
        전체보기
      </button>
      <button onClick={() => updateKeywords('korean')} value="korean">
        한식
      </button>
      <button onClick={() => updateKeywords('chinese')} value="chinese">
        중식
      </button>
      <button onClick={() => updateKeywords('japanese')} value="japanese">
        일식
      </button>
    </div>
  );
}