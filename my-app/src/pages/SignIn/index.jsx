import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const SignIn = () => {

    const signInSchema = Yup.object().shape({
        password: Yup.string()
            .min(5, 'Слишком короткий!')
            .max(50, 'Слишком длинный!')
            .required('Обязательное поле'),
        email: Yup.string().email('Некорректный email').required('Обязательное поле'),
        });
 
    const initialValues = {
        email: '',
        password: '',
    }

    const onSubmit = (values) => {
        console.log(values);
    }

    return(
        <>
        <h1>Авторизация</h1>
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={signInSchema}
        >
        <Form>
            <div>
            <Field
                name="email"
                placeholder="jane@acme.com"
                type="email"
            />
            <ErrorMessage name="email" component='p' className='warning' />
            </div>

            <div>
            <Field name="password" placeholder="Пароль" type="password" />
            <ErrorMessage name="password" component='p' className='warning' />
            </div>

            <button type="submit">Войти</button>
        </Form>
        </Formik>
        </>
    )
}