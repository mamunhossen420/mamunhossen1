import Button from '@/components/form/Button';
import SectionTitle from '@/components/shared/SectionTitle';
import { FiCoffee } from 'react-icons/fi';
import { HiOutlineChartBar, HiOutlineFire, HiOutlineUsers } from 'react-icons/hi';
import ProgressBar from '@/components/shared/ProgressBar';

const AboutSection = () => {
  return (
    <>
      <SectionTitle>About Me</SectionTitle>

      <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:gap-8">
        {/* Bio */}
        <div className="">
          <p className="text-justify">
          Hello, I'm Mamun Hossen. I'm a Shopify Expert And Pagefly Landing Page Designer, Digital Marketer. I Have Over 2+ Years Of Working Experience In Those Sectors. I Will Design And Develop Every Website Secure, Fast, Seo-optimize, Mobile Responsive And User-friendly. Do You Want To Discuss Any Project Or Anything With Me? Without Hesitation, Contact Me. I Will Reply ASAP
          </p>
          <Button className="mt-5">Download CV</Button>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Shopify</h6>
              <p>90%</p>
            </div>
            <ProgressBar color="green" progress={90} />
          </div>
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Pagefly</h6>
              <p>93%</p>
            </div>
            <ProgressBar color="blue" progress={93} />
          </div>

          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Custom Coding</h6>
              <p>75%</p>
            </div>
            <ProgressBar color="rose" progress={75} />
          </div>
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Digital Marketing</h6>
              <p>50%</p>
            </div>
            <ProgressBar color="amber" progress={50} />
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineFire size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">99+</h2>
            <p className="mt-1">Projects Completed</p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <FiCoffee size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">60+</h2>
            <p className="mt-1">Cup of Coffee</p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineUsers size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">70+</h2>
            <p className="mt-1">Satisfied clients</p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineChartBar size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">2+</h2>
            <p className="mt-1">Years of experience</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
