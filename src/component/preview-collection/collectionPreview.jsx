import CollectionItem from "../collectionItem/collectionItem";
import "./collectionPreview.scss" 
const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((items, idx) => idx < 4).map(({id, ...others}) => (
                        <CollectionItem key={id} {...others} />
                    ))
                 }
            </div>
         </div>
     )
}
export default CollectionPreview;