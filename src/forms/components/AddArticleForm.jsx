import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withRouter } from 'react-router';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { message } from 'antd';
import DisplayAddArticleForm from './DisplayAddArticleForm';
import { articleSchema } from '../../schemas/schemas';
import SpinnerWrapper from '../../spinner/SpinnerWrapper';
import { addArticleAction } from '../../article/actions';

const initialValues = {
  title: '',
  description: '',
  body: '',
  tagList: [],
};

// eslint-disable-next-line react/prop-types
const AddArticleForm = ({ addArticleHandler, showSpinner, history }) => {
  return (
    <SpinnerWrapper isActive={showSpinner}>
      <Formik
        initialValues={initialValues}
        validationSchema={articleSchema}
        onSubmit={(values, { setSubmitting }) => {
          addArticleHandler(values).then(article => {
            message.success('New Article added!');
            // eslint-disable-next-line react/prop-types
            history.push(`articles/${article.slug}`);
            setSubmitting(false);
          });
        }}
      >
        {data => <DisplayAddArticleForm data={data} />}
      </Formik>
    </SpinnerWrapper>
  );
};

AddArticleForm.propTypes = {
  addArticleHandler: PropTypes.func.isRequired,
  showSpinner: PropTypes.bool,
};

AddArticleForm.defaultProps = {
  showSpinner: false,
};

const mapStateToProps = ({ currentArticle: { isLoading } }) => ({
  showSpinner: isLoading,
});

const mapDispatch = {
  addArticleHandler: addArticleAction,
};

export default connect(mapStateToProps, mapDispatch)(withRouter(AddArticleForm));
