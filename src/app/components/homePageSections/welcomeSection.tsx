import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Blue geometric background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600 to-blue-700 transform skew-x-12 origin-top-right hidden lg:block"></div>

      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-16">
        {/* Header with logo */}
        <div className="flex justify-between items-start mb-8 lg:mb-12">
          <div className="flex-1 mt-40">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-2">
              Welcome to <span className="text-blue-600">MTSI</span>
            </h1>
          </div>

          {/* Logo section - visible on larger screens */}
          <div className="hidden lg:flex flex-col items-center bg-blue-600 text-white p-4 rounded-lg ml-8">
            <div className="text-sm font-semibold text-center mb-2">
              MT SOLUTIONS
              <br />
              Incorporated
            </div>
            <div className="w-12 h-12 bg-white rounded border-4 border-white flex items-center justify-center">
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">M</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            {/* Mobile logo */}
            <div className="lg:hidden flex items-center justify-center bg-blue-600 text-white p-4 rounded-lg mb-6">
              <div className="text-center">
                <div className="text-sm font-semibold mb-2">
                  MT SOLUTIONS Incorporated
                </div>
                <div className="w-10 h-10 bg-white rounded border-2 border-white flex items-center justify-center mx-auto">
                  <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">M</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-gray-700  md:text-base leading-relaxed">
              <p className="text-xl">
                At MT Solutions Incorporated [MTSI], we are more than just a
                consulting firm; we are your dedicated partners in achieving
                excellence. With a commitment to helping individuals and
                organizations navigate their most pressing challenges, we offer
                strategic insights, innovative solutions, and practical guidance
                tailored to your unique needs.
              </p>

              <p className="text-xl">
                We promise convenience and security in all your dealings for
                your peace of mind.
              </p>
            </div>

            {/* Decorative lines */}
            <div className="flex items-center space-x-2 my-6">
              <div className="w-8 h-1 bg-blue-600"></div>
              <div className="w-4 h-1 bg-blue-400"></div>
              <div className="w-2 h-1 bg-blue-300"></div>
            </div>
          </div>

          {/* Right content - Image and CEO info */}
          <div className="relative">
            <div className="relative">
              {/* Professional photo */}
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-[3/4] relative overflow-hidden rounded-lg shadow-2xl">
                  <Image
                    src="/img1.jpg"
                    alt="Atty. Mark Aaron B. Tinambunan, CEO of MT Solutions Incorporated"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* CEO label */}
                <div className="absolute bottom-4 left-4 right-4 bg-blue-600 text-white p-3 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="font-semibold text-sm md:text-base">
                      Atty. Mark Aaron B. Tinambunan
                    </div>
                    <div className="text-xs md:text-sm opacity-90">
                      CEO of MT Solutions Incorporated
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page indicator */}
        <div className="mt-12 lg:mt-16">
          <span className="text-blue-600 font-semibold text-sm">Page 1</span>
        </div>
      </div>

      {/* Mobile blue accent */}
      <div className="lg:hidden absolute top-0 right-0 w-20 h-32 bg-blue-600 transform skew-x-12"></div>
    </section>
  );
}
