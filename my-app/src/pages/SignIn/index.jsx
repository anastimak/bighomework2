import { Formik, Field, Form } from 'formik';
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