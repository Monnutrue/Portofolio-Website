const Footer = () => {
  return (
    <div className="footer mt-10">
        <div className="xl:w-1/1 lg:w-3/4 w-full pt-10 pb-10 mx-auto bg-zinc-800 rounded-t-3xl grid grid-cols-2">
            <div className="md:ps-20 xl:ps-40 ps-5">
              <h4 className="md:text-4xl text-[15pt] font-bold">Contact</h4>
            </div>
            <div className="md:ps-10">
              <h4 className="md:text-4xl text-[15pt] font-bold">Social Media</h4>
              <ul className="md:pt-5 md:mx-6 pt-1">
                <li className="mb-1">
                  <a href="" className="md:flex grid items-center md:gap-2" >
                    <i className="ri-facebook-box-fill ri-2x"></i>Muhammad Dafa Alfarizi</a>
                </li>
                <li className="mb-1">
                  <a href="" className="md:flex grid items-center md:gap-2" >
                    <i class="ri-instagram-line ri-2x"></i> @dafaalfarizi1411</a>
                </li>
                <li className="mb-1">
                  <a href="" className="md:flex grid items-center md:gap-2" >
                    <i class="ri-linkedin-box-fill ri-2x"></i> Muhammad Dafa Alfarizi</a>
                </li>
                <li>
                  <a href="" className="md:flex grid items-center md:gap-2" >
                    <i class="ri-github-fill ri-2x"></i> Monnutrue</a>
                </li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
