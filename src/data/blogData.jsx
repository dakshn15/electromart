import imageMap from "../utils/imageMap";

const blogs = [
  {
    id: 1,
    image: imageMap.blog1,
    bannerImg: imageMap.blogMain,
    date: "May 12, 2025",
    link: "/blogs/the-future-technology-what-to-expect",
    title: "The Future Technology: What to Expect",
    category: "Technology",
    author: "David Chen",
    authorImg: imageMap.team1,
    authorBio: "David Chen is a tech innovation lead, passionate about the future of consumer electronics and AI.",
    readTime: "6 min read",
    tags: ["#TechTips", "#5G", "#FutureTech", "#ElectroMart"],
    excerpt: "Explore how 5G is revolutionizing the way we connect and interact with devices and what the future holds.",
    details: "5G technology is set to revolutionize connectivity, enabling faster speeds, lower latency, and new possibilities for smart devices. In this article, we explore the impact of 5G on consumer electronics, its role in IoT, and what the future holds for tech enthusiasts. From smart homes to autonomous vehicles, 5G will be the backbone of next-gen innovation.",
    body: [
      { type: "heading", content: "Introduction to 5G" },
      { type: "paragraph", content: "5G technology is transforming the way we connect, communicate, and interact with devices. With ultra-fast speeds and low latency, 5G opens up new possibilities for smart homes, autonomous vehicles, and IoT devices." },
      { type: "heading", content: "Key Benefits of 5G" },
      { type: "list", items: [
        "Faster download and upload speeds",
        "Lower latency for real-time applications",
        "Support for massive IoT connectivity",
        "Enhanced reliability and coverage"
      ] },
      { type: "paragraph", content: "The impact of 5G goes beyond smartphones. It will enable smart cities, connected vehicles, and advanced healthcare solutions. Tech enthusiasts can expect a wave of innovation as 5G networks expand globally." },
      { type: "heading", content: "5G in Consumer Electronics" },
      { type: "paragraph", content: "From smart TVs to wearable devices, 5G will be integrated into a wide range of consumer electronics. This means seamless streaming, instant downloads, and smarter device interactions." },
      { type: "heading", content: "The Future of Connectivity" },
      { type: "paragraph", content: "As 5G adoption grows, we will see new business models, services, and experiences. The future is bright for technology lovers, with endless opportunities for innovation and growth." },
      { type: "tags", tags: ["#TechTips", "#5G", "#FutureTech", "#ElectroMart"] }
    ]
  },
  {
    id: 2,
    image: imageMap.blog2,
    bannerImg: imageMap.blog2,
    date: "May 12, 2025",
    link: "/blogs/top-10-smart-home-devices-2025",
    title: "Top 10 Smart Home Devices for 2025",
    category: "Smart Home",
    author: "Sarah Lee",
    authorImg: imageMap.team2,
    authorBio: "Sarah Lee is a smart home expert and reviewer, helping readers choose the best devices for their needs.",
    readTime: "5 min read",
    tags: ["#SmartHome", "#Devices", "#2025", "#ElectroMart"],
    excerpt: "Discover the most innovative and useful smart home devices that are making waves in 2025.",
    details: "2025 brings a new wave of smart home devices, from AI-powered assistants to energy-saving thermostats. We review the top 10 gadgets that are transforming homes, improving convenience, security, and sustainability. Learn which devices are worth your investment and how to integrate them into your daily life.",
    body: [
      { type: "heading", content: "Smart Home Revolution" },
      { type: "paragraph", content: "Smart home devices are changing the way we live, making our homes more convenient, secure, and energy-efficient. In 2025, the market is filled with innovative gadgets that cater to every need." },
      { type: "heading", content: "Top 10 Devices" },
      { type: "list", items: [
        "AI-powered voice assistants",
        "Smart thermostats for energy savings",
        "Automated lighting systems",
        "Smart security cameras",
        "Connected door locks",
        "Smart plugs and outlets",
        "Home health monitors",
        "Smart refrigerators",
        "Robotic vacuum cleaners",
        "Wireless charging stations"
      ] },
      { type: "paragraph", content: "These devices not only add convenience but also help reduce energy consumption and improve home safety. Integration with mobile apps allows users to control their homes from anywhere." },
      { type: "heading", content: "Choosing the Right Device" },
      { type: "paragraph", content: "When selecting smart home devices, consider compatibility, ease of use, and long-term support. Look for products that integrate well with your existing ecosystem." },
      { type: "tags", tags: ["#SmartHome", "#Devices", "#2025", "#ElectroMart"] }
    ]
  },
  {
    id: 3,
    image: imageMap.blog3,
    bannerImg: imageMap.blog3,
    date: "May 12, 2025",
    link: "/blogs/gaming-tech-trends-2025",
    title: "Gaming Tech Trends: What's Hot in 2025",
    category: "Gaming",
    author: "Alex Kim",
    authorImg: imageMap.team3,
    authorBio: "Alex Kim is a gaming technology analyst, covering the latest trends in consoles, VR, and esports.",
    readTime: "7 min read",
    tags: ["#Gaming", "#TechTrends", "#VR", "#ElectroMart"],
    excerpt: "From next-gen consoles to VR innovations, here's what's trending in the gaming technology space.",
    details: "Gaming in 2025 is all about immersive experiences, cloud gaming, and virtual reality. We dive into the hottest trends, new hardware releases, and the future of esports. Whether you're a casual gamer or a pro, these innovations will shape your play.",
    body: [
      { type: "heading", content: "Gaming in 2025" },
      { type: "paragraph", content: "The gaming industry is evolving rapidly, with new technologies enhancing player experiences. In 2025, expect more immersive gameplay and advanced hardware." },
      { type: "heading", content: "Hot Tech Trends" },
      { type: "list", items: [
        "Next-gen gaming consoles",
        "Virtual reality headsets",
        "Cloud gaming platforms",
        "AI-driven game design",
        "Esports growth and tournaments"
      ] },
      { type: "paragraph", content: "Virtual reality and cloud gaming are making games more accessible and engaging. AI is being used to create smarter NPCs and dynamic worlds." },
      { type: "heading", content: "Future of Esports" },
      { type: "paragraph", content: "Esports continues to grow, with larger audiences and bigger prize pools. Gamers can look forward to more competitive events and new opportunities." },
      { type: "tags", tags: ["#Gaming", "#TechTrends", "#VR", "#ElectroMart"] }
    ]
  },
  {
    id: 4,
    image: imageMap.blog4,
    bannerImg: imageMap.blog4,
    date: "June 5, 2025",
    link: "/blogs/ai-in-everyday-life-2025-update",
    title: "AI in Everyday Life: 2025 Update",
    category: "AI & Life",
    author: "Priya Singh",
    authorImg: imageMap.team4,
    authorBio: "Priya Singh is an AI researcher and writer, exploring how artificial intelligence is changing our routines.",
    readTime: "6 min read",
    tags: ["#AI", "#EverydayTech", "#2025", "#ElectroMart"],
    excerpt: "A look at how artificial intelligence is shaping our daily routines and the tech to watch this year.",
    details: "Artificial intelligence is now part of everyday life, from smart assistants to personalized recommendations. This article covers the latest AI applications, privacy concerns, and what consumers should expect in the coming years.",
    body: [
      { type: "heading", content: "AI in Daily Life" },
      { type: "paragraph", content: "Artificial intelligence is everywhere, from smart assistants to personalized recommendations. In 2025, AI is making our routines easier and more efficient." },
      { type: "heading", content: "Latest AI Applications" },
      { type: "list", items: [
        "Smart voice assistants",
        "AI-powered health trackers",
        "Personalized shopping recommendations",
        "Automated home systems",
        "AI-driven security solutions"
      ] },
      { type: "paragraph", content: "AI is helping us save time, improve health, and stay secure. Privacy concerns remain, but new regulations and technologies are addressing these issues." },
      { type: "heading", content: "What to Expect Next" },
      { type: "paragraph", content: "Consumers should expect even more AI integration in daily life, with smarter devices and better user experiences." },
      { type: "tags", tags: ["#AI", "#EverydayTech", "#2025", "#ElectroMart"] }
    ]
  }
];

export default blogs;
