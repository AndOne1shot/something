import React from 'react';
import {Link} from 'react-router-dom';

const Main = (props) => {
    return(
        <div>
            <h3>안녕하세요. 메인 페이지 입니다.(Main.js)</h3>
            <ul>
                <Link to="/product/1"><li>1번 상품</li></Link>
                <Link to="/product/2"><li>2번 상품</li></Link>
                <Link to="/sdsdssds"><li>3번 상품</li></Link>
            </ul>
        </div>
    );
}
export default Main;