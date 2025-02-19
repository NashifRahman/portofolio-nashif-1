function VerticalTimeline() {
  return (
    <div className="hidden md:flex flex-col items-center md:mr-5">
      {/* Garis Vertikal */}
      <div className="w-1 bg-gray-300 h-[164px] relative">
        {/* Titik Atas */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-300 rotate-45"></div>
        {/* Titik Bawah */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-300 rotate-45"></div>
      </div>

      {/* Teks di Bawah */}
      <div className="mt-8 text-white -rotate-90 text-sm font-bold">
        BioData
      </div>
    </div>
  );
}

export default VerticalTimeline