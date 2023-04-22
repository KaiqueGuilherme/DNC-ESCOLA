import React from 'react';
import './results.css';
import { Container } from '@mui/material';

export default function Results(props) {
  const { Description_result, title_result, Number_result ,Description_result2, Number_result2 } = props;

  return (
    <div className="results"> {/* adicione uma classe "results" para o contêiner pai */}
    
      <div className="result_item tWO">
        <h1 className='title_number'>{Number_result}</h1>
        <p className='description_result2'>{Description_result}</p>
      </div>
    
    </div>
  );
}
