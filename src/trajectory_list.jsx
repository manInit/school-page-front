import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  home_btn,
  personal_space_btn,
  bottom_info,
  uni_btn,
  login_btn,
  register_btn,
} from './home';

const TrajectoryList = (id) => {
  console.log(id);
  //const data = {}; //get_req('')
  const trajectories = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]; //get_req('')
  useEffect(() => {
    document.title = 'Направления';
  });
  return (
    <>
      <div className='head_wrap'>
        <div className='head_panel'>
          {uni_btn}
          {home_btn}
          {login_btn}
          {register_btn}
          {personal_space_btn}
        </div>
      </div>
      <span className='title_span'>Направления</span>
      <div className='grid_container'>
        {trajectories.map((elem) => Trajectory_div(elem))}
      </div>
      {bottom_info}
    </>
  );
};

export default TrajectoryList;

const Trajectory_div = () => {
  const navigator = useNavigate();
  return (
    <div
      /*key={elem.id}*/ className='grid_item'
      onClick={() => navigator('/trajectory')}
    >
      Название направлений Описание Кому пригодится
    </div>
  );
};
