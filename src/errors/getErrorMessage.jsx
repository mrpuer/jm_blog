import React from 'react';

const statusesMap = {
  401: () => ({
    title: 'Unauthorized Error',
    content: 'Please, login first to do this action.',
  }),
  403: () => ({
    title: 'Forbidden Error',
    content: "You doesn't have permissions to perform this action",
  }),
  404: () => ({
    title: 'Not Found Error',
    content: 'Not found. We are cant fulfill your request',
  }),
  422: ({ errors }) => {
    const content = (
      <>
        {Object.keys(errors).map(key => (
          <p key={key}>{` - ${key} ${errors[key][0]}`}</p>
        ))}
      </>
    );
    return {
      title: 'Request Error',
      content,
    };
  },
};

export default ({ data, status }) => statusesMap[status](data);
