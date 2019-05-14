import React, {Component} from 'react';
import GalleryItem from '../Gallery Item/GalleryItem';

class GalleryList extends Component {

    render() {
        const galleryArray = this.props.galleryData.map((what,where) => {
            console.log(what);

            return (
                <GalleryItem
                    key={where}
                    id={what.id}
                    path={what.path}
                    description={what.description}
                    likes={what.likes}
                    clickLike={this.props.clickLike}
                />
            );
        });

        return(
            <div>
                {galleryArray}
            </div>
        )
    }
}

export default GalleryList;