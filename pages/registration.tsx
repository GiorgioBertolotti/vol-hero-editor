import { ErrorMessage, Field, Form, Formik } from 'formik'
import { NextPage } from 'next'
import React from 'react'
import { Navbar } from '../components/common/Navbar'

const Registration: NextPage<Record<string, never>> = () => {
  return (
    <>
      <Navbar />
      <main className="pt-2 flex flex-col items-center">
        <div className="rounded-lg bg-green-100 py-16 px-24">
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
              <Form>
                <Field type="email" name="email" label="xiao" />
                <ErrorMessage name="email" component="div" />
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
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
