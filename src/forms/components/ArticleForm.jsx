import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { message } from 'antd';
import DisplayAddArticleForm from './DisplayAddArticleForm';
import { articleSchema } from '../../schemas/schemas';

const ArticleForm = ({ formHandler, initialValues, slug }) => {
  const history = useHistory();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={articleSchema}
      onSubmit={(values, { setSubmitting }) => {
        formHandler({ ...values, slug }).then(article => {
          message.success('Success!');
          history.push(`/articles/${article.slug}`);
          setSubmitting(false);
        });
      }}
    >
      {data => <DisplayAddArticleForm data={data} />}
    </Formik>
  );
};

ArticleForm.propTypes = {
  formHandler: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    body: PropTypes.string,
    tagList: PropTypes.arrayOf(PropTypes.string),
  }),
  slug: PropTypes.string,
};

ArticleForm.defaultProps = {
  initialValues: {},
  slug: null,
};

export default ArticleForm;
