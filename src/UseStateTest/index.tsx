import React, { useState } from 'react';

function Component() {
  const [count, setCount] = useState(0);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  function onClick() {
    // setCount(count + 1);
    // setCount(count + 1);
    /**
     * 상탯값 변경함수는 비동기로 동작한다
     * react 에선 효율적인 렌더링을 위해 여러개의 상탯값 변경요청을 배치로 처리한다.
     * 위와 같이 돌리면 값은 상태의 count.value 를 보고서 +1 처리?
     */

    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    /**
     * 상탯값 변경 함수로 입력된 함수는 자신이 호출되기 직전의 상탯값을 매개변수로 받는다.
     * 첫번째 변경의 결과 값이 두번째 호출의 매개변수로 들어간다.
     */

     setCount1(count1 + 1);
     setCount2(count2 + 1);
     /**
      * 상탯값 변경 함수의 호출 순서대로 상탯값이 변경된다.
      */
  }
  console.log('render called');
  const result = count1 >= count2;
  console.log(result);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onClick}>add</button>
    </div>
  );
}

export default Component;