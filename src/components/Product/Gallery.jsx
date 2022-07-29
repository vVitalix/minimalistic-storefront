import React, { Component } from "react";
import { connect } from "react-redux";
//REDUCERS
import { setMainImg } from "../../features/product/productSlice";
//STYLES
import StyledGallery from "../styles/Gallery.styled";

class Gallery extends Component {
    render() {
        const { name, gallery, mainImgIndex } = this.props;

        return (
            <StyledGallery className="gallery">
                <div className="small-imgs-container">
                    {gallery &&
                        gallery.map((img, index) => (
                            <div
                                key={index}
                                onClick={() => this.props.setMainImg({ index })}
                            >
                                <img
                                    src={img}
                                    alt={`${name} small img ${index + 1}`}
                                />
                            </div>
                        ))}
                </div>
                <div className="main-img-container">
                    <img
                        src={gallery && gallery[mainImgIndex]}
                        alt={`${name} main img`}
                    />
                </div>
            </StyledGallery>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = () => {
    return {
        setMainImg,
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(Gallery);
