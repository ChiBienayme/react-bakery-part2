import React from "react";

class Card extends React.Component {
    constructor() {
        super();
        this.state={
            image: "",
        }
    }


    componentDidMount() {
        fetch(`https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/"${this.props.productName}".png`)
        .then((res) =>  res.blob())
        .then((url) => {
            this.url = URL.createObjectURL(url) 
            this.setState({ 
                image: url,
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        return(
            <div>
                <button class="image" 
                        onClick= {this.props.productName || this.props.price}>  
                    { this.state.image && <img src={this.props.image} id="img-change" alt="item"/>  }
                </button> 
            </div>

        )
    }
}
export default Card