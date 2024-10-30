import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './SignUp.css';
import ICHGRA from '../assets/ICHGRA 2.png';
import { Link } from "react-router-dom";
import { $api} from "../api/api";

const SignUp = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Неверный email').required('Введите email'),
    password: Yup.string().min(6, 'Пароль слишком короткий').required('Введите пароль'),
    username: Yup.string().required('Введите имя пользователя'),
    full_name: Yup.string().required('Введите полнное имя ')

  });

  const handleSubmit = (object) => {
    console.log(object);

    $api.post("/auth/register", object);
    alert('Регистрация прошла успешно');
  };

  return (
    <div className="signup-container">
      <img src={ICHGRA}  alt="Logo" className="login-logo" />
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
                name="email"
                type="email"
                placeholder="Email"
                className="input-field"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            
            <div className="form-group">
            <Field
                name="full_name"
                type="text"
                placeholder="Fullname"
                className="input-field"
              />
              <ErrorMessage name="username" component="div" className="error" />
  </div>
  <div className="form-group">
              <Field
                name="username"
                type="text"
                placeholder="Username"
                className="input-field"
              />
              <ErrorMessage name="username" component="div" className="error" />
            </div>

            <div className="form-group">
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className="input-field"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

           
            <button type="submit" className="submit-button">Sign Up</button>
           
          </Form>
          
        )}

      </Formik>
      <div className='more'>
<p1> People who use our service may have uploaded
your contact information to Instagram.<a href='#'>Learn More</a>
</p1>
</div>
<div className='more2'>
<p2>By signing up, you agree to our <a href='#'>Terms</a> . <a href='#'>Privacy Policy</a>Privacy Policy and <a href='#'>Cookies Policy</a></p2>
</div>

      <div className="signup-box">
                      <p>Have  an account? <Link to="/" className="signup-link">Log in </Link> </p>
                  </div>
    </div>
  );
};

export default SignUp;
