import React from 'react';
import './img.css';

export default function Imgcard (props)  {
  const {img_const} = props;
  return (
    <div className="card">
      <img className='img' src={img_const}  width="100%"/>
    </div>
  );
};


