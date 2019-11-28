import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import IconText from '../../articles/components/IconText';

const ArticleDates = ({ createdAt, updatedAt }) => {
  return (
    <>
      <div>
        {' '}
        <IconText
          type="calendar"
          text={`Created ${formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
          })}
            `}
        />
      </div>
      <div>
        {' '}
        <IconText
          type="calendar"
          text={`Updated ${formatDistanceToNow(new Date(updatedAt), {
            addSuffix: true,
          })}
              `}
        />
      </div>
    </>
  );
};

ArticleDates.propTypes = {
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
};

ArticleDates.defaultProps = {
  createdAt: '',
  updatedAt: '',
};

export default ArticleDates;
