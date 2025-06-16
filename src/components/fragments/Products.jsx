import CustomButton from "../layout/CustomButton";

export default function Products() {
  const sachets = [
    "https://mytenplus.com/wp-content/uploads/2023/12/PNG-ASEAN-Tropical-Citrus-Tenplus-Sachets-copy-01.png",
    "https://mytenplus.com/wp-content/uploads/2023/12/PNG-ASEAN-Pineapple-Tenplus-Sachets-copy-01.png",
    "https://mytenplus.com/wp-content/uploads/2023/12/PNG-ASEAN-Orange-Tenplus-Sachets-copy-01.png",
    "https://mytenplus.com/wp-content/uploads/2023/12/PNG-ASEAN-Sea-Salt-Lemonade-Tenplus-Sachets-copy-01.png",
    "https://mytenplus.com/wp-content/uploads/2023/12/PNG-ASEAN-Orange-Tenplus-Sachets-copy-01.png",
    "https://mytenplus.com/wp-content/uploads/2023/12/PNG-ASEAN-Mixed-Berry-Tenplus-Sachets-copy-01.png",
  ];

  return (
    <section className="w-full relative bg-[url(https://images7.alphacoders.com/726/thumb-1920-726679.jpg)] text-black z-10">
      <div className="bg-neutral-900/80 inset-0 absolute w-full h-full z-20"></div>
      <div className="relative z-50 w-full min-h-screen flex items-center justify-center overflow-hidden ">
        <div className="container mx-auto">
          <div className="absolute top-50 md:top-30 inset-0 flex items-center justify-center pointer-events-none z-0">
            <h1 className="text-9xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black text-center leading-none tracking-tighter">
              <span className="bg-gradient-to-r from-slate-200/10 via-slate-300/20 to-slate-200/10 bg-clip-text text-transparent">
                POWER
              </span>
              <br />
              <span className="bg-gradient-to-r from-slate-300/15 via-slate-400/25 to-slate-300/15 bg-clip-text text-transparent">
                IN EVERY
              </span>
              <br />
              <span className="bg-gradient-to-r from-slate-200/20 via-slate-300/30 to-slate-200/20 bg-clip-text text-transparent">
                SIP
              </span>
            </h1>
          </div>

          {/* Main Content Container */}
          <div className="relative z-10 w-full px-8 md:px-12 mx-auto py-5 space-y-16 flex flex-col justify-center items-center">
            {/* Tagline */}
            <div className="text-center">
              <h2 className="text-3xl md:text-3xl lg:text-5xl font-black text-white shadow-2xl rounded-2xl p-2 tracking-tighter">
                <span className="text-primary">Power</span> in Every Sip
              </h2>
              <p className="text-xl md:text-xl text-white font-medium">
                Now in 6 Flavors
              </p>
            </div>

            {/* Buy Now Button */}
            <CustomButton text="Buy Now" onClick={() => alert("Clicked!")} />

            {/* Product Grid - Using Original Style */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-10 xl:gap-20 mx-auto">
              {sachets.map((src, index) => (
                <a key={index} href="#">
                  <img
                    src={src}
                    className={`rounded-xl duration-500 hover:-translate-y-12  w-full max-w-[5rem] sm:max-w-[9rem] object-cover hover:scale-150 hover:z-50 transform origin-bottom ${
                      index % 2 === 0
                        ? "rotate-0 md:rotate-6 hover:rotate-0"
                        : "rotate-0 md:-rotate-12 hover:rotate-0"
                    }`}
                    alt={`Sachet ${index + 1}`}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
