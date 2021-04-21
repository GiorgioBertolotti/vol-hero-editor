import { NextPage } from 'next'
import { Navbar } from '../components/common/Navbar'

const IndexPage: NextPage<Record<string, never>> = () => {
  return (
    <>
      <Navbar />
      <main className="pt-5 flex flex-col items-center text-green-900">
        <h1 className="mb-5 text-2xl text-center">Crea il tuo eroe per la campagna co-op di VoL</h1>
        <img src="https://picsum.photos/600/800" alt="Hero sheet" />
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

export default IndexPage
