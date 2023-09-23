import HomePosts from "../components/HomePosts"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import axios from "axios"
import { URL } from "../url"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const Home = () => {
  const {search} = useLocation()
  // console.log(search)

  const [posts,setPosts] = useState([])
  const [noResults,setNoResults] = useState(false)

  const fetchPosts = async() => {
    try {
      const res = await axios.get(URL + "/api/posts/" + search)
      setPosts(res.data)
      // console.log(res.data)

      if(res.data.length === 0){
        setNoResults(true)
      }
      else{
        setNoResults(false)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchPosts()

  },[search])

  return (
    <>
      <Navbar />

      <div className="px-8 md:px-[200px] min-h-[80vh]">
        {!noResults ? posts.map((post) => (
          <HomePosts key={post._id} post={post} />
        )) : <h3 className="text-center font-bold mt-16">No posts available</h3>}
      </div>

      <Footer />
    </>
  )
}

export default Home