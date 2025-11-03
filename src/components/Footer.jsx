const Footer = () => {
  return (
    <div className="footer mt-10">
        <div className="xl:w-1/1 lg:w-3/4 w-full pt-10 pb-10 md:ps-0 ps-10 mx-auto bg-zinc-800 rounded-t-3xl grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
            <div className="md:ps-20 xl:ps-40 ps-0">
              <h4 className="md:text-4xl text-[15pt] font-bold">Contact</h4>
            </div>
            <div className="md:ps-10">
              <h4 className="md:text-4xl text-[15pt] font-bold">Social Media</h4>
              <ul className="sm:pt-3 sm:mx-6 sm:me-0 me-10 pt-1 sm:grid sm:grid-cols-1 flex items-center justify-between">
                <li className="mb-1">
                  <a href="" className="flex items-center sm:gap-2" >
                    <i className="ri-facebook-box-fill ri-2x"></i>
                    <p className="sm:flex hidden">Muhammad Dafa Alfarizi</p></a>
                </li>
                <li className="mb-1">
                  <a href="" className="flex items-center sm:gap-2" >
                    <i class="ri-instagram-line ri-2x"></i>
                    <p className="sm:flex hidden">@dafaalfarizi1411</p></a>
                </li>
                <li className="mb-1">
                  <a href="" className="flex items-center sm:gap-2" >
                    <i class="ri-linkedin-box-fill ri-2x"></i>
                    <p className="sm:flex hidden">Muhammad Dafa Alfarizi</p></a>
                </li>
                <li>
                  <a href="" className="flex items-center sm:gap-2" >
                    <i class="ri-github-fill ri-2x"></i>
                    <p className="sm:flex hidden">Monnutrue</p></a>
                </li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
