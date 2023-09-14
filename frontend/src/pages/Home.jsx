import HomePosts from "../components/HomePosts"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="px-8 md:px-[200px]">
        <HomePosts />
        <HomePosts />
        <HomePosts />
      </div>
      <Footer />
    </>
  )
}

export default Home