import React from 'react';
import {useParams} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import {useSearchParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'; 

const Product = () => {
    // 1. const {파라미터명} = useParams();
   const {productId} = useParams();
    // 2. const 변수명 = useParams().파라미터명;
   const param = useParams().productId;

   const location = useLocation();

   const[searchParams, setSearchParams] = useSearchParams();
   const search = searchParams.get('search');
   const q = searchParams.get('q');
   const navigate = useNavigate();
   
    return(
        <div>
            <h3>{productId}번 상품 페이지입니다.(Product.js)</h3>
            <h3>{param}번 상품 페이지입니다.(Product.js)</h3>

            <h3>useLocation</h3>

            <ul>
                <li>hash : {location.hash} </li>
                <li>pathname : {location.pathname} </li>
                <li>search : {location.search} </li>
                <li>state : {location.state} </li>
                <li>key : {location.key} </li>
            </ul>

            <h3>useSearchParams</h3>
            <ul>
                <li>search : {search}</li>
                <li>q : {q}</li>
            </ul>

            <h3>{productId}번 상품 페이지 입니다.</h3>
            <h3>negivate</h3>
            <ul>
                <li><button onClick={()=>navigate(-2)}>Go 2pages back</button></li>
                <li><button onClick={()=>navigate(-1)}>Go back</button></li>
                <li><button onClick={()=>navigate(1)}>Go foward</button></li>
                <li><button onClick={()=>navigate(2)}>Go 2pages foward</button></li>
                <li><button onClick={()=>navigate('/')}>Go Root</button></li>
                <li><button onClick={()=>navigate('/test')}>테스트 페이지</button></li>
            </ul>
        </div>

      
    );
}
export default Product;
