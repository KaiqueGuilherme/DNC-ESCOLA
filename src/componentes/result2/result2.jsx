import React from 'react';
import { Container } from '@mui/material';

export default function Results2(props) {
  const { Description_result, Number_result } = props;

  return (
    <div className="results"> {/* adicione uma classe "results" para o contêiner pai */}
    
      <div className="result_item tWO">
        <h1 className='title_number'>{Number_result}</h1>
        <p className='description_result2'>{Description_result}</p>
      </div>
    
    </div>
  );
}
