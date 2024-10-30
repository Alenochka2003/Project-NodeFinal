
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './ResetPassword.css';
import Img_logging from '../assets/Img_logging.svg';
import HorizontalDivider from "../assets/Horizontal_Divider.svg"; 
import { Link } from "react-router-dom"; 


const ResetPassword = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Неверный email').required('Введите email или номер телефона'),
  });

  const handleSubmit = (values) => {
    alert(`Инструкция по сбросу пароля отправлена на ${values.email}`);
  };

  return (
    <div className="reset-container">
     <img src={Img_logging}  alt="Log" className="krug" />
     <h2> Trouble logging in?</h2>
     <p> Enter your email, phone, or username and we,ll
     send you a link to get back into your account.</p>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="form">
            <div>
              <Field name="email" type="text" placeholder="Email or Username" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <button type="submit">Reset Password</button>
            
            <div className="login-or-reset">                  
            <span className="or-text"> 
              <img src={HorizontalDivider} alt="Divider" />  OR  <img src={HorizontalDivider} alt="Divider" /> 
            </span>  
            </div>
            <div className='new_acc'>
            <Link to="/SignUp" className="new_acc">Create new account</Link> 
            </div>           
            
          <div className='back_to'> <Link to="/" className="back_to">Back to Login </Link>     </div>    
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ResetPassword;