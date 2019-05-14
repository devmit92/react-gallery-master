import React, {Component} from 'react';

class GalleryItem extends Component {
    constructor(props) {
        super(props);
    

    this.state = {
        clicked: true
        }
    }

    clickCell = (event) => {
        this.setState ({
            clicked: !this.state.clicked
        });
    }

    render() {
        let cellSpace = <img src={this.props.path} />;

        if (this.state.clicked == false) {
            cellSpace = <p>{this.props.description}</p>;
        }

        return(
            <div className="item">
                <div className="cell" onClick={this.clickCell}>
                    {cellSpace}
                </div>
                <p>{this.props.likes} people like this image!</p>
                <button data-id={this.props.id} onClick={this.props.clickLike}>Like this image</button>
            </div>
        )
    }
}


export default GalleryItem;