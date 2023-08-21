import React from "react"
import { ReactDOM } from "react"
import SHOP_DATA from "./shop.data"
import CollectionPreview from "../../component/preview-collection/collectionPreview"

class ShopPage extends React.Component{ 
    constructor(props){
        super(props)
        this.state = {
             collection:SHOP_DATA         
         }
    }
    render() {
        let {collection} = this.state
        return (
            <div>
                {
                    collection.map(({id,...otherProps}) => (
                        <CollectionPreview key={id} {...otherProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage