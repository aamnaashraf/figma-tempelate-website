const Hero = () => {
    return (
      <section className="bg-black text-white w-full min-h-screen flex"> {/* Updated background color */}
        <div className="container mx-auto flex items-center justify-between px-20">
          {/* Text Content */}
          <div>
            <p className="text-sm text-gray-400">Pro. Beyond</p> {/* Light gray for subtitle */}
            <h1 className="text-6xl font-bold mb-4">IPhone 14 Pro</h1> {/* White text */}
            <p className="text-lg text-gray-300 mb-6"> {/* Light gray for description */}
              Created to change everything for the better. For everyone.
            </p>
            <button className="px-12 py-3 border border-white bg-black text-white rounded-md hover:bg-gray-600">
              Shop Now
            </button> {/* White button with black text */}
          </div>
  
          {/* Image */}
          <div>
            <img src="/img 1.png" alt="iPhone 14 Pro" className="w-96" />
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;