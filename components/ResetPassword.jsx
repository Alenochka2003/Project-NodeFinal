
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ResetPassword = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Неверный email').required('Введите email или номер телефона'),
  });

  const handleSubmit = (values) => {
    alert(`Инструкция по сбросу пароля отправлена на ${values.email}`);
  };

  return (
    <div className="reset-container">
      <h2>Reset Password</h2>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="form">
            <div>
              <Field name="email" type="text" placeholder="Email или номер телефона" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <button type="submit">Reset Password</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ResetPassword;