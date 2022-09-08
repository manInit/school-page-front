import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  home_btn,
  personal_space_btn,
  bottom_info,
  uni_btn,
  login_btn,
  register_btn,
  trajectory_btn,
} from './home';

const Trajectory = () => {
  useEffect(() => {
    document.title = 'Направление';
  });
  const trajectories = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]; //get_req('')
  return (
    <>
      <div className='head_wrap'>
        <div className='head_panel'>
          {uni_btn}
          {home_btn}
          {trajectory_btn}
          {login_btn}
          {register_btn}
          {personal_space_btn}
        </div>
      </div>
      <span className='title_span'>Trajectory name</span>
      <div className='personal_trajectories'>
        <div
          /*key={elem.id}*/ className='personal_trajectories_item'
          onClick={() => {}}
        >
          Траектория развития
        </div>
        {trajectories.map((elem) => Trajectory_div(elem))}
      </div>
      {bottom_info}
    </>
  );
};

export default Trajectory;

const Trajectory_div = (elem) => {
  const navigator = useNavigate();
  console.log(elem);
  return (
    <>
      <div
        /*key={elem.id}*/ className='trajectory_activity'
        onClick={() => navigator('/activity')}
      >
        Активность
      </div>
    </>
  );
};
