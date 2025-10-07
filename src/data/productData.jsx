import imageMap from "../utils/imageMap";
export const products = [
  {
    id: 1,
    name: "Ultra HD Smart Watch Pro",
    brand: "ElectroMart",
    images: [
      imageMap.product1,
      imageMap.product2,
      imageMap.product3,
      imageMap.product4,
      imageMap.product5,
    ],
    image: imageMap.product1,
    link: "/products/ultra-hd-smart-watch-pro",
    price: 249.99,
    oldPrice: 299.99,
    category: "Wearables",
    rating: 4.7,
    ratingCount: 120,
    badge: { type: "sale", text: "17% OFF" },
    wishlist: true,
    compare: true,
    inStock: true,
    desc: "Premium smartwatch with fitness tracking, heart rate monitor, and customizable watch faces.",
    features: [
      "Bluetooth 5.3 with auto-pairing",
      "Active Noise Cancellation (ANC)",
      "USB-C fast charging case",
      "IPX5 water and sweat resistant"
    ],
    specs: [
      { label: "Display", value: "1.8\" AMOLED, 60Hz" },
      { label: "Processor", value: "Snapdragon Wear 4100" },
      { label: "RAM", value: "2GB" },
      { label: "Storage", value: "32GB" },
      { label: "Battery", value: "400mAh, Fast Charging" },
      { label: "Connectivity", value: "Bluetooth 5.3, Wi-Fi, GPS" },
    ],
    boxContents: [
      "Ultra HD Smart Watch Pro",
      "Magnetic Charging Cable",
      "Quick Start Guide",
      "Extra Silicone Strap"
    ]
  },
  {
    id: 2,
    name: "Noise Cancelling Headphones",
    brand: "SoundMax",
    images: [imageMap.product2, imageMap.product3, imageMap.product4],
    image: imageMap.product2,
    link: "/products/noise-cancelling-headphones",
    price: 149.99,
    oldPrice: null,
    category: "Audio",
    rating: 4.5,
    ratingCount: 98,
    badge: { type: "new", text: "NEW" },
    wishlist: true,
    compare: true,
    inStock: true,
    desc: "Experience immersive sound with advanced noise cancellation and long battery life.",
    features: [
      "Hybrid Active Noise Cancellation",
      "40mm dynamic drivers",
      "Up to 30 hours playtime",
      "Comfort-fit memory foam earcups"
    ],
    specs: [
      { label: "Driver Size", value: "40mm" },
      { label: "Battery Life", value: "30 hours" },
      { label: "Charging Port", value: "USB-C" },
      { label: "Bluetooth", value: "5.0" },
      { label: "Weight", value: "250g" }
    ],
    boxContents: [
      "Noise Cancelling Headphones",
      "Carrying Case",
      "USB-C Charging Cable",
      "User Manual"
    ]
  },
  {
    id: 3,
    name: "UltraBook X15 Laptop",
    brand: "UltraBook",
    images: [imageMap.product3, imageMap.product1, imageMap.product2],
    image: imageMap.product3,
    link: "/products/ultrabook-x15-laptop",
    price: 1099.99,
    oldPrice: 1299.99,
    category: "Laptops",
    rating: 4.6,
    ratingCount: 210,
    badge: { type: "sale", text: "15% OFF" },
    wishlist: true,
    compare: true,
    inStock: false,
    desc: "Sleek and powerful ultrabook with 11th Gen Intel processor and all-day battery.",
    features: [
      "11th Gen Intel Core i7 Processor",
      "15.6'' FHD IPS Display",
      "Backlit Keyboard",
      "Thunderbolt 4 Support"
    ],
    specs: [
      { label: "Display", value: "15.6'' FHD IPS" },
      { label: "Processor", value: "Intel Core i7-1165G7" },
      { label: "RAM", value: "16GB DDR4" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Battery", value: "10 hours" },
      { label: "Weight", value: "1.3kg" }
    ],
    boxContents: [
      "UltraBook X15 Laptop",
      "65W USB-C Charger",
      "Quick Start Guide"
    ]
  },
  {
    id: 4,
    name: "Smartphone X Pro 5G",
    brand: "XPhone",
    images: [imageMap.product4, imageMap.product5, imageMap.product1],
    image: imageMap.product4,
    link: "/products/portable-ssd-1tb",
    price: 119.99,
    oldPrice: null,
    category: "Mobile Phones",
    rating: 4.8,
    ratingCount: 60,
    badge: null,
    wishlist: true,
    compare: true,
    inStock: true,
    desc: "Flagship 5G smartphone with stunning display and pro-grade camera system.",
    features: [
      "6.7'' AMOLED 120Hz Display",
      "Triple-lens Pro Camera",
      "5G Connectivity",
      "Fast Wireless Charging"
    ],
    specs: [
      { label: "Display", value: "6.7'' AMOLED, 120Hz" },
      { label: "Processor", value: "Snapdragon 8 Gen 1" },
      { label: "RAM", value: "8GB" },
      { label: "Storage", value: "256GB" },
      { label: "Battery", value: "4500mAh" },
      { label: "Camera", value: "108MP + 12MP + 8MP" }
    ],
    boxContents: [
      "Smartphone X Pro 5G",
      "USB-C Cable",
      "Fast Charger",
      "SIM Ejector Tool",
      "Protective Case"
    ]
  },

  {
    id: 5,
    name: "True Wireless Earbuds",
    brand: "SoundMax",
    images: [imageMap.product5, imageMap.product1, imageMap.product2],
    image: imageMap.product5,
    link: "/products/true-wireless-earbuds",
    price: 59.99,
    oldPrice: 79.99,
    category: "Audio",
    rating: 4.5,
    ratingCount: 134,
    badge: { type: "sale", text: "25% OFF" },
    wishlist: true,
    compare: true,
    inStock: true,
    desc: "Compact earbuds with deep bass, touch controls, and all-day battery life.",
    features: [
      "Touch Controls",
      "IPX4 Water Resistant",
      "24 Hours Total Playtime",
      "Voice Assistant Support"
    ],
    specs: [
      { label: "Driver Size", value: "6mm" },
      { label: "Battery Life", value: "24 hours" },
      { label: "Charging Port", value: "USB-C" },
      { label: "Bluetooth", value: "5.2" },
      { label: "Weight", value: "45g (with case)" }
    ],
    boxContents: [
      "True Wireless Earbuds",
      "Charging Case",
      "USB-C Cable",
      "Ear Tips (S/M/L)",
      "User Manual"
    ]
  },
  {
    id: 6,
    name: "Fitness Tracker Band",
    brand: "FitPro",
    images: [imageMap.product1, imageMap.product2],
    image: imageMap.product1,
    link: "/products/fitness-tracker-band",
    price: 79.99,
    oldPrice: 99.99,
    category: "Wearables",
    rating: 4.2,
    ratingCount: 54,
    badge: { type: "sale", text: "20% OFF" },
    wishlist: true,
    compare: true,
    inStock: false,
    desc: "Lightweight fitness band with heart rate, SpO2, and sleep tracking.",
    features: [
      "24/7 Heart Rate Monitoring",
      "SpO2 & Sleep Tracking",
      "10+ Sports Modes",
      "5ATM Water Resistance"
    ],
    specs: [
      { label: "Display", value: "1.1'' AMOLED" },
      { label: "Battery Life", value: "14 days" },
      { label: "Water Resistance", value: "5ATM" },
      { label: "Sensors", value: "Heart Rate, SpO2, Accelerometer" },
      { label: "Weight", value: "22g" }
    ],
    boxContents: [
      "Fitness Tracker Band",
      "Charging Cable",
      "User Manual"
    ]
  },
  {
    id: 7,
    name: "Wireless Charging Pad",
    brand: "ChargeIt",
    images: [imageMap.product4, imageMap.product5],
    image: imageMap.product4,
    link: "/products/wireless-charging-pad",
    price: 29.99,
    oldPrice: null,
    category: "Accessories",
    rating: 4.4,
    ratingCount: 39,
    badge: { type: "new", text: "NEW" },
    wishlist: true,
    compare: true,
    inStock: true,
    desc: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    features: [
      "10W/7.5W/5W Fast Charging",
      "Qi Certified",
      "LED Indicator",
      "Slim & Lightweight Design"
    ],
    specs: [
      { label: "Input", value: "5V/2A, 9V/1.67A" },
      { label: "Output", value: "10W/7.5W/5W" },
      { label: "Material", value: "Aluminum + ABS" },
      { label: "Dimensions", value: "90 x 90 x 6mm" },
      { label: "Weight", value: "60g" }
    ],
    boxContents: [
      "Wireless Charging Pad",
      "USB-C Cable",
      "User Manual"
    ]
  },
  {
    id: 8,
    name: "4K Action Camera",
    brand: "ActionCam",
    images: [imageMap.product3, imageMap.product4, imageMap.product5],
    image: imageMap.product3,
    link: "/products/4k-action-camera",
    price: 199.99,
    oldPrice: 249.99,
    category: "Cameras",
    rating: 4.7,
    ratingCount: 67,
    badge: { type: "sale", text: "20% OFF" },
    wishlist: true,
    compare: true,
    inStock: false,
    desc: "Rugged 4K action camera with waterproof case and multiple mounting options.",
    features: [
      "4K/60fps Video Recording",
      "Waterproof up to 30m",
      "170° Ultra Wide Angle Lens",
      "Wi-Fi & App Control"
    ],
    specs: [
      { label: "Sensor", value: "12MP CMOS" },
      { label: "Video", value: "4K/60fps, 1080p/120fps" },
      { label: "Battery", value: "1350mAh, Removable" },
      { label: "Waterproof", value: "Up to 30m" },
      { label: "Weight", value: "80g" }
    ],
    boxContents: [
      "4K Action Camera",
      "Waterproof Case",
      "Handlebar/Pole Mount",
      "Helmet Mount",
      "USB Cable"
    ]
  },
  {
    id: 9,
    name: "Samsung Galaxy 24 Ultra",
    brand: "Samsung",
    images: [imageMap.offerImg1, imageMap.product1, imageMap.product2, imageMap.product3],
    image: imageMap.offerImg1,
    link: "/products/samsung-galaxy-24-ultra",
    price: 249.99,
    oldPrice: 299.99,
    category: "Mobile Phones",
    rating: 4.7,
    ratingCount: 320,
    badge: { type: "sale", text: "Limited Time" },
    wishlist: true,
    compare: true,
    inStock: true,
    desc: "Flagship Samsung phone with top-tier camera, display, and battery.",
    features: [
      "200MP Pro Camera",
      "6.8'' QHD+ AMOLED 120Hz",
      "S-Pen Support",
      "5000mAh Battery"
    ],
    specs: [
      { label: "Display", value: "6.8'' QHD+ AMOLED" },
      { label: "Processor", value: "Snapdragon 8 Gen 2" },
      { label: "RAM", value: "12GB" },
      { label: "Storage", value: "256GB" },
      { label: "Battery", value: "5000mAh" },
      { label: "Camera", value: "200MP + 12MP + 10MP" }
    ],
    boxContents: [
      "Samsung Galaxy 24 Ultra",
      "USB-C Cable",
      "Fast Charger",
      "SIM Ejector Tool",
      "Quick Start Guide"
    ]
  },
  {
    id: 10,
    name: "Audio-Technica Headphones",
    brand: "Audio-Technica",
    images: [imageMap.offerImg2, imageMap.product4, imageMap.product5, imageMap.product5],
    image: imageMap.offerImg2,
    link: "/products/audio-technica-headphones",
    price: 249.99,
    oldPrice: 299.99,
    category: "Audio",
    rating: 4.7,
    ratingCount: 210,
    badge: { type: "sale", text: "Limited Time" },
    wishlist: true,
    compare: true,
    inStock: true,
    desc: "Professional studio headphones with premium sound and comfort.",
    features: [
      "45mm Large-Aperture Drivers",
      "Detachable Cable",
      "Swivel Ear Cups",
      "Extended Frequency Response"
    ],
    specs: [
      { label: "Driver Size", value: "45mm" },
      { label: "Frequency Response", value: "15-28,000 Hz" },
      { label: "Impedance", value: "38 Ohms" },
      { label: "Weight", value: "250g" }
    ],
    boxContents: [
      "Audio-Technica Headphones",
      "Detachable Cable",
      "Carrying Pouch",
      "User Manual"
    ]
  },
];
