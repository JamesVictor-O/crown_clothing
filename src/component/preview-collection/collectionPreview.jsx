import CollectionItem from "../collectionItem/collectionItem";
import "./collectionPreview.scss" 
const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((items, idx) => idx < 4).map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                 }
            </div>
         </div>
     )
}
export default CollectionPreview;