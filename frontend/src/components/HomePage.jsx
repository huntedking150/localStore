import {
  Search,
  Camera,
  SlidersHorizontal,
  Hotel,
  ArrowRight,
} from 'lucide-react';
import { Input } from './ui/input.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

import { useState, useEffect } from 'react';

const categories = [
  'Stationary',
  'Local Food Stalls',
  'Marts',
  'Malls',
  'Vegetables',
  'Bakery',
  'Bike Service',
  'Wine Shops',
  'Grocery',
  'Meat Shop',
  '99 Services',
  'Hospitals',
  'Hotels',
  'Pharmacy',
  'deleteme',
];

const HomePage = () => {
  const [showFooter, setShowFooter] = useState(false);
  const [isContentShort, setIsContentShort] = useState(false);

  useEffect(() => {
    const checkContentHeight = () => {
      const contentHeight = document.body.scrollHeight;
      const viewportHeight = window.innerHeight;
      setIsContentShort(contentHeight <= viewportHeight); // Check if content is shorter than the viewport
    };

    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 1;
      setShowFooter(isAtBottom || isContentShort); // Show footer at bottom or if content is short
    };

    checkContentHeight(); // Initial check
    window.addEventListener('resize', checkContentHeight); // Recheck on window resize
    window.addEventListener('scroll', handleScroll); // Check on scroll

    return () => {
      window.removeEventListener('resize', checkContentHeight);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isContentShort]);

  return (
    <div
      className="min-h-screen  pb-24"
      //  bg-lime-100
      style={{ backgroundColor: '#c29941b3' }}
    >
      {/* Header */}

      <Navbar />

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-64 p-4 bg-lime/100">
          <h2 className="text-xl font-semibold mb-4">Shops Nearby</h2>
          <nav className="space-y-2">
            {categories.map((category) => (
              <a
                key={category}
                href={`/category/${category.toLowerCase().replace(' ', '-')}`}
                className="block p-2 rounded bg-blue-200/50 hover:bg-blue-300/50 transition-colors"
              >
                {category}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">
                Order seamlessly, and Save your time
              </h1>
              <p className="text-xl">Find your local stores instantly</p>
            </div>

            {/* Search Bar */}
            <div className="flex  items-center gap-2 p-2 bg-slate-200 rounded-lg sticky top-1 z-10  w-full md:w-auto shadow-md md:shadow-none">
              <Search className="w-8 h-5 text-gray-600 " />

              <Input
                type="search"
                placeholder="Search for products"
                className="flex-1 border-0 focus-visible:ring-0"
              />

              <div className="flex item-center h-full w-24 space-x-3 ml-3">
                <a href="">
                  <Camera className="w-5 h-5" />
                </a>

                <a href="">
                  <SlidersHorizontal className="w-5 h-5" />
                </a>
                <a href="">
                  <Hotel className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Popular Items */}
            <div>
              <h2 className="text-2xl font-semibold text-red-600 mb-4">
                Most Popular today 🔥
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[...Array(19)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-orange-300 rounded-lg hover:scale-105 transition-transform cursor-pointer"
                  />
                ))}
                <button>
                  <div
                    key={20}
                    className="aspect-square bg-orange-200 rounded-lg hover:scale-105 transition-transform cursor-pointer flex items-center justify-center"
                  >
                    <ArrowRight className="w-10 h-10" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* Footer */}

      <div
        className={`transition-all duration-300 ease-in-out ${
          showFooter
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-full'
        } fixed bottom-0 left-0 w-full`}
      >
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
