
const Footer = () => {
  return (
    <>
      <div className="mt-8 w-full bg-black px-8 md:px-[500px] py-8 flex md:flex-row flex-col items-start justify-between text-sm md:text-md space-y-4 md:space-y-0">
        <div className="flex flex-col text-white">
          <p>Featured Blogs</p>
          <p>Most Viewed</p>
          <p>Readers Choice</p>
        </div>

        <div className="flex flex-col text-white">
          <p>Forum</p>
          <p>Support</p>
          <p>Recent Posts</p>
        </div>

        <div className="flex flex-col text-white">
          <p>Privacy Policy</p>
          <p>About Us</p>
          <p>Terms & Conditions</p>
          <p>Terms of Service</p>
        </div>

        <div className="flex flex-col text-white">
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>LinkedIn</p>
        </div>
      </div>
      <p className="py-2 pb-2 text-center text-white bg-black">All Rights Reserved @Blogopedia 2023</p>
    </>
  )
}

export default Footer