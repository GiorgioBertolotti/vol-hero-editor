import { NextPage } from 'next'
import { Navbar } from '../components/common/Navbar'

const IndexPage: NextPage<Record<string, never>> = () => {
  return (
    <main>
      <Navbar />
    </main>
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
