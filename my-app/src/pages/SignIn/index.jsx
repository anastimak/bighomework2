import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { fetchAuth } from '../../api/user';
import { AUTH_DOG_TOKEN } from '../../utils/constants';

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

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem(AUTH_DOG_TOKEN)
    
        if (token) return navigate('/products')
      }, [navigate])    

    const onSubmit = async (values) => {
        setError(false)

        const res = await fetchAuth(values)
        const responce = await res.json()

        if(res.ok) {
            localStorage.setItem(AUTH_DOG_TOKEN, responce.token)
            return navigate('/products')
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
            <p>Еще не зарегистрированы? 
                <button onClick={() => navigate('/signup')} type="submit">Регистрация</button>
            </p>
        </Form>
        </Formik>
        </>
    )
}