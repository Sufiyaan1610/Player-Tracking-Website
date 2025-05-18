import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight text-white mb-6">
              Smarter Player Tracking
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-xl">
              Real-time insights for athletes and coaches. Optimize performance, reduce injury risks, and elevate game strategy with intelligent data.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition">
                Get Started
              </Button>
              <Button variant="outline" className="border-yellow-400 text-yellow-400 px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] sm:h-[500px]">
            <Image
              src="/hero.png"
              alt="Hero Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-neutral-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-6">About Us</h2>
          <p className="text-gray-300 text-lg">
            At Orion Labs, we transform sports tracking with cutting-edge technology—delivering real-time video insights, dynamic pose estimation, and data-driven precision to elevate every game. Our innovative system seamlessly integrates into practical applications, providing tangible value that redefines athletic performance.
          </p>
        </div>
      </section>

      {/* Work Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold text-yellow-400 mb-12 text-center">Our Work</h2>
          <p className="text-gray-300 text-center mb-16 max-w-3xl mx-auto text-lg">
            Improving the tracking and data analytics capabilities with live and dynamic video analysis and pose estimation technology, and integrating the system into practical applications to bring tangible value to users.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { name: 'basketball', img: '/basketball.jpg' },
              { name: 'football', img: '/football.jpg' },
              { name: 'volleyball', img: '/volleyball.jpg' },
              { name: 'badminton', img: '/badminton.jpg' }
            ].map((sport) => (
              <div key={sport.name} className="bg-neutral-800 p-8 rounded-3xl shadow-2xl hover:bg-neutral-700 transition transform hover:scale-110">
                <Image src={sport.img} alt={sport.name} width={200} height={200} className="mx-auto mb-8 rounded-xl" />
                <p className="capitalize font-extrabold text-xl text-white">{sport.name} Tracking</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/7chU45KjyK0?autoplay=1&loop=1&playlist=7chU45KjyK0"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold text-yellow-400 mb-12 text-center">Services Offered</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              { title: 'Performance Analytics', img: '/performance.jpg' },
              { title: 'Tactical Insights', img: '/tactics.jpg' },
              { title: 'Injury Prevention & Health Monitoring', img: '/injury.jpg' }
            ].map((service) => (
              <div key={service.title} className="bg-neutral-800 p-8 rounded-3xl shadow-2xl hover:bg-neutral-700 transition transform hover:scale-110">
                <Image src={service.img} alt={service.title} width={200} height={200} className="mx-auto mb-8 rounded-xl" />
                <h3 className="text-2xl font-extrabold text-yellow-300 mb-4">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-12">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Coach Emily R.', quote: 'This platform completely changed the way we analyze our games. Real-time feedback is a game-changer!' },
              { name: 'Athlete Jordan K.', quote: 'I feel safer and more prepared knowing my performance is being tracked and optimized every second.' }
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-neutral-800 p-6 rounded-lg shadow-md hover:bg-neutral-700 transition">
                <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-yellow-400 font-semibold">– {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
