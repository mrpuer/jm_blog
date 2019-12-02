import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

const AddArticleForm = ({ addArticleHandler, showSpinner }) => {
  return (
    <SpinnerWrapper isActive={showSpinner}>
      <Formik
        initialValues={initialValues}
        validationSchema={articleSchema}
        onSubmit={(values, { setSubmitting }) => {
          addArticleHandler(values).then(() => setSubmitting(false));
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

const mapStateToProps = ({ articles: { isLoading } }) => ({
  showSpinner: isLoading,
});

const mapDispatch = {
  addArticleHandler: addArticleAction,
};

export default connect(mapStateToProps, mapDispatch)(AddArticleForm);
