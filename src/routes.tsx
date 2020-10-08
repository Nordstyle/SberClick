import { lazy } from 'react';

const Basket = lazy(() => import('./pages/Basket/Basket'));
const Delivery = lazy(() => import('./pages/Basket/Basket'));
const Orders = lazy(() => import('./pages/Delivery/Delivery'));
const Products = lazy(() => import('./pages/Products/Products'));

export default [
  { path: '/products', name: 'Товары', Component: Products },
  { path: '/products/:category', name: 'Категория ', Component: Products },
  { path: '/orders', name: 'Заказы', Component: Orders },
  { path: '/delivery', name: 'Доставки', Component: Delivery },
  { path: '/basket', name: 'Корзина', Component: Basket },
];
