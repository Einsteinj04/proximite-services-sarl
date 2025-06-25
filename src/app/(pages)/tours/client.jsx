'use client'

// const client = () => {
//   return (
//     <div>client</div>
//   )
// }

// export default client
import { 
  Flight, 
  Hotel, 
  DirectionsBus, 
  DirectionsBoat, 
  Hiking, 
  Star, 
  FilterAlt,
  Search,
  CalendarToday,
  Phone,
  Shield as ShieldCheck,
  People,
  Place,
  ArrowRight
} from '@mui/icons-material';
import Head from 'next/head';
import Link from 'next/link';

const ToursPage = () => {
  // Sample tour data
  const tours = [
    {
      id: 1,
      title: "Benin Cultural Heritage Tour",
      description: "7-day immersion into Benin's rich history and traditions, visiting Ouidah, Abomey, and Ganvié",
      type: "Cultural",
      duration: "7 days",
      price: "$250",
      rating: 4.8,
      image: "/cultural-tour.svg"
    },
    {
      id: 2,
      title: "Togolese Coastal Escape",
      description: "5-day beach retreat with visits to Lomé's markets and relaxing at Aneho beaches",
      type: "Beach",
      duration: "5 days",
      price: "$380",
      rating: 4.5,
      image: "/beach-tour.svg"
    },
    {
      id: 3,
      title: "Ghana Adventure Expedition",
      description: "10-day journey through Kakum National Park, Mole Game Reserve, and Cape Coast Castle",
      type: "Adventure",
      duration: "10 days",
      price: "$620",
      rating: 4.9,
      image: "/adventure-tour.svg"
    },
    {
      id: 4,
      title: "Nigerian Business Class Tour",
      description: "Premium 5-day tour of Lagos and Abuja with luxury accommodations and private transfers",
      type: "Business",
      duration: "5 days",
      price: "$850",
      rating: 4.7,
      image: "/business-tour.svg"
    },
    {
      id: 5,
      title: "Burkina Faso Safari Adventure",
      description: "8-day wildlife experience in W National Park with expert guides",
      type: "Safari",
      duration: "8 days",
      price: "$550",
      rating: 4.6,
      image: "/safari-tour.svg"
    },
    {
      id: 6,
      title: "Ivory Coast Culinary Journey",
      description: "6-day food tour through Abidjan's markets and cooking classes with local chefs",
      type: "Culinary",
      duration: "6 days",
      price: "$490",
      rating: 4.4,
      image: "/culinary-tour.svg"
    }
  ];

  const tourTypes = [
    { name: "All Tours", icon: <Flight className="text-blue-500" /> },
    { name: "Cultural", icon: <DirectionsBoat className="text-amber-500" /> },
    { name: "Beach", icon: <Hotel className="text-teal-500" /> },
    { name: "Adventure", icon: <Hiking className="text-green-500" /> },
    { name: "Business", icon: <DirectionsBus className="text-purple-500" /> }
  ];

  return (
    <section className='md:pt-32 pt-22 '>
      <Head>
        <title>Tour Packages | Proximite Services</title>
        <meta name="description" content="Explore our curated collection of unforgettable travel experiences across West Africa and beyond" />
      </Head>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] bg-gradient-to-r from-blue-900 to-indigo-800 flex items-center">
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 1000 500" className="w-full h-full">
            <path 
              d="M0,250 Q250,400 500,250 T1000,250" 
              fill="none" 
              stroke="white" 
              strokeWidth="2"
              strokeDasharray="10,5"
            />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Discover <span className="text-yellow-300">Extraordinary</span> Journeys
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Handcrafted tours designed to immerse you in authentic experiences across West Africa
          </p>
          
          <div className="max-w-2xl mx-auto relative">
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-lg">
              <Search className="text-gray-400 mr-2" />
              <input 
                type="text" 
                placeholder="Search destinations, tours, or experiences..." 
                className="flex-grow outline-none text-gray-700 bg-transparent"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Filter */}
      <section className="py-12 bg-white sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-4 overflow-x-auto pb-2 w-full md:w-auto">
              {tourTypes.map((type, index) => (
                <button 
                  key={index}
                  className={`flex items-center px-4 py-2 rounded-full whitespace-nowrap transition-all ${index === 0 ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
                >
                  <span className="mr-2">{type.icon}</span>
                  {type.name}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                <FilterAlt className="mr-2 text-gray-600" />
                Filters
              </button>
              <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white hover:bg-gray-50">
                <option>Sort By: Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Duration</option>
                <option>Rating</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div 
                key={tour.id} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 bg-blue-100">
                  <svg 
                    viewBox="0 0 300 200" 
                    className="absolute w-full h-full text-blue-200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      fill="currentColor" 
                      d="M0,0 C50,100 150,50 300,100 L300,0 Z" 
                    />
                  </svg>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="text-yellow-400 mr-1 w-4 h-4" />
                    {tour.rating}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {tour.type}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {tour.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <CalendarToday className="mr-1 w-4 h-4" />
                        {tour.duration}
                      </span>
                      <span className="flex items-center">
                        <People className="mr-1 w-4 h-4" />
                        Small Group
                      </span>
                    </div>
                    
                    <div className="text-lg font-bold text-blue-600">
                      {tour.price}
                      <span className="text-sm font-normal text-gray-500"> /person</span>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/tours/${tour.id}`}
                    className="mt-6 inline-flex items-center justify-center w-full py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors group-hover:border-blue-700 group-hover:text-blue-700"
                  >
                    View Details
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-16 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">
                Previous
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                1
              </button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">
                2
              </button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">
                3
              </button>
              <span className="px-2">...</span>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">
                8
              </button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Can't Find Your Perfect Tour?
            </h2>
            <p className="text-xl mb-8">
              Our travel specialists can design a completely customized itinerary tailored to your interests, budget, and schedule.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition flex items-center justify-center"
              >
                <Phone className="mr-2" />
                Request Custom Tour
              </Link>
              <Link 
                href="/destinations" 
                className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition flex items-center justify-center"
              >
                <Place className="mr-2" />
                Browse All Destinations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Book With <span className="text-blue-600">Proximite Services Sarl</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We go beyond standard tours to deliver truly exceptional experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-10 h-10 text-yellow-500" />,
                title: "Local Expertise",
                description: "Our team has personally visited every destination we offer, ensuring authentic recommendations"
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-green-500" />,
                title: "Financial Protection",
                description: "All bookings are fully insured and protected for your peace of mind"
              },
              {
                icon: <Flight className="w-10 h-10 text-blue-500" />,
                title: "Seamless Logistics",
                description: "From visas to airport transfers - we handle every detail of your journey"
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default ToursPage;