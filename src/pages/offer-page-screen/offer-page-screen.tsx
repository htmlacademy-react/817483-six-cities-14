import ImageOffer from '../../components/offers/image-offer/image-offer';
import InsideOffers from '../../components/offers/inside-offer/inside-offer';
import Header from '../../components/header/header';
import ReviewForm from '../../components/review/review';
import { useParams } from 'react-router-dom';
import { offersData } from '../../mocks/offers';
import ListOffers from '../../components/offers/list-offers/list-offers';
import { OffersType } from '../../types/offers';
import { Navigate } from 'react-router-dom';
import Map from '../../components/map/map';

type OffersProps = {
  offersNearby: OffersType[];
}

function OfferScreen({offersNearby}: OffersProps): JSX.Element {

  const { id } = useParams();
  let dataIndex = 0;

  if (id) {
    const parsedIndex = parseInt(id, 10);

    if (parsedIndex < offersData.length) {
      dataIndex = parsedIndex;
    } else {
      return <Navigate to="not-found-screen" />;
    }
  }
  const data = offersData[dataIndex];

  const ratingPercentage: number = (data.rating / 6) * 100;

  return (
    <div className='page'>
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {data.images.map((item) => <ImageOffer src={item} key={id} />)}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>{data.isPremium ? 'Premium' : ''}</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {data.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${ratingPercentage}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{data.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {data.type.charAt(0).toUpperCase() + data.type.slice(1)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {data.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {data.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{data.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {data.goods.map((item) => <InsideOffers insideOffer={item} key={id}/>)}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={data.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    {data.host.name}
                  </span>
                  <span className="offer__user-status">
                    {data.host.isPro}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {data.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                <ul className="reviews__list">
                  <li className="reviews__item">
                    <div className="reviews__user user">
                      <div className="reviews__avatar-wrapper user__avatar-wrapper">
                        <img
                          className="reviews__avatar user__avatar"
                          src="img/avatar-max.jpg"
                          width="54" height="54" alt="Reviews avatar"
                        />
                      </div>
                      <span className="reviews__user-name">
                          Max
                      </span>
                    </div>
                    <div className="reviews__info">
                      <div className="reviews__rating rating">
                        <div className="reviews__stars rating__stars">
                          <span style={{ width: `${ratingPercentage}%` }}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <p className="reviews__text">
                        A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                      </p>
                      <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
                    </div>
                  </li>
                </ul>
                <ReviewForm />
              </section>
            </div>
          </div>
          <Map block={'offer'} location={data.location} offers={offersNearby} specialOfferId={null} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighborhood</h2>
            <div className="near-places__list places__list">
              <ListOffers offers={offersNearby} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;

