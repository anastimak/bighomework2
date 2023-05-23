import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

export const SignIn = () => {

    const signupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        });
 
    const initialValues = {
        email: '',
        password: '',
    }

    return(
        <>
        <h1>Авторизация</h1>
        <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
        >
        <Form>
            <Field
                name="email"
                placeholder="jane@acme.com"
                type="email"
            />

            <Field name="password" placeholder="Пароль" type="password" />

            <button type="submit">Войти</button>
        </Form>
        </Formik>
        </>
    )
}