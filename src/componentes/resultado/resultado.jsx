import React from 'react';
import './results.css';
import { Container } from '@mui/material';

export default function Results(props) {
  const { Description_result, title_result, Number_result ,Description_result2, Number_result2 } = props;

  return (
  <section className='container_section_results'>
    <div className="results">
      <Container sx={{display: 'flex', justifyContent: 'center'}}>
        <div className="result_item">
            <p className='title_result' style={{width:'80%', textAlign: 'start'}}>{title_result}</p>
        </div>
        <div className="result_item tWO">
            <h1 className='title_number'>{Number_result}</h1>
            <p className='description_result'>{Description_result}</p>
        </div>
        <div className="result_item tWO">
            <h1 className='title_number'>{Number_result2}</h1>
            <p className='description_result'>{Description_result2}</p>
        </div>
        </Container>
    </div>
    </section>
  );
}
