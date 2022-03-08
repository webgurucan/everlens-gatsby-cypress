import React from 'react';
import styled from 'styled-components';

const Icon = styled.svg`
  width: 18px;
  height: 18px;
`;

export default ({ style, className, id, onClick }) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    style={style}
    id={id}
    className={className}
    onClick={onClick}
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="#007377"
        d="M7.691 7.144h1.35v5.4h-1.35v-5.4zM7.5 5.31c0-.218.08-.407.242-.568.161-.161.365-.242.613-.242s.456.077.624.23c.17.154.254.347.254.58 0 .233-.085.426-.254.58-.168.153-.376.23-.624.23s-.452-.08-.613-.242c-.161-.161-.242-.35-.242-.568z"
        transform="translate(.75 .75)"
      />
      <path
        stroke="#007377"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.25 0c4.556 0 8.25 3.694 8.25 8.25s-3.694 8.25-8.25 8.25S0 12.806 0 8.25 3.694 0 8.25 0z"
        transform="translate(.75 .75)"
      />
    </g>
  </Icon>
);
