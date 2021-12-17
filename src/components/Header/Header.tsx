import { NavLink } from 'react-router-dom';

import { ROUTE } from 'configs';
import { Typography } from 'components/Typography';

import './Header.scss';

export function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <Typography color="white" weight="weight_500" size="size_16">NEWS LOGO</Typography>
      </div>

      <div className="header__menu">
        <NavLink className="header__menu-link" activeClassName="header__menu-link_active" to={ROUTE.NEWS}>
          <Typography color="white">News</Typography>
        </NavLink>
        <NavLink className="header__menu-link" activeClassName="header__menu-link_active" to={ROUTE.USERS}>
          <Typography color="white">Users</Typography>
        </NavLink>
      </div>
    </div>
  );
}
