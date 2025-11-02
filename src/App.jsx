import { listTools } from "./data"

function App() {
  return (
    <>
      <div className="hero grid grid-cols-1 items-center xl:gap-0 gap-6 pt-10 md:grid-cols-2 mb-20">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src=".././assets/tsumugi-wenders.png" alt="Hero Image" className="w-10 rounded-md"/>
            <p className="text-justify">"Tsumugi is my wife"</p>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, my name is Muhammad Dafa Alfarizi</h1>
          <p className="text-base/loose mb-6 opacity-50">Saya adalah seorang junior web developer, saat ini saya sedang berkuliah di Politeknik Negeri Sriwijaya dan mengambil jurusan Teknik Komputer. Saya mempunyai ketertarikan dalam bidang Programming dan Networking, terutama pada pembuatan sebuah Website dan Jaringan Lokal.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">
              Download CV 
              <i className="ri-download-2-fill ri-lg ms-2"></i>
            </a>
            <a href="#" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">
              Lihat Proyek
              <i className="ri-arrow-right-up-line ri-lg ms-1"></i>
            </a>
          </div>
        </div> 
        <img src=".././assets/tsumugi-wenders.png" alt="Hero Image" className="w-100 md:mr-30 md:ml-auto" />
      </div>

      <hr />

      {/* Tentang */}
      <div className="tentang mt-10 py-10 mb-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-3xl">
          <p className="text-base/loose mb-10">
            Saya adalah seorang junior web developer, saat ini saya sedang berkuliah di Politeknik Negeri Sriwijaya dan mengambil jurusan Teknik Komputer. Saya mempunyai ketertarikan dalam bidang Programming dan Networking, terutama pada pembuatan sebuah Website dan Jaringan Lokal.
          </p>
          <div className="flex items-center justify-around md:text-left text-center">
            <div>
              <h1  className="md:text-4xl text-2xl mb-1">45 <span className="text-violet-500">+</span></h1>
              <p>Projek Selesai</p>
            </div>
            <div>
              <h1  className="md:text-4xl text-2xl mb-1">4 <span className="text-violet-500">+</span></h1>
              <p>Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="tools mt-20 mb-20">
        <h1 className="text-4xl/snug font-bold mb-4">Tools yang dipakai</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50">Berikut ini beberapa tools yang biasa saya gunakan untuk membuat sebuah Website</p>
        <div className="tools-box mt-14 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id}>
              <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
