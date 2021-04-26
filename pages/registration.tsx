import firebase from 'firebase'
import { Field, Form, Formik } from 'formik'
import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React from 'react'
import { Button } from '../components/common/Button'
import { Navbar } from '../components/common/Navbar'

interface RegistrationForm {
  email: string
  password: string
  confirmPassword: string
}

const Registration: NextPage<Record<string, never>> = () => {
  const router = useRouter()

  return (
    <>
      <Navbar />
      <main className="pt-2 flex flex-col absolute top-0 bottom-0 right-0 left-0 items-center justify-center text-green-900">
        <div className="rounded-lg bg-green-50 py-16 px-24 max-w-lg">
          <Formik<RegistrationForm>
            initialValues={{ email: '', password: '', confirmPassword: '' }}
            validate={(values) => {
              const errors: Record<string, string | undefined> = {}

              if (!values.email) {
                errors.email = 'Campo obbligatorio'
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Indirizzo email non valido'
              }

              if (!values.password) {
                errors.password = 'Campo obbligatorio'
              } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/i.test(values.password)) {
                errors.password =
                  'La password deve essere lunga almeno 8 caratteri e deve contenere: una lettera minuscola, una lettera maiuscola, un numero'
              }

              if (!values.confirmPassword) {
                errors.confirmPassword = 'Campo obbligatorio'
              } else if (values.password !== values.confirmPassword) {
                errors.confirmPassword = 'Conferma password è diverso da password'
              }

              return errors
            }}
            onSubmit={async (values, { setSubmitting }) => {
              const { email, password } = values

              const result = await firebase.auth().createUserWithEmailAndPassword(email, password)
              if (result.user !== null) {
                router.push('/')
              }

              setSubmitting(false)
            }}
          >
            {({ errors, isSubmitting, dirty }) => (
              <Form className="block">
                <label htmlFor="email">E-mail</label>
                <Field
                  type="email"
                  name="email"
                  className="mt-2 w-full border border-dashed border-green-500 rounded-lg p-2"
                />
                <div className="mb-6">
                  <small className="text-red-600">{errors.email}</small>
                </div>
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="mt-2 w-full border border-dashed border-green-500 rounded-lg p-2"
                />
                <div className="mb-6">
                  <small className={errors.password ? 'text-red-600' : ''}>
                    La password deve essere lunga almeno 8 caratteri e deve contenere: una lettera
                    minuscola, una lettera maiuscola, un numero.
                  </small>
                </div>
                {/* <div className="mb-6">
                  <ErrorMessage name="password" component="div" className="mt-2 text-red-600" />
                </div> */}
                <label htmlFor="confirmPassword">Conferma password</label>
                <Field
                  type="password"
                  name="confirmPassword"
                  className="mt-2 w-full border border-dashed border-green-500 rounded-lg p-2"
                />
                <div className="mb-12">
                  <small className="text-red-600">{errors.confirmPassword}</small>
                </div>
                <div className="flex flex-row justify-center mb-6">
                  <Button
                    label="Crea account"
                    type="submit"
                    disabled={
                      isSubmitting ||
                      !dirty ||
                      !!errors.email ||
                      !!errors.password ||
                      !!errors.confirmPassword
                    }
                  />
                </div>
                <p>
                  Hai già un account?{' '}
                  <Link href="/login">
                    <a className="text-green-500">Accedi</a>
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </main>
    </>
  )
}

// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//   const response = await fetch('https://api.spacexdata.com/v3/launches/next')
//   const nextLaunch = await response.json()
//   return {
//     props: {
//       launch: {
//         mission: nextLaunch.mission_name,
//         site: nextLaunch.launch_site.site_name_long,
//         timestamp: nextLaunch.launch_date_unix * 1000,
//         rocket: nextLaunch.rocket.rocket_name,
//       },
//     },
//   }
// }

export default Registration
