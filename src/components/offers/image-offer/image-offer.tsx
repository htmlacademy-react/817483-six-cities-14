type ImageOfferProps = {
  src: string;
}

function ImageOffer({src}: ImageOfferProps): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={src} alt="Photo studio" />
    </div>
  );
}

export default ImageOffer;
