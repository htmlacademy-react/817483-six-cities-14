import { Link } from 'react-router-dom';
import { APP_ROUTE } from '../../const';

function Logo(): JSX.Element {
  return (
    <Link className='header__logo-link header__logo-link--active' to={APP_ROUTE.Root}>
      <img className='header__logo' src='img/logo.svg' alt='6 cities logo' width='81' height='41' />
    </Link>
  );
}

export default Logo;
