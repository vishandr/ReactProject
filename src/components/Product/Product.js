import React from "react";
import './Product.css'
import { useParams } from "react-router-dom";
import { CartContext } from '../../contexts/cart-context';

class Product extends React.Component{
    constructor(){
        super();
        this.state = {
            img: '',
            categoryID: 0
        }
    }

    setMainImg = (item) => () => {
        this.setState({img: item}); 
    }

    render(){
        const { currentCurrencySymbol, 
                currentCurrencyLabel,
                addToCart,
                cartItemsAttributes,
                getAttributes,
            } = this.context;

        const {productId} = this.props.params;
        
        const item = this.props.items.find((el) => 
        el.id.includes(productId)
        );

        const addProductToCart = () => {
            addToCart(item);
        };

        function createMarkup() { 
            return {__html: item.description}; };

        // пробуем получить значение аттрибута по клику + поменять цвет 
        // const showAttributes = (event) => {
        //     console.log({
        //         "attribute name": event.target.parentNode.attributes.value.value,
        //         "attribute value": event.target.attributes[0].nodeValue,
        //     });
        // };

        // const addAttr = addAttributesToCart(item.attributes)
        const changeAttrID = (id) => {
            this.setState({ categoryID: id }); 
        };

        
        // }

        return(
            <div>
                <div className="gallery">
                    {item.gallery.map((image) =>
                    <img key={image} src={image} className="pdp_img" alt={item.id} onClick={this.setMainImg(image)}/>
                    )}
                </div>
                <div className="main-img-box">
                    <img src={(this.state.img === '' ) ? item.gallery[0] : this.state.img} alt="" className="main_img"/>
                </div>
                <div className="pdp-description-box">
                    <p className="item-brand">{item.brand}</p>
                    <p className="item-name">{item.name}</p>


                    {/* workable as a list */}
                    {/* {item.attributes.map((el) => 
                        <ul key={el.id} value={el.id}>
                        {el.name.toUpperCase()}:
                        {el.items.map((attr, i) => 
                        <li key={attr.id}
                        value={attr.value} 
                        onClick={() => changeAttrID(i)}
                        className={this.state.categoryID === i ? 'active' : ''}
                        > 
                        {attr.value} </li>)}
                        </ul>)} */}

    {/*                 

                    {item.attributes.map(el => 
                    <div key={el.id}>{el.id}</div>)
                    } */}
    {/*             
                    {item.attributes[0].items.map(el => {
                        <label for={el.value}> {el.value} 
                            <input type='radio' id={el.value}/> 
                        </label>
                    })
                    } */}
                    

                    {/* выводит атрибуты
                    {item.attributes[0].items.map(el => 
                    <div>{el.value}</div>)
                    } */}
                
                {/* выводит инпуты без подписей */}
                    {/* {item.attributes[0].items.map(el =>
                            <input type='radio'/> 
                    )
                    } */}



                    {/* {item.attributes[0].items.map(el => {
                        <label>{el.id}
                            <input type='radio'/>
                        </label>
                    })
                    } */}



                    {/* {item.attributes.map(el => el.items.map(attr => 
                    <div key={attr.id}>{attr.value}</div>))
                    } */}

                        
                        {/* {item.attributes.map((el) => 
                        <div className="pdp-attributes-box" key={el.id} value={el.id}>
                            <p className="attribute-name">{el.name.toUpperCase()}:</p>
                            <div className="pdp-attributes-values">
                                
                                {el.items.map((attr) => 
                                <div key={attr.id} value={attr.value} className="size">
                                    {attr.value}
                                    </div>)}
                            </div>
                                </div>
                        )} */}

    <div className="pdp-attributes-box">
        {item.attributes.map((el) => 
        <div key={el.id} value={el.id}>
            <p className="attribute-name">{el.name.toUpperCase()}:</p>
            <div className="pdp-attributes-values">
                {el.items.map((attr) => 
                <div key={attr.id} value={attr.value} className="size" style={{backgroundColor: attr.value}}>
                {(el.name === 'Color') ? null: attr.value }
                </div>)}
            </div>
        </div>)}
    </div>      
                    <p className="attribute-name">PRICE:</p>
                    <div className="price">{currentCurrencySymbol}
                    {item.prices.find((item) =>
                        item.currency.label === currentCurrencyLabel).amount}
                    </div>
                    <button className="button_add_to_cart"
                            onClick={addProductToCart}>ADD TO CART</button>
                    <div dangerouslySetInnerHTML={createMarkup()} />
                </div>
            </div>
            )
    }
}

Product.contextType = CartContext;

export default (props) => (
    <Product 
    {...props}
    params={useParams()}
/>);