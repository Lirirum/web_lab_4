import React, { useState, useEffect  } from 'react';
import './App'; 
const PopupMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  

    const handleDocumentClick = (event) => {
      if (isOpen && !event.target.closest('.dropdown-menu')) {
        setIsOpen(false);
      }
    };
  
    useEffect(() => {
     
      document.addEventListener('click', handleDocumentClick);

      return () => {
        document.removeEventListener('click', handleDocumentClick);
      };
    }, [isOpen]);
  

  return (
    <div className="dropdown-menu">
      <button  id="catalog_btn" onClick={toggleMenu}>Каталог товарів</button>
      {isOpen && (
        <div className="dropdown-content">
          <ul>
            <li >    <a href="ProductDetail">ПК для геймінгу</a> </li>
            <li href="">ПК для навчнання</li>
            <li href="">Комплектующі для ПК</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PopupMenu;