import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Incorrect email address')
    .required('Email is required field'),
  password: yup.string().required('You need type your password'),
});

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required field'),
  password: yup
    .string()
    .required('Password is required field')
    .matches(
      /^(?=^.{8,40}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z]).*$/,
      'Password must contains 8-40 latin symbols, one on upper case, and one digit'
    ),
  passwordRepeat: yup.string().oneOf([yup.ref('password'), null], 'Password must match'),
  username: yup
    .string()
    .required('Username is required field')
    .min(3, 'Username must contains more that 3 symbols')
    .max(50, 'Username must contains less that 50 symbols'),
  bio: yup.string(),
  image: yup.string().url('Image URL incorrect'),
});
