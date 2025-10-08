import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Username must be at least 2 characters')
    .required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export default RegisterSchema;
