import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiCode, FiDribbble, FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import Button from '@/components/form/Button';
import HeroBackground from './HeroBackground';
import Typed from 'react-typed';

const HeroSection = () => {
  return (
    <div className="hero relative -mt-16 flex items-center justify-center">
      <HeroBackground />
      <div className="flex flex-col items-center">
        <div className="overflow-hidden rounded-full">
          <Image src="/images/avatar/mamun.jpg" width={180} height={180} alt="avatar" />
        </div>
        <h1 className="mt-4 text-3xl font-bold ">Mamun Hossen</h1>
        <div className="mt-2 flex gap-1">
          {' '}
          I'm a{' '}
          <Typed
            strings={['Shopify Expert', 'Shopify Landing Page & Product Page Designer', ' Digital Marketer']}
            typeSpeed={60}
            backSpeed={30}
            loop
          />
        </div>
        <div className="mt-4  flex gap-5">
          <Link href="https://www.linkedin.com/in/mamun-hossen-694206257">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500">
              <FiLinkedin size={25} />
            </a>
          </Link>
          <Link href="https://twitter.com/Dev_Mamun_">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500">
              <FiTwitter size={25} />
            </a>
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61552392239815">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500">
              <FiFacebook size={25} />
            </a>
          </Link>
          <Link href="https://github.com/mamunhossen420">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500">
              <FiGithub size={25} />
            </a>
          </Link>
        </div>
        <Button className="mt-5 px-8">
          <a href="http://fiverr.com/dev_mamun_" target="_blank" rel="noopener noreferrer">Hire Me</a>
        </Button>
      </div>

      <div className="absolute bottom-0 flex flex-col items-center ">
        <p className="mb-3 text-sm">Scroll Down</p>
        <div className="relative flex h-7 w-5 justify-center rounded-full border-2 border-gray-600 dark:border-gray-100">
          <div className="animate-scroll absolute h-1 w-1 bg-gray-600 dark:bg-gray-100" style={{ top: '6px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
