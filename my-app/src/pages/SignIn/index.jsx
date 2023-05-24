import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

export const SignIn = () => {

    const signInSchema = Yup.object().shape({
        password: Yup.string()
            .min(5, 'Пароль слишком короткий!')
            .max(50, 'Пароль слишком длинный!')
            .required('Обязательное поле'),
        email: Yup.string().email('Некорректный email').required('Обязательное поле'),
        });
 
    const initialValues = {
        email: '',
        password: '',
    }
    const [error, setError] = useState(false)
    
    const onSubmit = async (values) => {
        setError(false)

        const res = await fetch('https://api.react-learning.ru/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        const responce = await res.json()

        if(res.ok) {
            //responce.token
            return
        }

        return setError(responce.message)
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

            {error && <p className='warning'>{error}</p>}

            <button type="submit">Войти</button>
        </Form>
        </Formik>
        </>
    )
}