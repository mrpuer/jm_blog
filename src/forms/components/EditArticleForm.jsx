import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { message } from 'antd';
import DisplayAddArticleForm from './DisplayAddArticleForm';
import { articleSchema } from '../../schemas/schemas';
import { editArticleAction } from '../../article/actions';

const EditArticleForm = ({ editArticleHandler, article }) => {
  const history = useHistory();
  const initialValues = {
    title: article.title,
    description: article.description,
    body: article.body,
    tagList: article.tagList,
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={articleSchema}
      onSubmit={(values, { setSubmitting }) => {
        editArticleHandler({ ...values, slug: article.slug }).then(editedArticle => {
          message.success('New Article added!');
          history.push(`/articles/${editedArticle.slug}`);
          setSubmitting(false);
        });
      }}
    >
      {data => <DisplayAddArticleForm data={data} />}
    </Formik>
  );
};

EditArticleForm.propTypes = {
  editArticleHandler: PropTypes.func.isRequired,
  article: articleSchema.isRequired,
};

const mapDispatch = {
  editArticleHandler: editArticleAction,
};

export default connect(null, mapDispatch)(EditArticleForm);
