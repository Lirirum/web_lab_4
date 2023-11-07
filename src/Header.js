import React from 'react';
import PopupMenu from './PopupMenu';
import './App.css';

const Header = ({ isLoggedIn, onLoginClick, onLogoutClick }) => {
  return (
    <header>
    <div class ='top-box'>
      
      <ul className= "nav">
        <li href="" >Головна</li>
        <li href="" >Про нас</li>
        <li href="" >Контакти</li>
      

        
      {isLoggedIn ? (
        <li onClick={onLogoutClick}>Вийти</li>
      ) : (
        <li onClick={onLoginClick}>Увійти</li>
      )}

     
     </ul>

        
    </div >


    <div class='header__bottom' >
    <div className='container header__bottom-box'>
    <div className='header__bottom-left'>

    <div class='header_menu'>





    <PopupMenu/>
    
    <form class="header__search"  method="GET" >
                    <input type="text" placeholder="Шукати" class="search-input" name="search" />

                    <div class="header__search__loader" >
                        <span class=""></span>
                    </div>


           

                    <button class="btn_search" >Знайти</button>
                 
    </form>

   


    </div>
    </div>
    </div>
    </div>  
    
    </header>
    
  );
};

export default Header;