import React from "react";

class Card extends React.Component {
    constructor() {
        super();
        this.state={
            image: require("../public/images/item.png"),
        }

        
        
    }
    componentDidMount() {
        fetch(`https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/${productName}.png`)
          .then((blob) => blob.json())
          .then((createObjectURL) => {
            console.log(createObjectURL);
            this.setState({ 
                cake: createObjectURL[0].cake,
                coffee: createObjectURL[0].coffee,
                croissant: createObjectURL[0].croissant,
            });
          });
      }

    render() {
        return(
            <div>
                <button class="image" onClick= {this.props.productName || this.props.price}>  
                    <img src={this.pros.image} id="img-change" alt="item"/>  
                </button> 
            </div>
        )
    }
}
export default Card