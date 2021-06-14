import React from 'react';
import './../style/style.css'
function Header(props) {
  const menu = ['Trang chủ','Sản phẩm','Giới thiệu'];
  const renderMenu = () => {
    let xhtml = menu.map(item => (
      <div>{item}</div>
    ))
    return xhtml;
  }
  return (
    <div className='header'>
       <div className = 'header_left'>
           MenuLeft
       </div>
       <div className = 'header_middle'>
          {renderMenu()}
       </div>
       <div className = 'header_right'>
          HeaderRIght
       </div>
    </div>
  );
}

export default Header;