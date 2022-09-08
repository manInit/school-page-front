import React from 'react';

const TrajectoryPointList = () => {
  const list = [{}, {}, {}, {}];
  return <>{list.map((elem) => elem_div(elem))}</>;
};

export default TrajectoryPointList;

const elem_div = () => {
  return (
    <div className=''>
      <span>Направление</span>
      <span style={{ float: 'right' }}>n балла(ов)</span>
    </div>
  );
};
