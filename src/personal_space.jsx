import { React, useEffect, useState } from 'react';
import {
  home_btn,
  bottom_info,
  uni_btn,
  user_fi,
  trajectory_btn,
} from './home';

import ActivityList from './personal_components/activity_list';
import PastActivityList from './personal_components/past_activity_list';
import Profile from './personal_components/profile';
import TrajectoryPointList from './personal_components/trajectory_point_list';

const Personal = () => {
  useEffect(() => {
    document.title = 'Личный кабинет';
  });
  const [component, set_content] = useState('trajectory_point_list');
  const Content = {
    activity_list: ActivityList,
    past_activity_list: PastActivityList,
    profile: Profile, //AthInfo.bind(null, {id_ath: param}),
    trajectory_point_list: TrajectoryPointList,
  }[component];
  console.log(Content);
  return (
    <>
      <div className='head_wrap'>
        {uni_btn}
        {home_btn}
        <div className='head_panel'>
          {user_fi}
          {trajectory_btn}
          <input
            type='button'
            value='Выход'
            style={{ marginLeft: 'auto' }}
            onClick={() => {}}
          />
        </div>
      </div>
      <span className='title_span'>Username</span>
      <div className='personal_space_title'>
        <div
          className='personal_space_title_btn'
          onClick={() => {
            set_content('activity_list');
          }}
        >
          Мероприятия
        </div>
        <div
          className='personal_space_title_btn'
          onClick={() => {
            set_content('past_activity_list');
          }}
        >
          Достижения
        </div>
        <div
          className='personal_space_title_btn'
          onClick={() => {
            set_content('trajectory_point_list');
          }}
        >
          Баллы
        </div>
        <div
          className='personal_space_title_btn'
          onClick={() => {
            set_content('profile');
          }}
        >
          Профиль
        </div>
      </div>
      <div className='content_block'>
        <div className='content_container'>
          <Content />
        </div>
      </div>

      {bottom_info}
    </>
  );
};

export default Personal;
