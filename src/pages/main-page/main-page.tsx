import ListOffers from '../../components/offers/list-offers/list-offers';
import Header from '../../components/header/header';
import Locations from '../../components/locations/locations-container';
import { Helmet } from 'react-helmet-async';
import { OffersType } from '../../types/offers';
import Map from '../../components/map/map';
import { CityMapData } from '../../const';

type MainScreenProps = {
  cities: string[];
  offers: OffersType[];
}

function MainScreen({ cities, offers}: MainScreenProps): JSX.Element {
  const activeCity = CityMapData.Amsterdam;

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities. Choose your place!</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations cities={cities}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {activeCity.name}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <ListOffers offers={offers} />
            </section>
            <div className="cities__right-section">
              <Map offers={offers} block='cities' location={activeCity.location} specialOfferId={null}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
