import React from "react";
import imageMap from "../../utils/imageMap";
import TeamCard, { teamMembers } from "../Common/TeamCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const About = () => (
    <section className="lg:py-20 py-10">
        <div className="md:container w-full mx-auto px-4">
            {/* Our Mission */}
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 gap-6 items-center flex flex-col-reverse lg:pb-20 pb-10">
                <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                    <p className="text-gray-700 mb-4">
                        We believe everyone deserves access to high-quality, cutting-edge technology built with sustainable manufacturing practices. Our mission is to make premium electronics more accessible while supporting ethical manufacturers and reducing environmental impact.
                    </p>
                    <p className="text-gray-700 mb-4">
                        By cutting out the middleman and working directly with manufacturers committed to quality and innovation, we can deliver devices that feature the latest technology, preserving maximum performance and value.
                    </p>
                    <p className="text-gray-700 mb-4">
                        We are driven by a commitment to transparency, fairness, and continuous improvement. Our goal is not only to offer exceptional products but also to promote responsible consumption and empower conscious choices in the tech industry.
                    </p>
                    <p className="text-gray-700">
                        Working directly with manufacturers committed to quality and innovation, we can deliver but also to promote responsible consumption and empower conscious reducing environmental.
                    </p>
                </div>
                <div className="rounded-lg overflow-hidden relative pt-[60%] w-full">
                    <img src={imageMap.aboutImage} alt="about-image" className="w-full h-full object-cover absolute inset-0" />
                </div>
            </div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 gap-6 items-center lg:pb-20 pb-10">
                <div className="rounded-lg overflow-hidden relative pt-[60%] w-full">
                    <img src={imageMap.aboutImage2} alt="about-image" className="w-full h-full object-cover absolute inset-0" />
                </div>
                <div className="mt-6 lg:mt-0">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Driven by Innovation, Guided by Purpose</h2>
                    <p className="text-gray-700 mb-4">
                        At the heart of everything we do is a passion for creating smarter, more sustainable technology solutions that elevate everyday life. We’re redefining what it means to own electronics by focusing on innovation, accessibility, and environmental responsibility.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Our direct-to-consumer approach eliminates unnecessary costs and barriers, allowing us to deliver premium devices without compromise. Each product reflects our dedication to thoughtful design, advanced performance, and long-term value.
                    </p>
                    <p className="text-gray-700 mb-4">
                        We collaborate with forward-thinking manufacturers who share our ethical and eco-conscious values, ensuring every step of our process—from sourcing to shipping—supports a cleaner, fairer future for all.
                    </p>
                    <p className="text-gray-700">
                        We are driven by a commitment to transparency, fairness, and continuous improvement. Our goal is not only to approach eliminates but also to promote responsible consumption and empower conscious choices in the tech industry.
                    </p>
                </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 lg:gap-6 gap-4 lg:pb-20 pb-10">
                <div className="bg-primary text-white lg:p-6 p-4 rounded-lg text-center">
                    <span className="font-heading font-bold lg:text-4xl text-3xl mb-2 block">45</span>
                    <span className="text-white text-opacity-90">Brand Partners</span>
                </div>
                <div className="bg-primary text-white lg:p-6 p-4 rounded-lg text-center">
                    <span className="font-heading font-bold lg:text-4xl text-3xl mb-2 block">100</span>
                    <span className="text-white text-opacity-90">Quality Guarantee</span>
                </div>
                <div className="bg-primary text-white lg:p-6 p-4 rounded-lg text-center">
                    <span className="font-heading font-bold lg:text-4xl text-3xl mb-2 block">10,000</span>
                    <span className="text-white text-opacity-90">Happy Customers</span>
                </div>
                <div className="bg-primary text-white lg:p-6 p-4 rounded-lg text-center">
                    <span className="font-heading font-bold lg:text-4xl text-3xl mb-2 block">25,000</span>
                    <span className="text-white text-opacity-90">Monthly Shipments</span>
                </div>
            </div>
            {/* Our Team */}
            <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 md:mb-8 mb-4 text-center">Meet Our Team</h2>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={32}
                    slidesPerView={1}
                    breakpoints={{
                        576: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 }
                    }}
                    className="team-swiper"
                >
                    {teamMembers.map(member => (
                        <SwiperSlide key={member.name}>
                            <TeamCard {...member} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </section>
);

export default About;
