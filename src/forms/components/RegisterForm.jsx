import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import { registerSchema } from '../../schemas/schemas';
import DisplayRegisterForm from './DisplayRegisterForm';
import { onRegister } from '../actions';
import SpinnerWrapper from '../../spinner/SpinnerWrapper';

const initialValues = {
  email: '',
  password: '',
  username: '',
};

const RegisterForm = ({ registerHandler, showSpinner }) => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };
  return (
    <SpinnerWrapper isActive={showSpinner}>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={(values, { setSubmitting }) => {
          registerHandler(values).then(result => {
            if (result) history.replace(from);
            setSubmitting(false);
          });
        }}
      >
        {data => <DisplayRegisterForm data={data} />}
      </Formik>
    </SpinnerWrapper>
  );
};

RegisterForm.propTypes = {
  registerHandler: PropTypes.func.isRequired,
  showSpinner: PropTypes.bool,
};

RegisterForm.defaultProps = {
  showSpinner: false,
};

const mapStateToProps = ({ user: { isLoading } }) => ({
  showSpinner: isLoading,
});

const dispatchProps = {
  registerHandler: onRegister,
};

export default connect(mapStateToProps, dispatchProps)(RegisterForm);
