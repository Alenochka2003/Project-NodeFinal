import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './SignUp.css';
import ICHGRA from '../assets/ICHGRA 2.png';
import { Link } from "react-router-dom";

const SignUp = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Неверный email').required('Введите email'),
    password: Yup.string().min(6, 'Пароль слишком короткий').required('Введите пароль'),
    username: Yup.string().required('Введите имя пользователя'),
  });

  const handleSubmit = () => {
    alert('Регистрация прошла успешно');
  };

  return (
    <div className="signup-container">
      <img src={ICHGRA} alt="Logo" className="login-logo" />
      <p>Sign up to see photos and videos
      from your friends.</p>
      <Formik
        initialValues={{ email: '', password: '', username: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="form">
            <div className="form-group">
              <Field
                name="username"
                type="text"
                placeholder="Имя пользователя"
                className="input-field"
              />
              <ErrorMessage name="username" component="div" className="error" />
            </div>
            <div className="form-group">
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="input-field"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="form-group">
              <Field
                name="password"
                type="password"
                placeholder="Пароль"
                className="input-field"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <button type="submit" className="submit-button">Sign Up</button>
           
          </Form>
          
        )}

      </Formik>
<p> People who use our service may have uploaded
your contact information to Instagram.<a href='#'>Learn More</a>
</p>
<p>By signing up, you agree to our <a href='#'>Terms</a> . <a href='#'>Privacy Policy</a>Privacy Policy and <a href='#'>Cookies Policy</a></p>
      
      <div className="signup-box">
                      <p>Don,t have an account? <Link to="/SignUp" className="signup-link">Log in </Link> </p>
                  </div>
    </div>
  );
};

export default SignUp;
