import React from "react";
import { ReactDOM } from "react";
import SHOP_DATA from "./shop.data";
import { Outlet } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import CollectionOverview from "../../component/collection-overview/collection-overview";
import CollectionPage from "../collection-page/collection-page";

const ShopPage = () => {
  const { shopId } = useParams();
  if (shopId) {
    return (
      <div className="shopPage">
        <CollectionPage />
      </div>
    );
  } else {
    return <CollectionOverview />;
  }
};

export default ShopPage;
