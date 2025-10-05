import React from "react";
import imageMap from "../../utils/imageMap";

export const teamMembers = [
  {
    name: "Emily Johnson",
    role: "Founder & CEO",
    image: imageMap.team1,
    bio: "Former tech engineer with a passion for making cutting-edge technology accessible to everyone."
  },
  {
    name: "Michael Chen",
    role: "Head of Operations",
    image: imageMap.team2,
    bio: "Supply chain expert focused on creating efficient, eco-friendly distribution systems."
  },
  {
    name: "Sophia Rodriguez",
    role: "Lead Product Developer",
    image: imageMap.team3,
    bio: "Technology specialist who helps curate our product selection and evaluates emerging tech trends."
  },
  {
    name: "David Thompson",
    role: "Manufacturer Relations",
    image: imageMap.team4,
    bio: "Works directly with our network of trusted manufacturers to ensure quality and ethical practices."
  }
];

const TeamCard = ({ name, role, image, bio }) => (
  <div className="text-center h-full">
    <img src={image} alt={name} className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
    <h3 className="font-heading font-semibold text-xl mb-1">{name}</h3>
    <p className="text-primary font-medium mb-3">{role}</p>
    <p className="text-gray-600 text-sm line-clamp-2">{bio}</p>
  </div>
);

export default TeamCard;
