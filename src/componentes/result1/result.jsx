import React from 'react';

export default function Resultsa(props) {
  const { Description_result, title_result} = props;

  return (
    <div className="results"> {/* adicione uma classe "results" para o contêiner pai */}
      
      
      <div className="result_item">
        <p className='title_result'>{title_result}</p>
      </div>
    
    </div>
  );
}
