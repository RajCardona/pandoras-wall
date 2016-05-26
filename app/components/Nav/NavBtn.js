import React from 'react';
import style from './Nav.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router';

const css = classNames.bind(style);

function NavBtn({ label, checked, to }) {
  const menuLabel = `menu-item-${label}`;
  return (
    <li className={ css('menu-item') }>
      <input type="radio" id={ menuLabel } defaultChecked={ !!checked } name="nav-menu-btn" className={ css('menu-check') } />
      <label htmlFor={ menuLabel } className={ css('menu-label') }>
        <Link to={ to } className={ css('menu-label-btn') }>
          { label }
        </Link>
      </label>
    </li>
  );
}

export default NavBtn;
