import React, { Component } from "react";
//COMPONENTS
import { ChevronLeftIcon, ChevronRightIcon } from "../Icons/ShoppingCartIcons";

class GalleryCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.state.index !== prevProps.index) {
      const { gallery } = this.props;
      const lastIndex = gallery.length - 1;

      if (this.state.index < 0) {
        this.setState({ index: lastIndex });
      }
      if (this.state.index > lastIndex) {
        this.setState({ index: 0 });
      }
    }
  }

  render() {
    const { gallery, name } = this.props;

    return (
      <div className="gallery-carousel-container">
        <div className="gallery-carousel">
          {gallery.map((img, imgIndex) => {
            let position = "nextSlide";

            if (imgIndex === this.state.index) {
              position = "currentSlide";
            }
            if (
              imgIndex === this.state.index - 1 ||
              (this.state.index === 0 && imgIndex === gallery.length - 1 && gallery.length !== 1)
            ) {
              position = "previousSlide";
            }

            return (
              <div key={imgIndex} className={`img-container ${position}`}>
                <img height="288" src={img} alt={`${name} gallery img`} />
              </div>
            );
          })}
        </div>

        {gallery.length > 1 && (
          <div className="gallery-carousel-controls">
            <button onClick={() => this.setState({ index: this.state.index - 1 })}>
              <ChevronLeftIcon />
            </button>
            <button onClick={() => this.setState({ index: this.state.index + 1 })}>
              <ChevronRightIcon />
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default GalleryCarousel;
