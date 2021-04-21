import { ErrorMessage, Field, Form, Formik } from 'formik'
import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import { Button } from '../components/common/Button'
import { Navbar } from '../components/common/Navbar'

const Registration: NextPage<Record<string, never>> = () => {
  return (
    <>
      <Navbar />
      <main className="pt-2 flex flex-col items-center text-green-900">
        <div className="rounded-lg bg-green-50 py-16 px-24 max-w-lg">
          <Formik
            initialValues={{ email: '', password: '' }}
            validate={(values) => {
              const errors: Record<string, string> = {}
              if (!values.email) {
                errors.email = 'Required'
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
              }
              return errors
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
              }, 400)
            }}
          >
            {({ isSubmitting }) => (
              <Form className="block">
                <label htmlFor="email">E-mail</label>
                <Field
                  type="email"
                  name="email"
                  className="mt-2 w-full border border-dashed border-green-500 rounded-lg p-2"
                />
                <div className="mb-6">
                  <ErrorMessage name="email" component="div" className="mt-2 text-red-600" />
                </div>
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="mt-2 w-full border border-dashed border-green-500 rounded-lg p-2"
                />
                <div className="mb-6">
                  <ErrorMessage name="password" component="div" className="mt-2 text-red-600" />
                </div>
                <label htmlFor="confirm">Conferma password</label>
                <Field
                  type="password"
                  name="confirm"
                  className="mt-2 w-full border border-dashed border-green-500 rounded-lg p-2"
                />
                <div className="mb-12">
                  <ErrorMessage name="confirm" component="div" className="mt-2 text-red-600" />
                </div>
                <div className="flex flex-row justify-center mb-6">
                  <Button label="Crea account" type="submit" disabled={isSubmitting} />
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
          {/* <form>
            <div className="grid grid-cols-6 gap-6">
              <label htmlFor="email" className="mb-2">
                E-mail
              </label>
              <input type="text" name="email" className="mb-6" />
              <label htmlFor="password" className="mb-2">
                Password
              </label>
              <input type="password" name="password" className="mb-6" />
              <label htmlFor="confirm" className="mb-2">
                Conferma password
              </label>
              <input type="password" name="confirm" className="mb-6" />
            </div>
          </form> */}
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
