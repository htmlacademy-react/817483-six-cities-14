import CardOffer from '../offer-card/offer-card';
import { OffersType } from '../../../types/offers';

type ListOffersProps = {
  offers: OffersType[];
}

function ListOffers({ offers }: ListOffersProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CardOffer
          key={offer.id}
          src={offer.previewImage}
          price={offer.price}
          title={offer.title}
          id={offer.id}
          block={'cities'}
        />
      )
      )}
    </div>
  );
}

export default ListOffers;
