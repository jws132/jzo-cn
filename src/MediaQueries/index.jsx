import React from 'react';
import Media from 'react-media';

const BREAK_POINTS = {
  xs: {
    maxWidth: 575,
  },
  sm: {
    minWidth: 576,
    maxWidth: 767,
  },
  md: {
    minWidth: 768,
    maxWidth: 991,
  },
  lg: {
    minWidth: 992,
    maxWidth: 1199,
  },
  xl: {
    minWidth: 1200,
    maxWidth: 1599,
  },
  xxl: {
    minWidth: 1600,
  },
};

const MediaQueries = ({ children }) => {
  let matchedPoint = '';
  return (
    <Media queries={BREAK_POINTS}>
      {matches => {
        const points = Object.keys(matches);
        for (let i = 0, len = points.length; i < len; i += 1) {
          const point = points[i];
          if (matches[point]) {
            matchedPoint = point;
            return children(point);
          }
        }
        return children(matchedPoint);
      }}
    </Media>
  );
};

export default MediaQueries;
