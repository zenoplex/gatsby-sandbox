// @flow
import React from 'react';

type Props = {
  avatar: string,
  logo: string,
  company: string,
  title: string,
  name: string,
  description: string,
}

const KeynoteProfile = ({ avatar, logo, company, title, name, description }: Props) =>
  <div className="p-keynote">
    <figure className="p-keynote__thumb">
      <img src={avatar} alt={name} />
    </figure>
    <div className="p-keynote__logo">
      <img src={logo} alt={company} />
    </div>
    <div className="p-keynote__person">
      <p className="p-keynote__position">
        <span>{company} / {title}</span>
      </p>
      <div className="p-keynote__name">{name}</div>
    </div>
    <div className="p-keynote__profile">
      <p className="p-keynote__heading">Profile</p>
      <p className="p-keynote__description">{description}</p>
    </div>
  </div>;

export default KeynoteProfile;
