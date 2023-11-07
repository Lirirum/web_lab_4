    import React from 'react';
    import ProductCard from './ProductCard';
    import './App.css';
    import './styles/product.css';
    const images = require.context('./img/goods', true);

 

    const products = [
    {
        id:1,
        name: 'Комп`ютер Artline Gaming (X43v31) AMD Ryzen 5 3600 ',
        price: 25000,
        description: 'AMD Ryzen 5 3600 (3.6 - 4.2 ГГц) / RAM 16 ГБ / HDD 1 ТБ + SSD 480 ГБ / nVidia GeForce RTX 3050, 8 ГБ / без ОД / LAN / без ОС',
        imageUrl: images('./1.webp'),
    },
    {
        id:2,
        name: 'Комп`ютер Artline Gaming X63 AMD Ryzen 5 5600',
        price: 31000,
        description: 'AMD Ryzen 5 5600 (3.5 - 4.4 ГГц) / RAM 16 ГБ / SSD 1 ТБ / nVidia GeForce RTX 3060 Ti, 8 ГБ / без ОД / LAN / без ОС',
        imageUrl:  images('./2.webp'),
    },
    {
        id:3,
        name: 'Комп`ютер COBRA Advanced (I11F.8.H1S2.15T.13356) ',
        price: 33000,
        description: '',
        imageUrl:  images('./3.webp'),
    },
    {
        id:4,
        name: 'Комп`ютер COBRA Advanced (I11F.8.H1S2.15T.13356) ',
        price: 40000,
        description: '',
        imageUrl:  images('./4.webp'),
    },
    {
        id:5,
        name: 'Комп`ютер COBRA Advanced (I11F.8.H1S2.15T.13356) ',
        price: 40000,
        description: '',
        imageUrl:  images('./4.webp'),
    },
    

    ];


    
    const ProductList = () => {
    return (
        <div className='product-grid'>       
        {products.map((product, index) => (
            <ProductCard key={index} product={product} />
        ))}          
        </div>
    );
    };

    export default ProductList;