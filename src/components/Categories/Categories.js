import React from "react";
import './categories.css'
import goods from '../Goods/goods.json'
import Items from "./Items";

class Categories extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items: [
                {
                    "id" : 1,
                    "image" : "https://cdn.icon-icons.com/icons2/1166/PNG/512/1488897578-apple_81769.png",
                    "title" : "Appollo running shirt-1",
                    "price" : 50
                },
            
                {
                    "id" : 2,
                    "image" : "https://cdn.icon-icons.com/icons2/1286/PNG/512/89_85216.png",
                    "title" : "Appollo running shirt-2",
                    "price" : 60
                },
            
                {
                    "id" : 3,
                    "image" : "https://cdn.icon-icons.com/icons2/3582/PNG/512/value_jewellery_gem_finance_diamond_icon_225897.png",
                    "title" : "Appollo running shirt-3",
                    "price" : 70
                },
            
                {
                    "id" : 4,
                    "image" : "https://cdn.icon-icons.com/icons2/3582/PNG/512/money_lottery_gambling_card_car_icon_225878.png",
                    "title" : "Appollo running shirt-4",
                    "price" : 80
                },
            
                {
                    "id" : 5,
                    "image" : "https://cdn.icon-icons.com/icons2/3582/PNG/512/nightclub_drink_cocktail_beverage_alcohol_icon_225866.png",
                    "title" : "Appollo running shirt-5",
                    "price" : 70
                },
            
                {
                    "id" : 6,
                    "image" : "https://cdn.icon-icons.com/icons2/3582/PNG/512/value_jewellery_gem_finance_diamond_icon_225897.png",
                    "title" : "Appollo running shirt-6",
                    "price" : 80
                }
            ]
        }
    }

    render(){
        return(
            <>
                <h2> Category name </h2>
                <Items items={this.state.items} />
            </>
        );
    }
}

export default Categories;