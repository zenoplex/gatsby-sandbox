// @flow
import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

type Props = {
  className: string,
  menus: Array<*>
}

const Nav = ({ className = '--top', menus = [] }: Props) =>
  <header className={`l-header ${className}`}>
    <div className="l-header__modal" id="jsi-header-modal" />
    <div className="container l-header__content">
      <div className="grid-2_sm-1-middle">
        <div className="col-3">
          <div className={`l-header__inner ${className}`} id="jsi-header-inner" >
            <h1 className="l-header__logo">
              <Link to={prefixLink('/')}>
                icon
              </Link>
            </h1>
            <a className="l-header__button" id="jsi-header-nav-button" >aaa</a>
          </div>
        </div>
        <div className="col-9">
          <div className="l-header__nav" id="jsi-header-nav">
            <nav className="global-nav" role="navigation">
              <div className="global-nav__heading">
                <p>MENU</p>
                <a className="global-nav__close" id="jsi-header-nav-close">
                  bbb
                </a>
              </div>
              <ul className="global-nav__list">
                {menus.map(menu =>
                  <li className="global-nav__item jsc-nav-item">
                    <a href={menu.href}>
                      <span>{menu.label}</span>
                    </a>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>;

export default Nav;
