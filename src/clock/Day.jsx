import React from 'react';

function Day({ day }) {
  console.log('Day is rendered');
  return <div>We are on {day}</div>;
}

export default React.memo(Day);
