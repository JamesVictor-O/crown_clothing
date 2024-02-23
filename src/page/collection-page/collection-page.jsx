import { useParams } from "react-router-dom";
import CollectionItem from "../../component/collectionItem/collectionItem";
import { selectedDatas } from "../../redux/shop/shopSlice";
import { useSelector } from "react-redux";
import "./collectionPage.scss"

const CollectionPage = () => {
  const { shopId } = useParams();
  const shopDatas = useSelector(selectedDatas);

  const collectionObject = shopDatas[shopId]
  const { title, items } = collectionObject;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
