
import React from 'react';
import Header from './Header';
import Main from './Main';
import Product from './Product';
import NotFound from './NotFound';
import Footer from './Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Test from './Test';

function App() {
  return (
  <div className='App'>
    <BrowserRouter>
      <Header /><hr></hr>
      <Routes>
        {/* 슬래시(/)로 요청하면 Main.js 컴포넌트를 실행 */}
        <Route path='/' element={<Main />}></Route>
        {/* /product/1 or 2 로 요청하면 Product.js 컴포넌트를 실행 */}
        <Route path='/product/:productId' element={<Product />}></Route>
        <Route path='/test' element={<Test />}/>

        {/* 일치하는 라우트가 없는 경우 NotFound.js 컴포넌트를 실행 */}
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer /><hr></hr>
    </BrowserRouter>

  </div>
  );
}

export default App;
