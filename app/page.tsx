"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

// Typing Animation Component
interface TypedTextProps {
  text: string;
  speed?: number;
}

// Animated Service Card Component
interface AnimatedServiceCardProps {
  index: number;
  children: React.ReactNode;
}

const TypedText = ({ text, speed = 100 }: TypedTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed]);

  return (
    <span>
      {displayText}
      {!isComplete && <span className="inline-block w-1 h-8 bg-white ml-1 animate-pulse"></span>}
    </span>
  );
};



const AnimatedServiceCard = ({ index, children }: AnimatedServiceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a delay based on index for staggered animation
          setTimeout(() => {
            setIsVisible(true);
          }, index * 200);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, [ref, index]);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-in-out ${isVisible
        ? 'opacity-100 translate-y-0 scale-100'
        : 'opacity-0 translate-y-20 scale-95'
        } p-6 shadow-lg rounded-lg bg-gray-50`}
    >
      {children}
    </div>
  );
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const heroTitle = "Welcome to Axtech";

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-pink-800/95 shadow-lg py-3 px-8 backdrop-blur-sm'
          : 'bg-pink-800 shadow-md py-4 px-8'
          }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">Axtech Sdn Bhd</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#hero" className="text-white hover:text-pink-200 transition-colors">Home</a></li>
              <li><a href="#services" className="text-white hover:text-pink-200 transition-colors">Services</a></li>
              <li><a href="#about" className="text-white hover:text-pink-200 transition-colors">About Us</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="h-screen flex flex-col justify-center items-center text-center bg-blue-600 text-white p-8 relative">
        <Image src="/images/hero.jpg" alt="Hero Image" layout="fill" objectFit="cover" className="absolute inset-0 z-0" />
        <div className="relative z-10">
          <h1 className="text-7xl font-bold text-shadow-lg">
            <TypedText text={heroTitle} speed={150} />
          </h1>
          <p className="text-xl mt-4 text-shadow-md">Innovating mobile game development and tailored web applications</p>
          <p className="mt-6 text-lg text-shadow-sm">We are committed to delivering high-quality digital solutions that drive success and engagement.</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-8 bg-white text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedServiceCard index={0}>
              <div className="w-full aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/images/mobile_game.png"
                  alt="Mobile Game Development"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3 className="text-2xl font-semibold mt-4">Mobile Game Development</h3>
              <p className="mt-2">Creating immersive mobile gaming experiences with cutting-edge technology, engaging gameplay mechanics, and high-quality graphics. We specialize in developing games across multiple platforms to reach a wider audience.</p>
            </AnimatedServiceCard>

            <AnimatedServiceCard index={1}>
              <div className="w-full aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/images/mobile_app.png"
                  alt="Web & Mobile Apps"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3 className="text-2xl font-semibold mt-4">Web & Mobile Apps</h3>
              <p className="mt-2">Tailored solutions for businesses and consumers, ensuring seamless user experiences, robust security, and modern design aesthetics. We build scalable applications customized to your business needs.</p>
            </AnimatedServiceCard>

            <AnimatedServiceCard index={2}>
              <div className="w-full aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/images/consultation_strategy.png"
                  alt="Consultation & Strategy"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3 className="text-2xl font-semibold mt-4">Consultation & Strategy</h3>
              <p className="mt-2">Helping you build the right tech solutions through strategic planning, market analysis, and technical consultation. We provide guidance from ideation to execution to ensure the success of your projects.</p>
            </AnimatedServiceCard>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 px-8 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-8">About Us</h2>
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-auto relative rounded-lg overflow-hidden shadow-md">
            <div className="aspect-[2/1] relative">
              <Image
                src="/images/about_us.png"
                alt="About Axtech Team"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
          <p className="mt-6 text-lg">
            Axtech Sdn Bhd is a passionate team dedicated to crafting high-quality mobile games and web applications. Our mission is to bring innovation and engagement to the digital world.
          </p>
          <p className="mt-4 text-lg font-semibold">Company Address:</p>
          <p className="text-md">1-12-23, Suntech Penang Cybercity, Lintang Mayang Pasir 1, Bandar Bayan Baru,</p>

          <p className="text-md">11900, Bayan Lepas, Penang, Malaysia</p>

          <p className="mt-4 text-lg font-semibold">Contact Us:</p>
          <p className="text-lg">Email: <a href="mailto:care@axtech.app" className="text-blue-600 hover:underline">care@axtech.app</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-white text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Axtech Sdn Bhd. All Rights Reserved.</p>
        <div className="mt-2">
          <Link href="/privacy-policy" legacyBehavior>
            <a className="text-blue-400 hover:underline">Privacy Policy</a>
          </Link> |
          <Link href="/terms-of-use" legacyBehavior>
            <a className="text-blue-400 hover:underline"> Terms of Use</a>
          </Link>
        </div>
      </footer>
    </div>
  );
}