const COUNT_OFFERS: number = 5;
const LOCATIONS_NAME: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
const LOCATIONS_OPTION: string[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

enum APP_ROUTE {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  Root = '/'
}

export {
  COUNT_OFFERS,
  LOCATIONS_NAME,
  LOCATIONS_OPTION,
  APP_ROUTE
};

