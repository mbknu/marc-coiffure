import React from 'react'
import SHOP from "../../constants/SHOP";
import ShopItem from './ShopItem';

const ShopList = () => {
    return (
        <div>
            <ShopItem products={SHOP} />
        </div>
    )
}

export default ShopList
