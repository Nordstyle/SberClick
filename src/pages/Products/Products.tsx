import React from 'react';
import { Heading } from '../../components/shared/Typography/Typography';
import { Breadcrumb, Breadcrumbs } from '../../components/shared/Breadcrumbs/Breadcrumbs';
import { Layout, LayoutContent, LayoutSidebar } from '../../components/shared/Layout/Layout.styled';
import { LayoutSidebarItem } from '../../components/shared/Layout/LayoutSidebarItem';
import { LayoutCategoryItem } from '../../components/shared/Layout/LayoutCategoryItem';

import CartImg from '../../assets/cart.png';
import CategoryImg from '../../assets/category_card.png';

interface ProductsProps {
  crumbs: Breadcrumb[];
}

export const Products = (props: ProductsProps) => {
  const { crumbs } = props;

  return (
    <section>
      <Breadcrumbs crumbs={crumbs} />
      <Heading>Услуги</Heading>
      <Layout>
        <LayoutSidebar>
          <LayoutSidebarItem
            title="Автопополнение _plus Автопополнение _plus Автопополнение _plus"
            to="/products/category1/"
            src={CartImg}
          />
          <LayoutSidebarItem title="Срочный заказ" to="/products/category2/" src={CartImg} />
          <LayoutSidebarItem title="Вывоз неиспользованного оборудования" to="/products/category3/" src={CartImg} />
        </LayoutSidebar>
        <LayoutContent>
          <LayoutCategoryItem
            title="Категория 1 Категория 1 Категория 1 Категория 1"
            subTitle="Тест"
            to="/products/category1/"
            src={CategoryImg}
            icon={CartImg}
          />
          <LayoutCategoryItem title="Категория 2" to="/products/category2/" src={CategoryImg} />
          <LayoutCategoryItem title="Категория 3" subTitle="Тест" to="/products/category3/" src={CategoryImg} />
        </LayoutContent>
      </Layout>
    </section>
  );
};

export default Products;
