import Basket from './pages/Basket/Basket';
import Delivery from './pages/Delivery/Delivery';
import Orders from './pages/Orders/Orders';
import Products from './pages/Products/Products';

export default [
  { path: '/products', name: 'Товары', Component: Products },
  { path: '/products/:category', name: 'Категория ', Component: Products },
  { path: '/orders', name: 'Заказы', Component: Orders },
  { path: '/delivery', name: 'Доставки', Component: Delivery },
  { path: '/basket', name: 'Корзина', Component: Basket },
];
