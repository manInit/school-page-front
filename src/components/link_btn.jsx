import React from 'react';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function Button({ children, ...props }) {
  const navigator = useNavigate();
  return (
    <input
      // eslint-disable-next-line react/prop-types
      className={props.className}
      type={'button'}
      // eslint-disable-next-line react/prop-types
      style={props.style}
      // eslint-disable-next-line react/prop-types
      value={props.value}
      // eslint-disable-next-line react/prop-types
      onClick={() => navigator(props.link)}
    >
      {children}
    </input>
  );
}
