

function Banner() {
  return (
    <div className="bg-teal-800 py-40 mt-10 rounded-3xl flex justify-around items-center gap-20 mb-20">
      {/* <Image
        src={banner}
        width={500}
        height={500}
        alt="Picture of the banner"
      /> */}

      <div className="space-y-10">
        <h1 className="text-5xl text-orange-400 text-center">Hathazari Computer Center</h1>
        <p className="text-2xl text-slate-900 text-center">Build Your Own Computer - HCC</p>
      </div>
    </div>
  );
}

export default Banner;
