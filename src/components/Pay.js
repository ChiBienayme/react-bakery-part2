import React from 'react'
import Card from "./Card"

class Pay extends React.Component {
    constructor() {
        super();
        this.state={
          basket: [],
          total: 0,
          totalTVA: 0,
          totalEcoTax: 0,
          totalTTC: 0,
        }

        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(name, price) {
            console.log(`${name} ${price}`); 
    }

    // handleSelect(name, price) {
	// 	const total = this.state.price;
	// 	const totalEcoTax = this.state.price + 0.3;
	// 	const totalTVA = 0.2 * this.state.price;
        
	// 	return {
	// 		...prevState,
    //         Basket: {this.state.items}
    //         TotalTTC: ${total} + ${totalEcoTax} + ${totalTVA},
	// 	};
	// }
    
    render() {
        return (
            <div>
                <div>
                    <h1> Basket:{this.props.basket} </h1>
                    <p> Total: {this.props.total} </p>
                    <p> Total TVA: {this.props.totalTVA} </p>
                    <p> Total EcoTax: {this.props.totalEcoTax} </p>
                    <p> Total TTC: {this.props.totalTTC} </p>
                </div>
                
                {this.state.items.map((items) => {
                        return <div> 
                            <p>{items.productName}</p>
                            <p>{items.price}</p>
                            <p>{items.image}</p>
                        </div>
                        
                    })
                }

                {/* <Card 
                    productName={this.state.productName} 
                    price={this.state.price}
                    image={this.state.image}
                /> */}

            </div>
        )
    }
}

export default Pay