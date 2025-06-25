'use client'


import { 
  Public as GlobeAlt, 
  Shield as ShieldCheck, 
  AutoAwesome as Sparkles, 
  CalendarMonth as CalendarDays, 
  Group as UserGroup, 
  EmojiEvents as Trophy,
  Place as MapPin,
  Phone,
  ArrowRight
} from '@mui/icons-material';
import Head from 'next/head';
import Link from 'next/link';

const AboutPage = () => {
  // Team data
  const teamMembers = [
    { id: 1, name: "Annick Ukoha", role: "Founder & CEO" },
    { id: 2, name: "Koffi Agbessi", role: "Travel Consultant" },
    { id: 3, name: "Amina Touré", role: "Customer Relations" },
    { id: 4, name: "Jean-Luc Akpakpa", role: "Logistics Manager" }
  ];

  // Stats data
  const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "5,000+", label: "Happy Clients" },
    { value: "60+", label: "Destinations" },
    { value: "24/7", label: "Support" }
  ];

  return (
    <section className='md:pt-32 pt-22 '>
      <Head>
        <title>About Us | Proximite Services</title>
        <meta name="description" content="Discover our travel agency's story, mission, and the team dedicated to crafting your perfect journey" />
      </Head>

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] bg-gradient-to-r from-blue-900 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20 ">
          <svg viewBox="0 0 1000 500" className="w-full h-full">
            <path 
              d="M0,250 Q250,100 500,250 T1000,250" 
              fill="none" 
              stroke="white" 
              strokeWidth="2"
              strokeDasharray="5,5"
            />
          </svg>
        </div>
        
        <div className="container mx-auto h-full flex items-center px-6 relative z-10 ">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Crafting <span className="text-yellow-300">Exceptional</span> Travel Experiences
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              For over two decades, we've transformed travel dreams into unforgettable realities across Africa and beyond.
            </p>
            <Link 
              href="/tours" 
              className="inline-flex items-center px-8 py-3 bg-yellow-400 text-blue-900 font-bold rounded-lg hover:bg-yellow-300 transition-all duration-300 group"
            >
              Explore Our Tours
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
                Our Philosophy
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              More Than Just Travel – We Create <span className="text-blue-600">Connections</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12">
              At Proximite Services sarl, we believe travel should be transformative. Our mission is to design journeys that 
              immerse you in local cultures, create meaningful encounters, and leave you with stories to last a lifetime. 
              We handle every detail so you can focus on the experience.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <ShieldCheck className="text-green-500 mr-3" />
                  Our Promise
                </h3>
                <p className="text-gray-600">
                  Uncompromising safety standards, transparent pricing, and personalized service at every step of your journey.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <GlobeAlt className="text-blue-500 mr-3" />
                  Our Approach
                </h3>
                <p className="text-gray-600">
                  Sustainable tourism that benefits local communities while delivering authentic experiences to our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-96 w-full bg-blue-100">
                <svg 
                  viewBox="0 0 200 200" 
                  className="absolute w-full h-full text-blue-200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    fill="currentColor" 
                    d="M40,-74.3C52.2,-69.2,62.6,-59.1,71.5,-47.1C80.3,-35.1,87.6,-21.2,88.9,-6.6C90.2,8.1,85.5,23.4,76.8,36.8C68.1,50.1,55.4,61.4,40.9,70.3C26.4,79.1,10.1,85.5,-7.2,89.5C-24.5,93.5,-49,95.1,-65.1,84.8C-81.2,74.5,-89,52.3,-87.1,31.9C-85.2,11.5,-73.6,-7.1,-61.8,-23.7C-50,-40.3,-38,-54.9,-24.6,-59.7C-11.2,-64.5,3.6,-59.5,18.3,-55.1C33,-50.7,47.6,-46.9,40,-74.3Z" 
                    transform="translate(100 100)" 
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <Trophy className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
                    <h3 className="text-2xl font-bold text-blue-900">Award-Winning Service</h3>
                    <p className="text-blue-800 mt-2">Best Travel Agency 2023</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
                  Our Story
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                From Passion to Profession
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2012 by Annick Zonon Ukoha, Proximite Services Sarl began as a small travel agency in Cotonou, Benin Republic. 
                What started as a solo venture fueled by a passion for Africa and World tourism has grown into a team of 12 
                dedicated travel professionals serving clients across three continents.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
              
              <Link 
                href="/contact" 
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                Meet Our Team
                <ArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
                Our Difference
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Proximite <span className="text-blue-600">Advantage</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-10 h-10 text-yellow-500" />,
                title: "Tailored Itineraries",
                desc: "Every journey is custom-designed around your interests, pace, and budget"
              },
              {
                icon: <UserGroup className="w-10 h-10 text-green-500" />,
                title: "Local Expertise",
                desc: "Our team has personally visited 90% of the destinations we recommend"
              },
              {
                icon: <CalendarDays className="w-10 h-10 text-red-500" />,
                title: "Seamless Planning",
                desc: "From visas to vaccinations - we handle all logistics for stress-free travel"
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-100"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold tracking-wider text-yellow-400 uppercase">
                Meet The Team
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The People Behind Your <span className="text-yellow-300">Journey</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our multilingual team combines decades of industry experience with genuine passion for travel
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <div className="relative mx-auto mb-6 w-40 h-40 rounded-full overflow-hidden bg-blue-800">
                  <svg 
                    viewBox="0 0 200 200" 
                    className="absolute w-full h-full text-blue-700"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      fill="currentColor" 
                      d="M42.6,-58.3C55.7,-50.9,67.2,-40.5,73.3,-27.4C79.4,-14.3,80.1,1.6,75.6,15.6C71.1,29.6,61.5,41.7,49.4,52.5C37.3,63.3,22.7,72.8,5.7,75.5C-11.3,78.3,-30.6,74.3,-45.3,64.1C-60,53.9,-70.1,37.5,-75.9,19.3C-81.7,1.1,-83.2,-18.9,-75.3,-34.3C-67.4,-49.7,-50.1,-60.5,-33.3,-66.9C-16.5,-73.3,-0.2,-75.4,13.9,-71.6C28,-67.8,29.5,-65.8,42.6,-58.3Z" 
                      transform="translate(100 100)" 
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-yellow-300 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to start planning your personalized journey
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition flex items-center justify-center"
            >
              <Phone className="mr-2" />
              Call (+22901) 97 13 35 34
            </Link>
            <Link 
              href="/tours" 
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition flex items-center justify-center"
            >
              <MapPin className="mr-2" />
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutPage;