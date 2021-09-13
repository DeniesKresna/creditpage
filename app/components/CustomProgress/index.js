import React from 'react';
import PropTypes from 'prop-types';
import './progress.css';

import Typography from 'antd/lib/typography';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

const { Text } = Typography; 

function CustomProgress({progressData}) {
  // Progres bar
  let bars = progressData && progressData.length && progressData.map(function(item, i) {
    if(item.value > 0) {
      return (
        <div className="bar" style={{'backgroundColor': item.color, 'width': item.value + '%'}}  key={i}>

        </div>
      )
    }
  });

  let legends = progressData && progressData.length && progressData.map(function(item, i) {
      if(item.value > 0) {
        return (
          <div className="legend" key={i}>
            <span className="dot" style={{'color': item.color}}>●</span>
            <span className="label"><Text type="secondary">{item.name} {item.value} %</Text></span>
          </div>
       )
     }
  });
  return (
    <div className="multicolor-bar">
      	<div className="bars">
      		{bars == ''?'':bars}
      	</div>
      	<div className="legends">
      		{legends == ''?'':legends}
      	</div>
      </div>
  );
}

// We require the use of src and alt, only enforced by react in dev mode
CustomProgress.propTypes = {
  progressData: PropTypes.array
};

export default CustomProgress;
