import React from 'react';
import Basket from './pages/Basket/Basket';
import Delivery from './pages/Delivery/Delivery';
import Orders from './pages/Orders/Orders';
import Products from './pages/Products/Products';

export default [
  { path: '/', name: 'Товары', component: <Products /> },
  { path: '/products', name: 'Товары', component: <Products /> },
  { path: '/orders', name: 'Заказы', component: <Orders /> },
  { path: '/delivery', name: 'Доставки', component: <Delivery /> },
  { path: '/basket', name: 'Корзина', component: <Basket /> },
];
