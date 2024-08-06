import PropTypes from "prop-types";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = ({ className, width, height, showThumbs, images }) => {
  return (
    <div className={className} width={width} height={height}>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={showThumbs}
      />
    </div>
  );
};

Gallery.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  showThumbs: PropTypes.bool,
  images: PropTypes.array,
};

export default Gallery;
