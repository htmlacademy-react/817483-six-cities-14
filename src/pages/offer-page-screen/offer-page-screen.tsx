import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import offer from '../../mock-data/offers';
import OfferCard from '../../components/offer-card/offer-card';
import Form from '../../components/review/review';
import comments from '../../mock-data/comments';

type OfferPageProp = {
  images: string[];
  price: number;
  rating: number;
  isPremium: boolean;
  title: string;
  type: string;
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
  previewImage: string;
}

function OfferPage({title, isPremium, images, price, rating, type, bedrooms, maxAdults, goods, host, previewImage}: OfferPageProp): JSX.Element {
  const ratingPercent: number = (rating / 6) * 100;

  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Your Place!</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((image) => <div key={image} className="offer__image-wrapper"><img className="offer__image" src={image} alt="Photo studio"/></div>)}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>{isPremium ? 'Premium' : ''}</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
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
                  <span style={{ width: `${ratingPercent}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((good) => <li key={good} className="offer__inside-item">{good}</li>)}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">
                    {host.name}
                  </span>
                  <span className="offer__user-status">
                    {host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <Form comment={comments.comment} date={comments.date} id={comments.id} rating={comments.rating} user={comments.user}/>
            </div>
          </div>
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {Array.from({length: 3}, (_: string, count: number) =>
                (<OfferCard key={count} price={offer.price} images={previewImage} rating={offer.rating} isPremium={offer.isPremium} title={offer.title} type={offer.type}/>
                ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
