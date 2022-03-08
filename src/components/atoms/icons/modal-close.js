import React from 'react';
import styled from 'styled-components';

const Icon = styled.svg``;

export default ({ style, className, onClick }) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    style={style}
    className={className}
    onClick={onClick}
  >
    <defs>
      <filter
        id="3hnwrka86a"
        width="113.7%"
        height="122.3%"
        x="-6.9%"
        y="-10.7%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation="5"
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g
      fill="inherit"
      fill-rule="evenodd"
      filter="url(#3hnwrka86a)"
      transform="translate(-660 -19)"
    >
      <path d="M677.097 21.903c.3.3.323.773.069 1.1l-.07.079-5.998 5.997 5.999 5.998.069.079c.254.327.231.8-.07 1.1-.325.325-.852.325-1.178 0l-5.998-5.999-5.997 5.999c-.326.325-.853.325-1.179 0-.3-.3-.323-.773-.07-1.1l.07-.079 5.998-5.998-5.998-5.997-.07-.079c-.253-.327-.23-.8.07-1.1.326-.325.853-.325 1.179 0l5.997 5.998 5.998-5.998c.326-.325.853-.325 1.179 0z" />
    </g>
  </Icon>
);
