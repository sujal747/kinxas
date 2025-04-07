const products = [
  {
    id: 1,
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    price: "1090",
    rating: 4,
    image: "./assets/products/athletic-cotton-socks-6-pairs.jpg",
    discount: "15% Off"
  },
  {
    id: 2,
    name: "Intermediate Size Basketball",
    price: "2095",
    rating: 4,
    image: "./assets/products/intermediate-composite-basketball.jpg",
    discount: "30% Off"
  },
  {
    id: 3,
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    price: "799",
    rating: 5,
    image: "./assets/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    discount: "10% Off"
  },
  {
    id: 4,
    name: "2 Slot Toaster - Black",
    price: "1899",
    rating: 5,
    image: "./assets/products/black-2-slot-toaster.jpg",
    discount: "25% Off"
  },
  {
    id: 5,
    name: "6 Piece White Dinner Plate Set",
    price: "2067",
    rating: 4,
    image: "./assets/products/6-piece-white-dinner-plate-set.jpg",
    discount: "40% Off"
  },
  {
    id: 6,
    name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
    price: "3499",
    rating: 5,
    image: "./assets/products/6-piece-non-stick-baking-set.webp",
    discount: "20% Off"
  },
  {
    id: 7,
    name: "Plain Hooded Fleece Sweatshirt",
    price: "2400",
    rating: 4,
    image: "./assets/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
    discount: "35% Off"
  },
  {
    id: 8,
    name: "Luxury Towel Set - Graphite Gray",
    price: "3599",
    rating: 5,
    image: "./assets/products/luxury-tower-set-6-piece.jpg",
    discount: "28% Off"
  },
  {
    id: 9,
    name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    price: "2899",
    rating: 5,
    image: "./assets/products/liquid-laundry-detergent-plain.jpg",
    discount: "17% Off"
  },
  {
    id: 10,
    name: "Waterproof Knit Athletic Sneakers - Gray",
    price: "3390",
    rating: 4,
    image: "./assets/products/knit-athletic-sneakers-gray.jpg",
    discount: "45% Off"
  },
  {
    id: 11,
    name: "Women's Chiffon Beachwear Cover Up - Black",
    price: "2070",
    rating: 4,
    image: "./assets/products/women-chiffon-beachwear-coverup-black.jpg",
    discount: "22% Off"
  },
  {
    id: 12,
    name: "Round Sunglasses",
    price: "1560",
    rating: 5,
    image: "./assets/products/round-sunglasses-black.jpg",
    discount: "38% Off"
  },
  {
    id: 13,
    name: "Women's Two Strap Buckle Sandals - Tan",
    price: "2499",
    rating: 5,
    image: "./assets/products/women-beach-sandals.jpg",
    discount: "33% Off"
  },
  {
    id: 14,
    name: "Blackout Curtains Set 4-Pack - Beige",
    price: "4599",
    rating: 4,
    image: "./assets/products/blackout-curtain-set-beige.webp",
    discount: "42% Off"
  },
  {
    id: 15,
    name: "Men's Slim-Fit Summer Shorts",
    price: "1699",
    rating: 4,
    image: "./assets/products/men-slim-fit-summer-shorts-gray.jpg",
    discount: "11% Off"
  },
  {
    id: 16,
    name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
    price: "3074",
    rating: 5,
    image: "./assets/products/electric-glass-and-steel-hot-water-kettle.webp",
    discount: "36% Off"
  },
  {
    id: 17,
    name: "Ultra Soft Tissue 2-Ply - 18 Box",
    price: "2374",
    rating: 3,
    image: "./assets/products/facial-tissue-2-ply-18-boxes.jpg",
    discount: "18% Off"
  },
  {
    id: 18,
    name: "Straw Lifeguard Sun Hat",
    price: "2200",
    rating: 4,
    image: "./assets/products/straw-sunhat.webp",
    discount: "9% Off"
  },
  {
    id: 19,
    name: "Sterling Silver Sky Flower Stud Earrings",
    price: "1799",
    rating: 4,
    image: "./assets/products/sky-flower-stud-earrings.webp",
    discount: "26% Off"
  },
  {
    id: 20,
    name: "Women's Stretch Popover Hoodie",
    price: "1374",
    rating: 5,
    image: "./assets/products/women-stretch-popover-hoodie-black.jpg",
    discount: "14% Off"
  },
  {
    id: 21,
    name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
    price: "1250",
    rating: 5,
    image: "./assets/products/bathroom-rug.jpg",
    discount: "47% Off"
  },
  {
    id: 22,
    name: "Women's Knit Ballet Flat",
    price: "2640",
    rating: 4,
    image: "./assets/products/women-knit-ballet-flat-black.jpg",
    discount: "29% Off"
  },
  {
    id: 23,
    name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    price: "1599",
    rating: 4,
    image: "./assets/products/men-golf-polo-t-shirt-blue.jpg",
    discount: "19% Off"
  },
  {
    id: 24,
    name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
    price: "8300",
    rating: 4,
    image: "./assets/products/trash-can-with-foot-pedal-50-liter.jpg",
    discount: "32% Off"
  },
  {
    id: 25,
    name: "Duvet Cover Set with Zipper Closure",
    price: "2399",
    rating: 4,
    image: "./assets/products/duvet-cover-set-blue-twin.jpg",
    discount: "21% Off"
  },
  {
    id: 26,
    name: "Women's Chunky Cable Beanie - Gray",
    price: "1250",
    rating: 5,
    image: "./assets/products/women-chunky-beanie-gray.webp",
    discount: "39% Off"
  },
  {
    id: 27,
    name: "Men's Classic-fit Pleated Chino Pants",
    price: "2290",
    rating: 4,
    image: "./assets/products/men-chino-pants-beige.jpg",
    discount: "23% Off"
  },
  {
    id: 28,
    name: "Men's Athletic Sneaker",
    price: "3890",
    rating: 4,
    image: "./assets/products/men-athletic-shoes-green.jpg",
    discount: "43% Off"
  },
  {
    id: 29,
    name: "Men's Navigator Sunglasses Pilot",
    price: "1690",
    rating: 3,
    image: "./assets/products/men-navigator-sunglasses-brown.jpg",
    discount: "12% Off"
  },
  {
    id: 30,
    name: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
    price: "6797",
    rating: 4,
    image: "./assets/products/non-stick-cooking-set-15-pieces.webp",
    discount: "31% Off"
  },
  {
    id: 31,
    name: "Vanity Mirror with Heavy Base - Chrome",
    price: "1649",
    rating: 4,
    image: "./assets/products/vanity-mirror-silver.jpg",
    discount: "16% Off"
  },
  {
    id: 32,
    name: "Women's Fleece Jogger Sweatpant",
    price: "2400",
    rating: 4,
    image: "./assets/products/women-french-terry-fleece-jogger-camo.jpg",
    discount: "34% Off"
  },
  {
    id: 33,
    name: "Double Oval Twist French Wire Earrings - Gold",
    price: "2400",
    rating: 5,
    image: "./assets/products/double-elongated-twist-french-wire-earrings.webp",
    discount: "50% Off"
  },
  {
    id: 34,
    name: "Round Airtight Food Storage Containers - 5 Piece",
    price: "2899",
    rating: 4,
    image: "./assets/products/round-airtight-food-storage-containers.jpg",
    discount: "27% Off"
  },
  {
    id: 35,
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: "14843",
    rating: 4,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    discount: "48% Off"
  },
  {
    id: 36,
    name: "Mens Casual Premium Slim Fit T-Shirts",
    price: "3010",
    rating: 4,
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    discount: "27% Off"
  },
  {
    id: 37,
    name: "Mens Cotton Jacket",
    price: "7560",
    rating: 5,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    discount: "32% Off"
  },
  {
    id: 38,
    name: "Mens Casual Slim Fit",
    price: "2158",
    rating: 2,
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    discount: "18% Off"
  },
  {
    id: 39,
    name: "John Hardy Women's Legends Naga Bracelet",
    price: "93918",
    rating: 5,
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    discount: "8% Off"
  },
  {
    id: 40,
    name: "Solid Gold Petite Micropave",
    price: "22690",
    rating: 4,
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    discount: "19% Off"
  },
  {
    id: 41,
    name: "White Gold Plated Princess",
    price: "1348",
    rating: 3,
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    discount: "7% Off"
  },
  {
    id: 42,
    name: "Pierced Owl Rose Gold Plated Double",
    price: "1481",
    rating: 2,
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    discount: "33% Off"
  },
  {
    id: 43,
    name: "WD 2TB Elements External Hard Drive",
    price: "8622",
    rating: 3,
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    discount: "11% Off"
  },
  {
    id: 44,
    name: "SanDisk SSD PLUS 1TB Internal SSD",
    price: "4685",
    rating: 3,
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    discount: "13% Off"
  },
  {
    id: 45,
    name: "Silicon Power 256GB SSD 3D NAND",
    price: "14685",
    rating: 5,
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    discount: "25% Off"
  },
  {
    id: 46,
    name: "WD 4TB Gaming Drive for PS4",
    price: "15366",
    rating: 5,
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    discount: "10% Off"
  },
  {
    id: 47,
    name: "Acer SB220Q 21.5-inch Full HD Monitor",
    price: "80674",
    rating: 3,
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    discount: "14% Off"
  },
  {
    id: 48,
    name: "Samsung 49-Inch Curved Gaming Monitor",
    price: "134695",
    rating: 2,
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    discount: "5% Off"
  },
  {
    id: 49,
    name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket",
    price: "7662",
    rating: 3,
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    discount: "15% Off"
  },
  {
    id: 50,
    name: "Lock and Love Women's Moto Biker Jacket",
    price: "4027",
    rating: 3,
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    discount: "12% Off"
  },
  {
    id: 51,
    name: "Rain Jacket Women Windbreaker",
    price: "5378",
    rating: 4,
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    discount: "17% Off"
  },
  {
    id: 52,
    name: "MBJ Women's Boat Neck V",
    price: "1324",
    rating: 5,
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    discount: "41% Off"
  },
  {
    id: 53,
    name: "Opna Women's Short Sleeve Moisture",
    price: "1069",
    rating: 5,
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    discount: "6% Off"
  },
  {
    id: 54,
    name: "DANVOUY Womens Casual Cotton T-Shirt",
    price: "1747",
    rating: 4,
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    discount: "21% Off"
  },
  {
    id: 55,
    name: "Essence Mascara Lash Princess",
    price: "999",
    rating: 5,
    image: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    discount: "32% Off"
  },
  {
    id: 56,
    name: "Eyeshadow Palette with Mirror",
    price: "1999",
    rating: 3,
    image: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
    discount: "15% Off"
  },
  {
    id: 57,
    name: "Powder Canister",
    price: "1499",
    rating: 3,
    image: "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
    discount: "27% Off"
  },
  {
    id: 58,
    name: "Red Lipstick",
    price: "1299",
    rating: 2,
    image: "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png",
    discount: "45% Off"
  },
  {
    id: 59,
    name: "Red Nail Polish",
    price: "899",
    rating: 4,
    image: "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png",
    discount: "18% Off"
  },
  {
    id: 60,
    name: "Calvin Klein CK One",
    price: "4999",
    rating: 5,
    image: "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png",
    discount: "12% Off"
  },
  {
    id: 61,
    name: "Chanel Coco Noir Eau De",
    price: "12999",
    rating: 2,
    image: "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png",
    discount: "38% Off"
  },
  {
    id: 62,
    name: "Dior J'adore",
    price: "8999",
    rating: 3,
    image: "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png",
    discount: "22% Off"
  },
  {
    id: 63,
    name: "Dolce Shine Eau de",
    price: "6999",
    rating: 2,
    image: "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/thumbnail.png",
    discount: "41% Off"
  },
  {
    id: 64,
    name: "Gucci Bloom Eau de",
    price: "7999",
    rating: 2,
    image: "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png",
    discount: "29% Off"
  },
  {
    id: 65,
    name: "Annibale Colombo Bed",
    price: "189999",
    rating: 4,
    image: "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
    discount: "17% Off"
  },
  {
    id: 66,
    name: "Annibale Colombo Sofa",
    price: "249999",
    rating: 3,
    image: "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png",
    discount: "36% Off"
  },
  {
    id: 67,
    name: "Bedside Table African Cherry",
    price: "29999",
    rating: 4,
    image: "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/thumbnail.png",
    discount: "23% Off"
  },
  {
    id: 68,
    name: "Knoll Saarinen Executive Conference Chair",
    price: "499",
    rating: 4,
    image: "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png",
    discount: "42% Off"
  },
  {
    id: 69,
    name: "Wooden Bathroom Sink With Mirror",
    price: "79999",
    rating: 3,
    image: "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/thumbnail.png",
    discount: "19% Off"
  },
  {
    id: 70,
    name: "Apple",
    price: "199",
    rating: 3,
    image: "https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png",
    discount: "28% Off"
  },
  {
    id: 71,
    name: "Beef Steak",
    price: "1299",
    rating: 2,
    image: "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/thumbnail.png",
    discount: "33% Off"
  },
  {
    id: 72,
    name: "Cat Food",
    price: "899",
    rating: 2,
    image: "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/thumbnail.png",
    discount: "14% Off"
  },
  {
    id: 73,
    name: "Chicken Meat",
    price: "999",
    rating: 4,
    image: "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/thumbnail.png",
    discount: "37% Off"
  },
  {
    id: 74,
    name: "Cooking Oil",
    price: "499",
    rating: 4,
    image: "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/thumbnail.png",
    discount: "21% Off"
  },
  {
    id: 75,
    name: "Cucumber",
    price: "149",
    rating: 4,
    image: "https://cdn.dummyjson.com/products/images/groceries/Cucumber/thumbnail.png",
    discount: "26% Off"
  },
  {
    id: 76,
    name: "Dog Food",
    price: "1099",
    rating: 2,
    image: "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/thumbnail.png",
    discount: "39% Off"
  },
  {
    id: 77,
    name: "Eggs",
    price: "299",
    rating: 4,
    image: "https://cdn.dummyjson.com/products/images/groceries/Eggs/thumbnail.png",
    discount: "16% Off"
  },
  {
    id: 78,
    name: "Fish Steak",
    price: "1799",
    rating: 4,
    image: "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/thumbnail.png",
    discount: "31% Off"
  },
  {
    id: 79,
    name: "Green Bell Pepper",
    price: "129",
    rating: 4,
    image: "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/thumbnail.png",
    discount: "24% Off"
  },
  {
    id: 80,
    name: "Green Chili Pepper",
    price: "99",
    rating: 4,
    image: "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/thumbnail.png",
    discount: "43% Off"
  },
  {
    id: 81,
    name: "Honey Jar",
    price: "699",
    rating: 3,
    image: "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/thumbnail.png",
    discount: "11% Off"
  },
  {
    id: 82,
    name: "Ice Cream",
    price: "549",
    rating: 3,
    image: "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/thumbnail.png",
    discount: "35% Off"
  },
  {
    id: 83,
    name: "Juice",
    price: "399",
    rating: 3,
    image: "https://cdn.dummyjson.com/products/images/groceries/Juice/thumbnail.png",
    discount: "20% Off"
  },
  {
    id: 84,
    name: "Kiwi",
    price: "249",
    rating: 4,
    image: "https://cdn.dummyjson.com/products/images/groceries/Kiwi/thumbnail.png",
    discount: "47% Off"
  }
];

const reviews = [
  {
    name: "Rajesh Kumar",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5,
    review: "This gadget is exceptional! I’m extremely satisfied with the quality and performance. Highly recommend!"
  },
  {
    name: "Neha Patel",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    rating: 3,
    review: "Mujhe yeh product thoda average laga. Looks good, but expected more."
  },
  {
    name: "Anil Yadav",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    rating: 1,
    review: "What a waste of money! Don’t buy it. It’s just trash."
  },
  {
    name: "Priya Sharma",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    rating: 5,
    review: "I can’t stop thinking about this dress! It’s perfect, I just love it. Feels like it was made for me ❤️"
  },
  {
    name: "Sanjay Verma",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    rating: 4,
    review: "This gadget is great, but it makes me want to do... naughty things 😏"
  },
  {
    name: "Disha Rai",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    rating: 5,
    review: "I’m obsessed with this product. I want it, need it, and can’t live without it. It’s like it owns me."
  },
  {
    name: "David Williams",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    rating: 1,
    review: "This product is absolute garbage! Worst thing I’ve ever bought. F***ing useless!"
  },
  {
    name: "Ashish Kumar",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    rating: 2,
    review: "Yeh product itna acha nahi tha. Mein thoda disappointed hoon."
  },
  {
    name: "Sneha Gupta",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 4,
    review: "It’s a good accessory, but I’d rather have something else for... well, personal use 😉"
  },
  {
    name: "Kiran Thapa",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
    rating: 5,
    review: "Yo product ekdam ramro cha! Malai yo jacket dherai man parchha."
  },
  {
    name: "Vikram Singh",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    rating: 3,
    review: "It’s decent headphones, but sound could be better. Thik thak hai."
  },
  {
    name: "Maya Gurung",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    rating: 1,
    review: "Yo shoes naramro cha! Ekdam waste of paisa."
  },
  {
    name: "Emily Johnson",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
    rating: 5,
    review: "I love this product! It’s amazing, worth every penny!"
  },
  {
    name: "Rohit Joshi",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    rating: 2,
    review: "Yeh shirt ka fabric thoda cheap lagta hai. Not happy."
  },
  {
    name: "Anjali Lama",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    rating: 4,
    review: "Yo bag ramro cha, tara thodi mahango lagyo."
  },
  {
    name: "Michael Brown",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    rating: 1,
    review: "This is the worst product ever. Broke in two days!"
  },
  {
    name: "Pooja Desai",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
    rating: 5,
    review: "I’m in love with this saree! It’s so gorgeous, can’t stop wearing it ❤️"
  },
  {
    name: "Suresh Rana",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
    rating: 3,
    review: "It’s okay watch, does the job but nothing special."
  },
  {
    name: "Laxmi Shrestha",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    rating: 2,
    review: "Yo product normal cha. Kehi special chaina."
  },
  {
    name: "Arjun Malhotra",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    rating: 4,
    review: "This phone case is cool, fits perfect. Thoda costly hai lekin."
  },
  {
    name: "Tara Devi",
    image: "https://randomuser.me/api/portraits/women/24.jpg",
    rating: 5,
    review: "Malai yo perfume ekdam pasand cha! Smells amazing."
  },
  {
    name: "John Carter",
    image: "https://randomuser.me/api/portraits/men/25.jpg",
    rating: 1,
    review: "Total waste of cash. This dumbass product didn’t even work!"
  },
  {
    name: "Riya Kapoor",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    rating: 5,
    review: "This necklace is stunning! I feel like a queen wearing it ❤️"
  },
  {
    name: "Deepak Shah",
    image: "https://randomuser.me/api/portraits/men/27.jpg",
    rating: 3,
    review: "Yeh charger works fine, par slow hai thodi."
  },
  {
    name: "Sunita Magar",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    rating: 2,
    review: "Yo scarf thik cha, tara color fade bhayo jaldi."
  },
  {
    name: "Amitabh Rai",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    rating: 4,
    review: "This wallet is solid, paisa wasool hai!"
  },
  {
    name: "Sarah Davis",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    rating: 5,
    review: "OMG, this top is everything! So stylish and comfy!"
  },
  {
    name: "Hari Bahadur",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
    rating: 1,
    review: "Yo belt khattam cha! Don’t buy it, total waste."
  },
  {
    name: "Kavita Mehra",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 4,
    review: "Yeh earrings pretty hai, par thodi heavy lagti hai."
  },
  {
    name: "James Lee",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    rating: 3,
    review: "It’s an alright speaker, sound’s decent but not loud enough."
  },
  {
    name: "Nisha Tamang",
    image: "https://randomuser.me/api/portraits/women/34.jpg",
    rating: 5,
    review: "Yo ring ekdam sundar cha! Malai dherai man parchha."
  },
  {
    name: "Vivek Pandey",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    rating: 2,
    review: "This bag looks good, lekin stitching weak hai."
  },
  {
    name: "Lisa White",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
    rating: 1,
    review: "Horrible quality! It didn’t work as expected."
  },
  {
    name: "Rahul Nair",
    image: "https://randomuser.me/api/portraits/men/37.jpg",
    rating: 5,
    review: "This camera is a dream! Worth every rupee!"
  },
  {
    name: "Sapna Karki",
    image: "https://randomuser.me/api/portraits/women/38.jpg",
    rating: 3,
    review: "Yo sweater normal cha, thik thak quality."
  },
  {
    name: "Manish Thakur",
    image: "https://randomuser.me/api/portraits/men/39.jpg",
    rating: 4,
    review: "Yeh laptop stand acha hai, kaam aata hai daily."
  },
  {
    name: "Anita Poudel",
    image: "https://randomuser.me/api/portraits/women/40.jpg",
    rating: 5,
    review: "Malai yo lipstick dherai pasand cha! Color perfect cha."
  },
  {
    name: "Tom Harris",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    rating: 2,
    review: "This toolset is meh, some parts broke already."
  },
  {
    name: "Shalini Bose",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
    rating: 5,
    review: "This kurta is pure love! So elegant and comfy ❤️"
  },
  {
    name: "Binod KC",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
    rating: 1,
    review: "Yo mouse kharab cha! One week ma bhatkeko."
  },
  {
    name: "Meera Jain",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    review: "Yeh bangles sundar hai, thodi pricey par acha hai."
  },
  {
    name: "Chris Evans",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 3,
    review: "It’s a fine jacket, but zipper feels cheap."
  },
  {
    name: "Rina Bhandari",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
    rating: 5,
    review: "Yo hair oil ramro cha! Hair silky bancha."
  },
  {
    name: "Kunal Sethi",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    rating: 2,
    review: "Yeh socks thik hai, par jaldi phat gaya."
  },
  {
    name: "Sophie Clark",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
    rating: 1,
    review: "This scarf sucks! Total rip-off."
  },
  {
    name: "Gopal Adhikari",
    image: "https://randomuser.me/api/portraits/men/49.jpg",
    rating: 4,
    review: "Yo cap ramro cha, style ma ekdam fit huncha."
  },
  {
    name: "Divya Reddy",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    rating: 5,
    review: "This lehenga is breathtaking! I’m obsessed!"
  },
  {
    name: "Prakash Limbu",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    rating: 3,
    review: "Yo earphones thik cha, bass thoda kam cha."
  },
  {
    name: "Laura Adams",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    rating: 4,
    review: "This candle smells divine, wish it lasted longer."
  },
  {
    name: "Santosh Das",
    image: "https://randomuser.me/api/portraits/men/53.jpg",
    rating: 1,
    review: "Yeh product bakwas hai! Don’t waste your money."
  }
];

function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  document.getElementById('modalProductImg').src = product.image;
  document.getElementById('modalProductName').textContent = product.name;
  document.getElementById('modalProductPrice').textContent = `Price: Rs ${product.price}`;
  document.getElementById('modalProductRating').textContent = `Rating: ⭐ ${product.rating}`;
  document.getElementById('modalProductDescription').textContent = product.description || "No description available.";

  // Inject reviews
  const reviewContainer = document.getElementById('customerReviews');
  reviewContainer.innerHTML = '';

  reviews.forEach(r => {
    reviewContainer.innerHTML += `
      <div class="review">
        <img src="${r.image}" alt="${r.name}">
        <div class="review-content">
          <strong>${r.name}</strong>
          <div class="review-stars">${'⭐'.repeat(r.rating)}</div>
          <p>${r.review}</p>
        </div>
      </div>
    `;
  });

  document.getElementById('productModal').style.display = "flex";
}

function closeModal() {
  document.getElementById('productModal').style.display = "none";
}
