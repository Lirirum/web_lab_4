  import React,{useEffect} from 'react';
import myImage from './img/comp.png';
import ProductList from './ProductList';
import './App.css';




const Body = ({ products, onProductSelect }) => {

  useEffect(() => {
     
    console.log(`Привіт`);

  
  
  }, []);

  return (
    <div className='container'>

        <div className='wrapper_container'>        
          <img id="main_wrapper" src={myImage}/>  
        </div>           
       
  

      <div className=''>
      <h2>Список товарів</h2>
      <div className='list_contaier'>
      <ProductList />
      </div>
    </div>

   






    </div>



  );
};

export default Body;