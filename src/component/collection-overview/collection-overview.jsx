import { ReactDOM } from "react";
import { useSelector } from "react-redux";
import { selectedDatas } from "../../redux/shop/shopSlice";
import CollectionPreview from "../../component/preview-collection/collectionPreview";
import "./collection-overview.scss";
const CollectionOverview = () => {
    
  const shopDatas = useSelector(selectedDatas);

  const arrayOfShopDatas =Object.values(shopDatas)
  return (
    <div className="collection-overview">
      {
        arrayOfShopDatas.map(({id,...otherProps}) => (
            <CollectionPreview key={id} {...otherProps} />
        ))
      }
    </div>
  );
};

export default CollectionOverview;
