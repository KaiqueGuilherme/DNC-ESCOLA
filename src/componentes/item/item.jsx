import React from 'react';
import './item.css';

export default function ItemCard (props)  {
  const { title, subtitle, description, buttonLabel, img_item, subtitle2 } = props;
  return (
    <div className="card">
      <div className="card-content">
        <img className='tec' src={title}/>
        <h1 className="card-subtitle">{subtitle}</h1>
        <p className="card-description">{description}</p>
        <h2 className="card-subtitle2">{subtitle2}</h2>
        <img className='tec2' src={img_item}  />
        <button className="card-button">{buttonLabel}</button>
      </div>
    </div>
  );
};


