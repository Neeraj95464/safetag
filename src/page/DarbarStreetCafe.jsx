// // import React, { useState, useEffect } from "react";
// // import {
// //   ShoppingCart,
// //   Phone,
// //   MapPin,
// //   Clock,
// //   Star,
// //   Menu,
// //   X,
// //   Plus,
// //   Minus,
// //   Send,
// //   Heart,
// //   Award,
// //   Users,
// //   Utensils,
// // } from "lucide-react";

// // const DarbarStreetCafe = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [cart, setCart] = useState([]);
// //   const [showCart, setShowCart] = useState(false);
// //   const [activeCategory, setActiveCategory] = useState("starters");
// //   const [customerInfo, setCustomerInfo] = useState({
// //     name: "",
// //     phone: "",
// //     email: "",
// //     address: "",
// //     notes: "",
// //   });

// //   // Menu data with attractive items
// //   const menuCategories = {
// //     starters: {
// //       name: "Starters & Appetizers",
// //       icon: "🥘",
// //       items: [
// //         {
// //           id: 1,
// //           name: "Chicken 65",
// //           price: 280,
// //           image: "🍗",
// //           desc: "Spicy deep-fried chicken with curry leaves",
// //           popular: true,
// //         },
// //         {
// //           id: 2,
// //           name: "Mutton Pepper Fry",
// //           price: 350,
// //           image: "🥩",
// //           desc: "Tender mutton with black pepper and spices",
// //         },
// //         {
// //           id: 3,
// //           name: "Fish Tikka",
// //           price: 320,
// //           image: "🐟",
// //           desc: "Marinated fish grilled to perfection",
// //         },
// //         {
// //           id: 4,
// //           name: "Paneer Tikka",
// //           price: 250,
// //           image: "🧀",
// //           desc: "Cottage cheese cubes with mint chutney",
// //           veg: true,
// //         },
// //         {
// //           id: 5,
// //           name: "Gobi Manchurian",
// //           price: 180,
// //           image: "🥬",
// //           desc: "Crispy cauliflower in tangy sauce",
// //           veg: true,
// //         },
// //       ],
// //     },
// //     mains: {
// //       name: "Main Course",
// //       icon: "🍛",
// //       items: [
// //         {
// //           id: 6,
// //           name: "Chicken Biryani",
// //           price: 320,
// //           image: "🍚",
// //           desc: "Aromatic basmati rice with tender chicken",
// //           popular: true,
// //         },
// //         {
// //           id: 7,
// //           name: "Mutton Biryani",
// //           price: 420,
// //           image: "🍚",
// //           desc: "Royal mutton biryani with saffron",
// //         },
// //         {
// //           id: 8,
// //           name: "Veg Biryani",
// //           price: 280,
// //           image: "🍚",
// //           desc: "Mixed vegetables with fragrant rice",
// //           veg: true,
// //         },
// //         {
// //           id: 9,
// //           name: "Butter Chicken",
// //           price: 340,
// //           image: "🍗",
// //           desc: "Creamy tomato curry with tender chicken",
// //         },
// //         {
// //           id: 10,
// //           name: "Dal Tadka",
// //           price: 160,
// //           image: "🍲",
// //           desc: "Yellow lentils with aromatic tempering",
// //           veg: true,
// //         },
// //       ],
// //     },
// //     breads: {
// //       name: "Breads & Rice",
// //       icon: "🫓",
// //       items: [
// //         {
// //           id: 11,
// //           name: "Butter Naan",
// //           price: 60,
// //           image: "🫓",
// //           desc: "Soft bread with butter",
// //           veg: true,
// //         },
// //         {
// //           id: 12,
// //           name: "Garlic Naan",
// //           price: 80,
// //           image: "🫓",
// //           desc: "Naan with fresh garlic",
// //           veg: true,
// //         },
// //         {
// //           id: 13,
// //           name: "Tandoor Roti",
// //           price: 40,
// //           image: "🫓",
// //           desc: "Whole wheat bread from tandoor",
// //           veg: true,
// //         },
// //         {
// //           id: 14,
// //           name: "Jeera Rice",
// //           price: 120,
// //           image: "🍚",
// //           desc: "Cumin flavored basmati rice",
// //           veg: true,
// //         },
// //       ],
// //     },
// //     desserts: {
// //       name: "Desserts & Beverages",
// //       icon: "🍰",
// //       items: [
// //         {
// //           id: 15,
// //           name: "Gulab Jamun",
// //           price: 80,
// //           image: "🍯",
// //           desc: "Sweet milk dumplings in syrup",
// //           veg: true,
// //         },
// //         {
// //           id: 16,
// //           name: "Kulfi",
// //           price: 60,
// //           image: "🍦",
// //           desc: "Traditional Indian ice cream",
// //           veg: true,
// //         },
// //         {
// //           id: 17,
// //           name: "Masala Chai",
// //           price: 30,
// //           image: "☕",
// //           desc: "Spiced tea with milk",
// //           veg: true,
// //         },
// //         {
// //           id: 18,
// //           name: "Fresh Lime Soda",
// //           price: 50,
// //           image: "🥤",
// //           desc: "Refreshing lime drink",
// //           veg: true,
// //         },
// //       ],
// //     },
// //   };

// //   // Add to cart function
// //   const addToCart = (item) => {
// //     const existingItem = cart.find((cartItem) => cartItem.id === item.id);
// //     if (existingItem) {
// //       setCart(
// //         cart.map((cartItem) =>
// //           cartItem.id === item.id
// //             ? { ...cartItem, quantity: cartItem.quantity + 1 }
// //             : cartItem
// //         )
// //       );
// //     } else {
// //       setCart([...cart, { ...item, quantity: 1 }]);
// //     }
// //   };

// //   // Update quantity
// //   const updateQuantity = (id, change) => {
// //     setCart(
// //       cart
// //         .map((item) => {
// //           if (item.id === id) {
// //             const newQuantity = item.quantity + change;
// //             return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
// //           }
// //           return item;
// //         })
// //         .filter(Boolean)
// //     );
// //   };

// //   // Calculate total
// //   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

// //   // Handle order submission (sends email using mailto)
// //   const handleOrderSubmit = () => {
// //     const orderDetails = cart
// //       .map(
// //         (item) =>
// //           `${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`
// //       )
// //       .join("\n");

// //     const emailBody = `
// // New Order from ${customerInfo.name}

// // Customer Details:
// // Name: ${customerInfo.name}
// // Phone: ${customerInfo.phone}
// // Email: ${customerInfo.email}
// // Address: ${customerInfo.address}
// // Notes: ${customerInfo.notes}

// // Order Details:
// // ${orderDetails}

// // Total Amount: ₹${total}

// // Please confirm this order.
// //     `;

// //     // Open email client with order details
// //     window.location.href = `mailto:orders@ssglp.co.in?subject=New Order - ${
// //       customerInfo.name
// //     }&body=${encodeURIComponent(emailBody)}`;

// //     // Also send WhatsApp message
// //     const whatsappMessage = `🍽️ *New Order from Darbar Street Cafe*\n\n*Customer:* ${customerInfo.name}\n*Phone:* ${customerInfo.phone}\n*Address:* ${customerInfo.address}\n\n*Order:*\n${orderDetails}\n\n*Total: ₹${total}*\n\nPlease confirm!`;
// //     window.open(
// //       `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`,
// //       "_blank"
// //     );

// //     alert("Order sent successfully! We will contact you shortly.");
// //     setCart([]);
// //     setShowCart(false);
// //     setCustomerInfo({ name: "", phone: "", email: "", address: "", notes: "" });
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
// //       {/* Header */}
// //       <header className="bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg sticky top-0 z-50">
// //         <div className="container mx-auto px-4 py-4">
// //           <div className="flex justify-between items-center">
// //             <div className="flex items-center space-x-4">
// //               <div className="text-2xl">🏮</div>
// //               <div>
// //                 <h1 className="text-2xl font-bold">Darbar Street Cafe</h1>
// //                 <p className="text-sm opacity-90">
// //                   by Shri Sahasra Gourmet LLP
// //                 </p>
// //               </div>
// //             </div>

// //             <div className="flex items-center space-x-4">
// //               <button
// //                 onClick={() => setShowCart(true)}
// //                 className="relative bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
// //               >
// //                 <ShoppingCart className="w-5 h-5" />
// //                 {cart.length > 0 && (
// //                   <span className="absolute -top-2 -right-2 bg-white text-red-600 rounded-full w-6 h-6 text-xs flex items-center justify-center font-bold">
// //                     {cart.reduce((sum, item) => sum + item.quantity, 0)}
// //                   </span>
// //                 )}
// //               </button>

// //               <button
// //                 onClick={() => setIsMenuOpen(!isMenuOpen)}
// //                 className="md:hidden bg-orange-500 hover:bg-orange-600 p-2 rounded-lg"
// //               >
// //                 {isMenuOpen ? (
// //                   <X className="w-5 h-5" />
// //                 ) : (
// //                   <Menu className="w-5 h-5" />
// //                 )}
// //               </button>
// //             </div>
// //           </div>

// //           {/* Mobile Menu */}
// //           {isMenuOpen && (
// //             <div className="md:hidden mt-4 bg-red-700 rounded-lg p-4">
// //               <nav className="space-y-2">
// //                 <a href="#home" className="block py-2 hover:text-orange-300">
// //                   Home
// //                 </a>
// //                 <a href="#menu" className="block py-2 hover:text-orange-300">
// //                   Menu
// //                 </a>
// //                 <a href="#about" className="block py-2 hover:text-orange-300">
// //                   About
// //                 </a>
// //                 <a href="#contact" className="block py-2 hover:text-orange-300">
// //                   Contact
// //                 </a>
// //               </nav>
// //             </div>
// //           )}
// //         </div>
// //       </header>

// //       {/* Hero Section */}
// //       <section id="home" className="relative overflow-hidden">
// //         <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-orange-600/90"></div>
// //         <div className="relative container mx-auto px-4 py-20 text-center text-white">
// //           <div className="max-w-4xl mx-auto">
// //             <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">
// //               Welcome to Darbar Street Cafe
// //             </h2>
// //             <p className="text-xl md:text-2xl mb-8 opacity-90">
// //               Authentic Street Food Experience • Royal Flavors • Fresh &
// //               Delicious
// //             </p>
// //             <div className="flex flex-wrap justify-center gap-4 mb-8">
// //               <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-2">
// //                 <Star className="w-5 h-5 text-yellow-400" />
// //                 <span>4.8/5 Rating</span>
// //               </div>
// //               <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-2">
// //                 <Users className="w-5 h-5" />
// //                 <span>1000+ Happy Customers</span>
// //               </div>
// //               <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-2">
// //                 <Award className="w-5 h-5 text-yellow-400" />
// //                 <span>Award Winning</span>
// //               </div>
// //             </div>
// //             <a
// //               href="#menu"
// //               className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
// //             >
// //               Order Now • Free Home Delivery 🚚
// //             </a>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Features */}
// //       <section className="py-16 bg-white">
// //         <div className="container mx-auto px-4">
// //           <div className="grid md:grid-cols-4 gap-8">
// //             {[
// //               { icon: "🚚", title: "Free Delivery", desc: "Within 5km radius" },
// //               {
// //                 icon: "⏰",
// //                 title: "30 Min Delivery",
// //                 desc: "Hot & Fresh guaranteed",
// //               },
// //               {
// //                 icon: "🌱",
// //                 title: "Fresh Ingredients",
// //                 desc: "Daily sourced quality",
// //               },
// //               {
// //                 icon: "💯",
// //                 title: "100% Hygienic",
// //                 desc: "FSSAI certified kitchen",
// //               },
// //             ].map((feature, index) => (
// //               <div
// //                 key={index}
// //                 className="text-center group hover:transform hover:scale-105 transition-all duration-300"
// //               >
// //                 <div className="text-4xl mb-4 group-hover:animate-bounce">
// //                   {feature.icon}
// //                 </div>
// //                 <h3 className="text-xl font-semibold mb-2 text-gray-800">
// //                   {feature.title}
// //                 </h3>
// //                 <p className="text-gray-600">{feature.desc}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Menu Section */}
// //       <section
// //         id="menu"
// //         className="py-16 bg-gradient-to-br from-orange-50 to-red-50"
// //       >
// //         <div className="container mx-auto px-4">
// //           <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
// //             Our Delicious Menu 🍽️
// //           </h2>

// //           {/* Category Tabs */}
// //           <div className="flex flex-wrap justify-center mb-12 gap-2">
// //             {Object.entries(menuCategories).map(([key, category]) => (
// //               <button
// //                 key={key}
// //                 onClick={() => setActiveCategory(key)}
// //                 className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
// //                   activeCategory === key
// //                     ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg"
// //                     : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
// //                 }`}
// //               >
// //                 <span className="mr-2">{category.icon}</span>
// //                 {category.name}
// //               </button>
// //             ))}
// //           </div>

// //           {/* Menu Items */}
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {menuCategories[activeCategory].items.map((item) => (
// //               <div
// //                 key={item.id}
// //                 className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
// //               >
// //                 <div className="p-6">
// //                   <div className="flex justify-between items-start mb-4">
// //                     <div>
// //                       <div className="flex items-center space-x-2 mb-2">
// //                         <span className="text-3xl">{item.image}</span>
// //                         {item.popular && (
// //                           <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
// //                             🔥 Popular
// //                           </span>
// //                         )}
// //                         {item.veg && (
// //                           <span className="w-4 h-4 border-2 border-green-500 rounded-sm flex items-center justify-center">
// //                             <div className="w-2 h-2 bg-green-500 rounded-full"></div>
// //                           </span>
// //                         )}
// //                       </div>
// //                       <h3 className="text-xl font-bold text-gray-800 mb-2">
// //                         {item.name}
// //                       </h3>
// //                       <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
// //                     </div>
// //                   </div>

// //                   <div className="flex justify-between items-center">
// //                     <span className="text-2xl font-bold text-red-600">
// //                       ₹{item.price}
// //                     </span>
// //                     <button
// //                       onClick={() => addToCart(item)}
// //                       className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
// //                     >
// //                       <Plus className="w-4 h-4" />
// //                       <span>Add</span>
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* About Section */}
// //       <section id="about" className="py-16 bg-white">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-4xl mx-auto text-center">
// //             <h2 className="text-4xl font-bold mb-8 text-gray-800">
// //               About Darbar Street Cafe
// //             </h2>
// //             <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 mb-8">
// //               <p className="text-lg text-gray-700 mb-6">
// //                 🏮 Welcome to <strong>Darbar Street Cafe</strong>, proudly
// //                 operated by <strong>Shri Sahasra Gourmet LLP</strong>. We bring
// //                 you the authentic taste of Indian street food with a royal
// //                 touch, combining traditional recipes with modern hygiene
// //                 standards.
// //               </p>
// //               <p className="text-lg text-gray-700 mb-6">
// //                 Our chefs use only the finest ingredients, sourced fresh daily,
// //                 to create dishes that transport you straight to the bustling
// //                 streets of India. Every meal is prepared with love and served
// //                 with pride.
// //               </p>
// //               <div className="flex flex-wrap justify-center gap-6 mt-8">
// //                 <div className="text-center">
// //                   <div className="text-3xl mb-2">👨‍🍳</div>
// //                   <div className="font-semibold">Expert Chefs</div>
// //                   <div className="text-sm text-gray-600">
// //                     15+ Years Experience
// //                   </div>
// //                 </div>
// //                 <div className="text-center">
// //                   <div className="text-3xl mb-2">🏆</div>
// //                   <div className="font-semibold">Quality Assured</div>
// //                   <div className="text-sm text-gray-600">FSSAI Certified</div>
// //                 </div>
// //                 <div className="text-center">
// //                   <div className="text-3xl mb-2">💝</div>
// //                   <div className="font-semibold">Customer Love</div>
// //                   <div className="text-sm text-gray-600">4.8/5 Rating</div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Contact Section */}
// //       <section
// //         id="contact"
// //         className="py-16 bg-gradient-to-br from-red-600 to-orange-600 text-white"
// //       >
// //         <div className="container mx-auto px-4">
// //           <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
// //           <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
// //             <div className="text-center">
// //               <Phone className="w-8 h-8 mx-auto mb-4" />
// //               <h3 className="text-xl font-semibold mb-2">Call Us</h3>
// //               <p>+91 98765 43210</p>
// //               <p>Available 24/7</p>
// //             </div>
// //             <div className="text-center">
// //               <MapPin className="w-8 h-8 mx-auto mb-4" />
// //               <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
// //               <p>Hyderabad, Telangana</p>
// //               <p>India</p>
// //             </div>
// //             <div className="text-center">
// //               <Clock className="w-8 h-8 mx-auto mb-4" />
// //               <h3 className="text-xl font-semibold mb-2">Delivery Hours</h3>
// //               <p>11:00 AM - 11:00 PM</p>
// //               <p>All Days</p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer className="bg-gray-900 text-white py-8">
// //         <div className="container mx-auto px-4 text-center">
// //           <div className="mb-4">
// //             <h3 className="text-2xl font-bold mb-2">Darbar Street Cafe</h3>
// //             <p className="text-gray-400">by Shri Sahasra Gourmet LLP</p>
// //           </div>
// //           <div className="mb-4">
// //             <p>📧 orders@ssglp.co.in | 🌐 www.ssglp.co.in</p>
// //           </div>
// //           <div className="border-t border-gray-700 pt-4">
// //             <p>&copy; 2024 Shri Sahasra Gourmet LLP. All rights reserved.</p>
// //           </div>
// //         </div>
// //       </footer>

// //       {/* Cart Modal */}
// //       {showCart && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
// //           <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
// //             <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-red-500 to-orange-500 text-white">
// //               <h2 className="text-2xl font-bold">Your Order 🛒</h2>
// //               <button
// //                 onClick={() => setShowCart(false)}
// //                 className="text-white hover:text-gray-200"
// //               >
// //                 <X className="w-6 h-6" />
// //               </button>
// //             </div>

// //             <div className="p-6 overflow-y-auto max-h-96">
// //               {cart.length === 0 ? (
// //                 <div className="text-center py-8">
// //                   <div className="text-6xl mb-4">🍽️</div>
// //                   <p className="text-gray-600">Your cart is empty</p>
// //                 </div>
// //               ) : (
// //                 <>
// //                   {cart.map((item) => (
// //                     <div
// //                       key={item.id}
// //                       className="flex justify-between items-center py-4 border-b border-gray-100"
// //                     >
// //                       <div className="flex items-center space-x-4">
// //                         <span className="text-2xl">{item.image}</span>
// //                         <div>
// //                           <h3 className="font-semibold">{item.name}</h3>
// //                           <p className="text-gray-600">₹{item.price}</p>
// //                         </div>
// //                       </div>
// //                       <div className="flex items-center space-x-3">
// //                         <button
// //                           onClick={() => updateQuantity(item.id, -1)}
// //                           className="bg-gray-200 hover:bg-gray-300 rounded-full p-1"
// //                         >
// //                           <Minus className="w-4 h-4" />
// //                         </button>
// //                         <span className="font-semibold">{item.quantity}</span>
// //                         <button
// //                           onClick={() => updateQuantity(item.id, 1)}
// //                           className="bg-gray-200 hover:bg-gray-300 rounded-full p-1"
// //                         >
// //                           <Plus className="w-4 h-4" />
// //                         </button>
// //                         <span className="font-bold text-red-600 w-16 text-right">
// //                           ₹{item.price * item.quantity}
// //                         </span>
// //                       </div>
// //                     </div>
// //                   ))}

// //                   <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg">
// //                     <div className="flex justify-between items-center text-xl font-bold">
// //                       <span>Total:</span>
// //                       <span className="text-red-600">₹{total}</span>
// //                     </div>
// //                   </div>

// //                   {/* Customer Info Form */}
// //                   <div className="mt-6 space-y-4">
// //                     <h3 className="font-semibold text-lg">Delivery Details</h3>
// //                     <input
// //                       type="text"
// //                       placeholder="Full Name *"
// //                       value={customerInfo.name}
// //                       onChange={(e) =>
// //                         setCustomerInfo({
// //                           ...customerInfo,
// //                           name: e.target.value,
// //                         })
// //                       }
// //                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
// //                       required
// //                     />
// //                     <input
// //                       type="tel"
// //                       placeholder="Phone Number *"
// //                       value={customerInfo.phone}
// //                       onChange={(e) =>
// //                         setCustomerInfo({
// //                           ...customerInfo,
// //                           phone: e.target.value,
// //                         })
// //                       }
// //                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
// //                       required
// //                     />
// //                     <input
// //                       type="email"
// //                       placeholder="Email Address"
// //                       value={customerInfo.email}
// //                       onChange={(e) =>
// //                         setCustomerInfo({
// //                           ...customerInfo,
// //                           email: e.target.value,
// //                         })
// //                       }
// //                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
// //                     />
// //                     <textarea
// //                       placeholder="Delivery Address *"
// //                       value={customerInfo.address}
// //                       onChange={(e) =>
// //                         setCustomerInfo({
// //                           ...customerInfo,
// //                           address: e.target.value,
// //                         })
// //                       }
// //                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent h-24"
// //                       required
// //                     />
// //                     <textarea
// //                       placeholder="Special Instructions (Optional)"
// //                       value={customerInfo.notes}
// //                       onChange={(e) =>
// //                         setCustomerInfo({
// //                           ...customerInfo,
// //                           notes: e.target.value,
// //                         })
// //                       }
// //                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent h-20"
// //                     />
// //                   </div>

// //                   <button
// //                     onClick={handleOrderSubmit}
// //                     disabled={
// //                       !customerInfo.name ||
// //                       !customerInfo.phone ||
// //                       !customerInfo.address
// //                     }
// //                     className="w-full mt-6 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 disabled:from-gray-400 disabled:to-gray-400 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
// //                   >
// //                     <Send className="w-5 h-5" />
// //                     <span>Place Order - ₹{total}</span>
// //                   </button>

// //                   <p className="text-center text-sm text-gray-600 mt-4">
// //                     🚚 Free delivery within 5km • ⏰ Delivered in 30-45 minutes
// //                   </p>
// //                 </>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default DarbarStreetCafe;

// import React, { useState, useEffect } from "react";
// import {
//   ShoppingCart,
//   Phone,
//   MapPin,
//   Clock,
//   Star,
//   Menu,
//   X,
//   Plus,
//   Minus,
//   Send,
//   Heart,
//   Award,
//   Users,
//   Coffee,
//   MessageCircle,
// } from "lucide-react";

// const ShriSahasraGourmet = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [cart, setCart] = useState([]);
//   const [showCart, setShowCart] = useState(false);
//   const [activeCategory, setActiveCategory] = useState("teas");
//   const [customerInfo, setCustomerInfo] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     notes: "",
//   });

//   // Complete menu based on your actual offerings
//   const menuCategories = {
//     teas: {
//       name: "Tea's & Hot Beverages",
//       icon: "🍵",
//       items: [
//         {
//           id: 1,
//           name: "Darbar's Tea",
//           price: 12,
//           image: "🍵",
//           desc: "Our signature tea blend",
//           popular: true,
//         },
//         {
//           id: 2,
//           name: "Kadak Tea",
//           price: 15,
//           image: "☕",
//           desc: "Strong and refreshing",
//         },
//         {
//           id: 3,
//           name: "Masala Tea",
//           price: 20,
//           image: "🫖",
//           desc: "Aromatic spiced tea",
//         },
//         {
//           id: 4,
//           name: "Ginger Tea",
//           price: 15,
//           image: "🍵",
//           desc: "Fresh ginger infused",
//         },
//         {
//           id: 5,
//           name: "Lemon Tea",
//           price: 20,
//           image: "🍋",
//           desc: "Refreshing citrus tea",
//         },
//         {
//           id: 6,
//           name: "Green Tea",
//           price: 20,
//           image: "🍃",
//           desc: "Healthy green tea",
//         },
//         {
//           id: 7,
//           name: "Black Tea",
//           price: 15,
//           image: "🍵",
//           desc: "Classic black tea",
//         },
//         {
//           id: 8,
//           name: "Sonti Tea",
//           price: 15,
//           image: "🍯",
//           desc: "Sweet jaggery tea",
//         },
//         {
//           id: 9,
//           name: "Elachi Tea",
//           price: 20,
//           image: "🫖",
//           desc: "Cardamom flavored",
//         },
//         {
//           id: 10,
//           name: "Ginger Lemon Tea",
//           price: 20,
//           image: "🍋",
//           desc: "Perfect immunity booster",
//         },
//         {
//           id: 11,
//           name: "Mint Tea Sabja",
//           price: 20,
//           image: "🌿",
//           desc: "Cool mint with basil seeds",
//         },
//         {
//           id: 12,
//           name: "Bellam Tea",
//           price: 20,
//           image: "🍯",
//           desc: "Traditional jaggery tea",
//         },
//         {
//           id: 13,
//           name: "Badam Tea",
//           price: 20,
//           image: "🥜",
//           desc: "Rich almond tea",
//         },
//         {
//           id: 14,
//           name: "Chocolate Tea",
//           price: 20,
//           image: "🍫",
//           desc: "Sweet chocolate blend",
//         },
//       ],
//     },
//     coffees: {
//       name: "Coffee & Cold Beverages",
//       icon: "☕",
//       items: [
//         {
//           id: 15,
//           name: "Darbar's Coffee",
//           price: 20,
//           image: "☕",
//           desc: "House special coffee",
//           popular: true,
//         },
//         {
//           id: 16,
//           name: "Black Coffee",
//           price: 20,
//           image: "☕",
//           desc: "Pure coffee experience",
//         },
//         {
//           id: 17,
//           name: "Filter Coffee",
//           price: 20,
//           image: "☕",
//           desc: "South Indian style",
//         },
//         {
//           id: 18,
//           name: "Chocolate Coffee",
//           price: 20,
//           image: "🍫",
//           desc: "Rich chocolate blend",
//         },
//         {
//           id: 19,
//           name: "Sonti Coffee",
//           price: 20,
//           image: "🍯",
//           desc: "Jaggery sweetened",
//         },
//         {
//           id: 20,
//           name: "Cold Coffee",
//           price: 50,
//           image: "🧊",
//           desc: "Chilled coffee delight",
//         },
//         {
//           id: 21,
//           name: "Darbar's Cold Coffee",
//           price: 59,
//           image: "🧊",
//           desc: "Special cold brew",
//           popular: true,
//         },
//         {
//           id: 22,
//           name: "Ice Coffee",
//           price: 49,
//           image: "🧊",
//           desc: "Iced coffee perfection",
//         },
//         {
//           id: 23,
//           name: "Cappuccino",
//           price: 50,
//           image: "☕",
//           desc: "Creamy Italian style",
//         },
//       ],
//     },
//     milks: {
//       name: "Milk & Health Drinks",
//       icon: "🥛",
//       items: [
//         {
//           id: 24,
//           name: "Milk",
//           price: 15,
//           image: "🥛",
//           desc: "Fresh pure milk",
//         },
//         {
//           id: 25,
//           name: "Chocolate Milk",
//           price: 20,
//           image: "🍫",
//           desc: "Rich chocolate milk",
//         },
//         {
//           id: 26,
//           name: "Badam Milk",
//           price: 20,
//           image: "🥜",
//           desc: "Almond flavored milk",
//         },
//         {
//           id: 27,
//           name: "Rose Milk",
//           price: 20,
//           image: "🌹",
//           desc: "Fragrant rose milk",
//         },
//         {
//           id: 28,
//           name: "Pepper Milk",
//           price: 20,
//           image: "🌶️",
//           desc: "Spiced pepper milk",
//         },
//         {
//           id: 29,
//           name: "Boost",
//           price: 20,
//           image: "💪",
//           desc: "Energy health drink",
//         },
//         {
//           id: 30,
//           name: "Horlicks",
//           price: 20,
//           image: "🥛",
//           desc: "Nutritious malt drink",
//         },
//         {
//           id: 31,
//           name: "Bournvita",
//           price: 20,
//           image: "🍫",
//           desc: "Chocolate health drink",
//         },
//       ],
//     },
//     fries: {
//       name: "French Fries & Darbar's Specials",
//       icon: "🍟",
//       items: [
//         {
//           id: 32,
//           name: "Salted French Fries",
//           price: 69,
//           image: "🍟",
//           desc: "Crispy salted fries",
//         },
//         {
//           id: 33,
//           name: "Masala French Fries",
//           price: 79,
//           image: "🍟",
//           desc: "Spicy masala coating",
//           popular: true,
//         },
//         {
//           id: 34,
//           name: "Peri Peri French Fries",
//           price: 79,
//           image: "🌶️",
//           desc: "Tangy peri peri flavor",
//         },
//         {
//           id: 35,
//           name: "Cheese French Fries (Darbar's Fries)",
//           price: 79,
//           image: "🧀",
//           desc: "Loaded with cheese",
//           popular: true,
//         },
//       ],
//     },
//     maggi: {
//       name: "Maggi & Darbar's Varieties",
//       icon: "🍜",
//       items: [
//         {
//           id: 36,
//           name: "Plain Maggi",
//           price: 39,
//           image: "🍜",
//           desc: "Classic plain maggi",
//         },
//         {
//           id: 37,
//           name: "Egg Maggi",
//           price: 49,
//           image: "🥚",
//           desc: "Protein rich egg maggi",
//         },
//         {
//           id: 38,
//           name: "Paneer Maggi",
//           price: 59,
//           image: "🧀",
//           desc: "Cottage cheese special",
//         },
//         {
//           id: 39,
//           name: "Corn Maggi",
//           price: 59,
//           image: "🌽",
//           desc: "Sweet corn loaded",
//         },
//         {
//           id: 40,
//           name: "Cheese Maggi (Darbar's Maggi)",
//           price: 59,
//           image: "🧀",
//           desc: "Extra cheesy delight",
//           popular: true,
//         },
//       ],
//     },
//     sandwiches: {
//       name: "Sandwiches & Specials",
//       icon: "🥪",
//       items: [
//         {
//           id: 41,
//           name: "Plain Sandwich",
//           price: 49,
//           image: "🥪",
//           desc: "Simple and tasty",
//         },
//         {
//           id: 42,
//           name: "Cheese Sandwich",
//           price: 59,
//           image: "🧀",
//           desc: "Melted cheese goodness",
//         },
//         {
//           id: 43,
//           name: "Corn Sandwich",
//           price: 59,
//           image: "🌽",
//           desc: "Sweet corn filling",
//         },
//         {
//           id: 44,
//           name: "Darbar's Cafe Special",
//           price: 59,
//           image: "🥪",
//           desc: "House special sandwich",
//           popular: true,
//         },
//       ],
//     },
//     bubbles: {
//       name: "Bubble Tea & Specials",
//       icon: "🧋",
//       items: [
//         {
//           id: 45,
//           name: "Chocolate Blast Tea",
//           price: 79,
//           image: "🍫",
//           desc: "Rich chocolate bubble tea",
//           popular: true,
//         },
//         {
//           id: 46,
//           name: "Pineapple Bubble Tea",
//           price: 79,
//           image: "🍍",
//           desc: "Tropical pineapple flavor",
//         },
//         {
//           id: 47,
//           name: "Green Melon Bubble Tea",
//           price: 89,
//           image: "🍈",
//           desc: "Fresh melon taste",
//         },
//         {
//           id: 48,
//           name: "Hazelnut Bubble Tea",
//           price: 89,
//           image: "🌰",
//           desc: "Nutty hazelnut flavor",
//         },
//       ],
//     },
//     shakes: {
//       name: "Thick Shakes & Milk Shakes",
//       icon: "🥤",
//       items: [
//         {
//           id: 49,
//           name: "Chocolate Shake",
//           price: 99,
//           image: "🍫",
//           desc: "Rich chocolate blend",
//         },
//         {
//           id: 50,
//           name: "Oreo Special Shake",
//           price: 99,
//           image: "🍪",
//           desc: "Cookies & cream delight",
//           popular: true,
//         },
//         {
//           id: 51,
//           name: "Oreo Shake",
//           price: 69,
//           image: "🍪",
//           desc: "Classic oreo flavor",
//         },
//         {
//           id: 52,
//           name: "Kit Kat Shake",
//           price: 99,
//           image: "🍫",
//           desc: "Crispy Kit Kat blend",
//         },
//         {
//           id: 53,
//           name: "Darbar's Shake",
//           price: 99,
//           image: "🥤",
//           desc: "House special shake",
//           popular: true,
//         },
//         {
//           id: 54,
//           name: "Mr. Bean Shake",
//           price: 99,
//           image: "☕",
//           desc: "Coffee bean special",
//         },
//         {
//           id: 55,
//           name: "Ras Malai Shake",
//           price: 69,
//           image: "🥛",
//           desc: "Traditional sweet flavor",
//         },
//         {
//           id: 56,
//           name: "Darbar's Dry Fruit Shake",
//           price: 69,
//           image: "🥜",
//           desc: "Mixed dry fruits",
//         },
//         {
//           id: 57,
//           name: "Mango Shake",
//           price: 69,
//           image: "🥭",
//           desc: "Fresh mango goodness",
//         },
//         {
//           id: 58,
//           name: "Banana Shake",
//           price: 69,
//           image: "🍌",
//           desc: "Creamy banana blend",
//         },
//         {
//           id: 59,
//           name: "Vanilla Shake",
//           price: 69,
//           image: "🍦",
//           desc: "Classic vanilla taste",
//         },
//         {
//           id: 60,
//           name: "Strawberry Shake",
//           price: 69,
//           image: "🍓",
//           desc: "Sweet strawberry flavor",
//         },
//       ],
//     },
//     bubbleMilk: {
//       name: "Bubble Milk Shakes",
//       icon: "🧋",
//       items: [
//         {
//           id: 61,
//           name: "Bubble Milk Shake",
//           price: 89,
//           image: "🧋",
//           desc: "Classic bubble milk shake",
//         },
//         {
//           id: 62,
//           name: "Black Current Bubble Milk Shake",
//           price: 89,
//           image: "🫐",
//           desc: "Tangy black current",
//         },
//         {
//           id: 63,
//           name: "Red Velvet Bubble Milk Shake",
//           price: 89,
//           image: "❤️",
//           desc: "Luxurious red velvet",
//         },
//         {
//           id: 64,
//           name: "American Bubble Milk Shake",
//           price: 89,
//           image: "🇺🇸",
//           desc: "Classic American style",
//         },
//         {
//           id: 65,
//           name: "Kulfi Bubble Milk Shake",
//           price: 89,
//           image: "🍦",
//           desc: "Traditional kulfi flavor",
//         },
//       ],
//     },
//     lassi: {
//       name: "Lassi & Traditional Drinks",
//       icon: "🥛",
//       items: [
//         {
//           id: 66,
//           name: "Sweet Lassi",
//           price: 49,
//           image: "🥛",
//           desc: "Traditional sweet yogurt drink",
//         },
//         {
//           id: 67,
//           name: "Mango Lassi",
//           price: 49,
//           image: "🥭",
//           desc: "Mango yogurt delight",
//         },
//         {
//           id: 68,
//           name: "Strawberry Lassi",
//           price: 49,
//           image: "🍓",
//           desc: "Fresh strawberry lassi",
//         },
//         {
//           id: 69,
//           name: "Banana Lassi",
//           price: 49,
//           image: "🍌",
//           desc: "Creamy banana lassi",
//         },
//         {
//           id: 70,
//           name: "Darbar's Lassi",
//           price: 59,
//           image: "🥛",
//           desc: "House special lassi",
//           popular: true,
//         },
//       ],
//     },
//     mocktails: {
//       name: "Mocktails & Refreshers",
//       icon: "🍹",
//       items: [
//         {
//           id: 71,
//           name: "Breezy Blue",
//           price: 59,
//           image: "💙",
//           desc: "Refreshing blue mocktail",
//         },
//         {
//           id: 72,
//           name: "Lime Mint",
//           price: 59,
//           image: "🍃",
//           desc: "Zesty lime with mint",
//         },
//         {
//           id: 73,
//           name: "Rose Mocktail",
//           price: 59,
//           image: "🌹",
//           desc: "Floral rose refresher",
//         },
//         {
//           id: 74,
//           name: "Strawberry Mocktail",
//           price: 59,
//           image: "🍓",
//           desc: "Sweet strawberry blend",
//         },
//         {
//           id: 75,
//           name: "Mango Mocktail",
//           price: 59,
//           image: "🥭",
//           desc: "Tropical mango delight",
//         },
//         {
//           id: 76,
//           name: "Men's Mango Mocktail",
//           price: 59,
//           image: "🥭",
//           desc: "Strong mango flavor",
//         },
//         {
//           id: 77,
//           name: "Ice Lemon Tea",
//           price: 49,
//           image: "🧊",
//           desc: "Chilled lemon refresher",
//         },
//       ],
//     },
//     icecream: {
//       name: "Ice Creams",
//       icon: "🍦",
//       items: [
//         {
//           id: 78,
//           name: "Vanilla Ice Cream",
//           price: 69,
//           image: "🍦",
//           desc: "Classic vanilla scoop",
//         },
//         {
//           id: 79,
//           name: "Strawberry Ice Cream",
//           price: 69,
//           image: "🍓",
//           desc: "Fresh strawberry flavor",
//         },
//         {
//           id: 80,
//           name: "Chocolate Ice Cream",
//           price: 69,
//           image: "🍫",
//           desc: "Rich chocolate delight",
//         },
//         {
//           id: 81,
//           name: "Butterscotch Ice Cream",
//           price: 69,
//           image: "🍯",
//           desc: "Creamy butterscotch",
//         },
//         {
//           id: 82,
//           name: "Darbar's Special Ice Cream",
//           price: 69,
//           image: "🍦",
//           desc: "House special flavor",
//           popular: true,
//         },
//       ],
//     },
//   };

//   // Add to cart function
//   const addToCart = (item) => {
//     const existingItem = cart.find((cartItem) => cartItem.id === item.id);
//     if (existingItem) {
//       setCart(
//         cart.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         )
//       );
//     } else {
//       setCart([...cart, { ...item, quantity: 1 }]);
//     }
//   };

//   // Update quantity
//   const updateQuantity = (id, change) => {
//     setCart(
//       cart
//         .map((item) => {
//           if (item.id === id) {
//             const newQuantity = item.quantity + change;
//             return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
//           }
//           return item;
//         })
//         .filter(Boolean)
//     );
//   };

//   // Calculate total
//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   // Handle WhatsApp order submission
//   const handleWhatsAppOrder = () => {
//     if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
//       alert("Please fill in all required fields (Name, Phone, Address)");
//       return;
//     }

//     const orderDetails = cart
//       .map(
//         (item) =>
//           `${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`
//       )
//       .join("\n");

//     const whatsappMessage = `🍵 *NEW ORDER - Shri Sahasra Gourmet LLP*
// 📍 *Darbar Street Tea & Snacks Franchise*
// 🏪 *Location: Bandalaguda Jagir, Hyderabad*

// 👤 *Customer Details:*
// 📛 Name: ${customerInfo.name}
// 📱 Phone: ${customerInfo.phone}
// 📍 Address: ${customerInfo.address}
// ${customerInfo.notes ? `📝 Notes: ${customerInfo.notes}` : ""}

// 🛒 *Order Details:*
// ${orderDetails}

// 💰 *Total Amount: ₹${total}*
// 🚚 *Delivery Required*

// Please confirm this order and delivery time. Thank you! 🙏`;

//     // Admin WhatsApp number - replace with your actual number
//     const adminWhatsApp = "917997107107";

//     window.open(
//       `https://wa.me/${adminWhatsApp}?text=${encodeURIComponent(
//         whatsappMessage
//       )}`,
//       "_blank"
//     );

//     alert(
//       "Order sent to WhatsApp! We will contact you shortly for confirmation."
//     );
//     setCart([]);
//     setShowCart(false);
//     setCustomerInfo({ name: "", phone: "", address: "", notes: "" });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
//       {/* Header */}
//       {/* <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg sticky top-0 z-50"> */}

//       {/* <header className="bg-gradient-to-r from-yellow-800 via-amber-700 to-orange-500 text-white shadow-lg sticky top-0 z-50"> */}

//       <header className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 text-white shadow-lg sticky top-0 z-50">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center space-x-4">
//               <div>
//                 {/* <img
//                   src="/logo.png"   // put your logo file in the public/ folder
//                   alt="Shri Sahasra Gourmet LLP Logo"
//                   className="h-12 w-auto"
//                 /> */}
//                 {/* <div className="text-6xl mb-6 animate-bounce"> */}
//   <img
//     src="https://tse3.mm.bing.net/th/id/OIP.BPhqCOgk7UT7zGJfBEfdyAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
//     alt="Shri Sahasra Gourmet LLP Logo"
//     className="h-20 w-auto mx-auto"
//   />
// {/* </div> */}

//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold">Shri Sahasra Gourmet LLP</h1>
//                 <p className="text-sm opacity-90">
//                   Darbar Street - The Cafe • Bandalaguda Jagir
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center space-x-4">
//               <button
//                 onClick={() => setShowCart(true)}
//                 className="relative bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
//               >
//                 <ShoppingCart className="w-5 h-5" />
//                 {cart.length > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-white text-orange-600 rounded-full w-6 h-6 text-xs flex items-center justify-center font-bold animate-pulse">
//                     {cart.reduce((sum, item) => sum + item.quantity, 0)}
//                   </span>
//                 )}
//               </button>

//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="md:hidden bg-orange-500 hover:bg-orange-600 p-2 rounded-lg"
//               >
//                 {isMenuOpen ? (
//                   <X className="w-5 h-5" />
//                 ) : (
//                   <Menu className="w-5 h-5" />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           {isMenuOpen && (
//             <div className="md:hidden mt-4 bg-amber-700 rounded-lg p-4">
//               <nav className="space-y-2">
//                 <a href="#home" className="block py-2 hover:text-orange-300">
//                   Home
//                 </a>
//                 <a href="#menu" className="block py-2 hover:text-orange-300">
//                   Menu
//                 </a>
//                 <a href="#about" className="block py-2 hover:text-orange-300">
//                   About
//                 </a>
//                 <a href="#contact" className="block py-2 hover:text-orange-300">
//                   Contact
//                 </a>
//               </nav>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section id="home" className="relative overflow-hidden">
//         {/* <div className="absolute inset-0 bg-gradient-to-r from-amber-600/90 to-orange-600/90"></div> */}

//         <div className="absolute inset-0 bg-gradient-to-r from-green-700/80 via-emerald-600/80 to-lime-500/70"></div>

//         <div className="relative container mx-auto px-4 py-20 text-center text-white">
//           <div className="max-w-5xl mx-auto">
//             {/* <div className="text-6xl mb-6 animate-bounce">🍵</div> */}
//             <div className="text-6xl mb-6 animate-bounce">
//   <img
//     src="/logo.png"   // make sure logo.png is in the public/ folder
//     alt="Shri Sahasra Gourmet LLP Logo"
//     className="h-32 w-auto mx-auto"
//   />
// </div>

//             <h2 className="text-4xl md:text-6xl font-bold mb-6">
//               Welcome to Shri Sahasra Gourmet LLP
//             </h2>
//             <p className="text-lg md:text-xl mb-4 opacity-95">
//               🏪 <strong>Darbar Street Tea & Snacks Franchise</strong>
//             </p>
//             <p className="text-xl md:text-2xl mb-8 opacity-90">
//               📍 Bandalaguda Jagir, Hyderabad • Fresh Tea, Coffee & Delicious
//               Snacks
//             </p>
//             <div className="flex flex-wrap justify-center gap-4 mb-8">
//               <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-2">
//                 <Coffee className="w-5 h-5 text-amber-300" />
//                 <span>Fresh Brewed Daily</span>
//               </div>
//               <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-2">
//                 <Star className="w-5 h-5 text-yellow-400" />
//                 <span>Premium Quality</span>
//               </div>
//               <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-2">
//                 <MessageCircle className="w-5 h-5 text-green-400" />
//                 <span>WhatsApp Ordering</span>
//               </div>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a
//                 href="#menu"
//                 className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
//               >
//                 📖 View Menu & Order
//               </a>
//               <a
//                 href={`https://wa.me/917997107107?text=${encodeURIComponent(
//                   "Hello! I want to know more about Shri Sahasra Gourmet LLP"
//                 )}`}
//                 target="_blank"
//                 className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
//               >
//                 <MessageCircle className="w-5 h-5" />
//                 <span>WhatsApp Us</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">
//               Why Choose Shri Sahasra Gourmet?
//             </h2>
//             <p className="text-gray-600">
//               Your trusted tea & snacks partner in Bandalaguda Jagir
//             </p>
//           </div>
//           <div className="grid md:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: "🍵",
//                 title: "Fresh Tea Daily",
//                 desc: "Premium tea leaves, freshly brewed",
//               },
//               {
//                 icon: "🚀",
//                 title: "Quick Service",
//                 desc: "Fast preparation & delivery",
//               },
//               {
//                 icon: "💬",
//                 title: "WhatsApp Orders",
//                 desc: "Easy ordering via WhatsApp",
//               },
//               {
//                 icon: "🏪",
//                 title: "Darbar Franchise",
//                 desc: "Trusted brand quality",
//               },
//             ].map((feature, index) => (
//               <div
//                 key={index}
//                 className="text-center group hover:transform hover:scale-105 transition-all duration-300"
//               >
//                 <div className="text-4xl mb-4 group-hover:animate-bounce">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2 text-gray-800">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Menu Section */}
//       <section
//         id="menu"
//         className="py-16 bg-gradient-to-br from-amber-50 to-orange-50"
//       >
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
//             Our Complete Menu 📋
//           </h2>
//           <p className="text-center text-gray-600 mb-12">
//             Fresh • Delicious • Affordable
//           </p>

//           {/* Category Tabs */}
//           <div className="flex flex-wrap justify-center mb-12 gap-2">
//             {Object.entries(menuCategories).map(([key, category]) => (
//               <button
//                 key={key}
//                 onClick={() => setActiveCategory(key)}
//                 className={`px-4 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-sm ${activeCategory === key
//                   ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg"
//                   : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
//                   }`}
//               >
//                 <span className="mr-2">{category.icon}</span>
//                 {category.name}
//               </button>
//             ))}
//           </div>

//           {/* Menu Items */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {menuCategories[activeCategory].items.map((item) => (
//               <div
//                 key={item.id}
//                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
//               >
//                 <div className="p-4">
//                   <div className="flex justify-between items-start mb-3">
//                     <div className="flex-1">
//                       <div className="flex items-center space-x-2 mb-2">
//                         <span className="text-2xl">{item.image}</span>
//                         {item.popular && (
//                           <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
//                             🔥 Popular
//                           </span>
//                         )}
//                       </div>
//                       <h3 className="text-lg font-bold text-gray-800 mb-1">
//                         {item.name}
//                       </h3>
//                       <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
//                     </div>
//                   </div>

//                   <div className="flex justify-between items-center">
//                     <span className="text-xl font-bold text-orange-600">
//                       ₹{item.price}
//                     </span>
//                     <button
//                       onClick={() => addToCart(item)}
//                       className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
//                     >
//                       <Plus className="w-4 h-4" />
//                       <span>Add</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-4xl font-bold mb-8 text-gray-800">
//               About Shri Sahasra Gourmet LLP
//             </h2>
//             <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 mb-8">
//               <div className="text-6xl mb-6">🏪</div>
//               <p className="text-lg text-gray-700 mb-6">
//                 <strong>Shri Sahasra Gourmet LLP</strong> is a new restaurant
//                 company that has proudly taken the
//                 <strong> Darbar Street Tea and Snacks franchise</strong> at{" "}
//                 <strong>Bandalaguda Jagir, Hyderabad</strong>.
//               </p>
//               <p className="text-lg text-gray-700 mb-6">
//                 We specialize in serving fresh, authentic tea varieties,
//                 delicious coffee blends, and mouth-watering snacks. Our
//                 commitment is to provide quality food and beverages at
//                 affordable prices with excellent customer service.
//               </p>
//               <p className="text-lg text-gray-700 mb-8">
//                 From traditional chai to modern bubble teas, from simple
//                 sandwiches to loaded fries, we have something special for
//                 everyone. Experience the authentic street food culture with
//                 modern hygiene standards.
//               </p>
//               <div className="flex flex-wrap justify-center gap-6 mt-8">
//                 <div className="text-center">
//                   <div className="text-3xl mb-2">🍵</div>
//                   <div className="font-semibold">Fresh Tea Daily</div>
//                   <div className="text-sm text-gray-600">Premium Quality</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl mb-2">🏪</div>
//                   <div className="font-semibold">Darbar Franchise</div>
//                   <div className="text-sm text-gray-600">Trusted Brand</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl mb-2">📱</div>
//                   <div className="font-semibold">Easy Ordering</div>
//                   <div className="text-sm text-gray-600">WhatsApp Direct</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section
//         id="contact"
//         className="py-16 bg-gradient-to-br from-amber-600 to-orange-600 text-white"
//       >
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-12">
//             Contact Shri Sahasra Gourmet LLP
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//             <div className="text-center">
//               <Phone className="w-8 h-8 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Call & WhatsApp</h3>
//               <p className="mb-2">+91 7997107107</p>
//               <a
//                 href="https://wa.me/917997107107"
//                 target="_blank"
//                 className="text-green-300 hover:text-green-200 underline"
//               >
//                 WhatsApp Direct Order
//               </a>
//             </div>
//             {/* <div className="text-center">
//               <MapPin className="w-8 h-8 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Our Location</h3>
//               <p>Darbar Street Tea & Snacks</p>
//               <p>Bandalaguda Jagir</p>
//               <p>Hyderabad, Telangana</p>
//             </div> */}

// <div className="text-center">
//   <MapPin className="w-8 h-8 mx-auto mb-4" />
//   <h3 className="text-xl font-semibold mb-2">Our Location</h3>
//   <p>Darbar Street Tea & Snacks </p>
//    <p>Click Below for direction</p>
//   <a
//     href="https://maps.app.goo.gl/2ygFu4TBjqkaL9yw5"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="text-white underline hover:text-gray-300"
//   >
//     Bandalaguda Jagir, Hyderabad, Telangana
//   </a>
// </div>

//             <div className="text-center">
//               <Clock className="w-8 h-8 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
//               <p>Mon - Sun</p>
//               <p>7:00 AM - 10:00 PM</p>
//               <p className="text-sm opacity-90">Fresh Tea All Day!</p>
//             </div>
//           </div>

//           <div className="text-center mt-12">
//             <h3 className="text-2xl font-bold mb-4">Ready to Order?</h3>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a
//                 href="#menu"
//                 className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
//               >
//                 🍵 Browse Menu
//               </a>
//               <a
//                 href={`https://wa.me/917997107107?text=${encodeURIComponent(
//                   "Hi! I want to place an order from Shri Sahasra Gourmet LLP menu"
//                 )}`}
//                 target="_blank"
//                 className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
//               >
//                 <MessageCircle className="w-5 h-5" />
//                 <span>Order via WhatsApp</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-8">
//         <div className="container mx-auto px-4 text-center">
//           <div className="mb-4">
//             <h3 className="text-2xl font-bold mb-2">
//               🏪 Shri Sahasra Gourmet LLP
//             </h3>
//             {/* <p className="text-gray-400">
//               Darbar Street Tea & Snacks Franchise
//             </p> */}
//             <p className="text-gray-400">Bandalaguda Jagir, Hyderabad</p>
//           </div>
//           <div className="mb-4">
//             <p>
//               📧 contact@ssglp.co.in | 🌐 www.ssglp.co.in | 📱 +91 7997107107
//             </p>
//           </div>
//           <div className="border-t border-gray-700 pt-4">
//             <p>&copy; 2025 Shri Sahasra Gourmet LLP. All rights reserved.</p>
//             <p className="text-sm text-gray-500 mt-2">
//               Proudly serving Bandalaguda Jagir with quality tea & snacks
//             </p>
//           </div>
//         </div>
//       </footer>

//       {/* Cart Modal */}
//       {showCart && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
//             <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-amber-500 to-orange-500 text-white">
//               <h2 className="text-2xl font-bold">🛒 Your Order</h2>
//               <button
//                 onClick={() => setShowCart(false)}
//                 className="text-white hover:text-gray-200"
//               >
//                 <X className="w-6 h-6" />
//               </button>
//             </div>

//             <div className="p-6 overflow-y-auto max-h-96">
//               {cart.length === 0 ? (
//                 <div className="text-center py-8">
//                   <div className="text-6xl mb-4">🍵</div>
//                   <p className="text-gray-600 mb-4">Your cart is empty</p>
//                   <p className="text-sm text-gray-500">
//                     Add some delicious items from our menu!
//                   </p>
//                 </div>
//               ) : (
//                 <>
//                   <div className="mb-4">
//                     <div className="bg-amber-50 rounded-lg p-4 mb-4">
//                       <h3 className="font-semibold text-amber-800 mb-2">
//                         🏪 Shri Sahasra Gourmet LLP
//                       </h3>
//                       <p className="text-sm text-amber-700">
//                         Darbar Street Tea & Snacks
//                       </p>
//                       <p className="text-sm text-amber-700">
//                         Bandalaguda Jagir, Hyderabad
//                       </p>

//                       <p className="text-sm text-amber-700">
//                         <a
//                           href="https://maps.app.goo.gl/2ygFu4TBjqkaL9yw5"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="underline hover:text-amber-900"
//                         >
//                           Bandalaguda Jagir, Hyderabad
//                         </a>
//                       </p>

//                     </div>
//                   </div>

//                   {cart.map((item) => (
//                     <div
//                       key={item.id}
//                       className="flex justify-between items-center py-4 border-b border-gray-100"
//                     >
//                       <div className="flex items-center space-x-4">
//                         <span className="text-2xl">{item.image}</span>
//                         <div>
//                           <h3 className="font-semibold">{item.name}</h3>
//                           <p className="text-gray-600">₹{item.price} each</p>
//                         </div>
//                       </div>
//                       <div className="flex items-center space-x-3">
//                         <button
//                           onClick={() => updateQuantity(item.id, -1)}
//                           className="bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition-colors"
//                         >
//                           <Minus className="w-4 h-4" />
//                         </button>
//                         <span className="font-semibold bg-amber-100 px-3 py-1 rounded-full">
//                           {item.quantity}
//                         </span>
//                         <button
//                           onClick={() => updateQuantity(item.id, 1)}
//                           className="bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition-colors"
//                         >
//                           <Plus className="w-4 h-4" />
//                         </button>
//                         <span className="font-bold text-orange-600 w-16 text-right">
//                           ₹{item.price * item.quantity}
//                         </span>
//                       </div>
//                     </div>
//                   ))}

//                   <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg">
//                     <div className="flex justify-between items-center text-xl font-bold">
//                       <span>Total Amount:</span>
//                       <span className="text-orange-600">₹{total}</span>
//                     </div>
//                     <p className="text-sm text-gray-600 mt-2">
//                       💬 Order will be sent directly to our WhatsApp
//                     </p>
//                   </div>

//                   {/* Customer Info Form */}
//                   <div className="mt-6 space-y-4">
//                     <h3 className="font-semibold text-lg flex items-center space-x-2">
//                       <MessageCircle className="w-5 h-5 text-green-600" />
//                       <span>WhatsApp Order Details</span>
//                     </h3>
//                     <input
//                       type="text"
//                       placeholder="Your Full Name *"
//                       value={customerInfo.name}
//                       onChange={(e) =>
//                         setCustomerInfo({
//                           ...customerInfo,
//                           name: e.target.value,
//                         })
//                       }
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
//                       required
//                     />
//                     <input
//                       type="tel"
//                       placeholder="Your Phone Number *"
//                       value={customerInfo.phone}
//                       onChange={(e) =>
//                         setCustomerInfo({
//                           ...customerInfo,
//                           phone: e.target.value,
//                         })
//                       }
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
//                       required
//                     />
//                     <textarea
//                       placeholder="Delivery Address *"
//                       value={customerInfo.address}
//                       onChange={(e) =>
//                         setCustomerInfo({
//                           ...customerInfo,
//                           address: e.target.value,
//                         })
//                       }
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent h-24"
//                       required
//                     />
//                     <textarea
//                       placeholder="Special Instructions (Optional)"
//                       value={customerInfo.notes}
//                       onChange={(e) =>
//                         setCustomerInfo({
//                           ...customerInfo,
//                           notes: e.target.value,
//                         })
//                       }
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent h-20"
//                     />
//                   </div>

//                   <button
//                     onClick={handleWhatsAppOrder}
//                     disabled={
//                       !customerInfo.name ||
//                       !customerInfo.phone ||
//                       !customerInfo.address
//                     }
//                     className="w-full mt-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
//                   >
//                     <MessageCircle className="w-5 h-5" />
//                     <span>Send Order via WhatsApp - ₹{total}</span>
//                   </button>

//                   <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
//                     <div className="flex items-start space-x-2">
//                       <MessageCircle className="w-5 h-5 text-green-600 mt-0.5" />
//                       <div>
//                         <p className="text-sm text-green-800 font-semibold mb-1">
//                           How WhatsApp Ordering Works:
//                         </p>
//                         <ul className="text-sm text-green-700 space-y-1">
//                           <li>• Order details sent directly to our WhatsApp</li>
//                           <li>• We'll confirm your order immediately</li>
//                           <li>• Payment on delivery (Cash/UPI)</li>
//                           <li>• Fresh preparation & quick delivery</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Floating WhatsApp Button */}
//       <a
//         href={`https://wa.me/917997107107?text=${encodeURIComponent(
//           "Hi! I want to place an order from Shri Sahasra Gourmet LLP"
//         )}`}
//         target="_blank"
//         className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-40"
//       >
//         <MessageCircle className="w-6 h-6" />
//       </a>

//       {/* Quick Order Notification */}
//       {cart.length > 0 && (
//         <div className="fixed bottom-20 right-6 bg-white shadow-2xl rounded-lg p-4 border-l-4 border-orange-500 max-w-sm z-30">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="font-semibold text-gray-800">
//                 🛒 {cart.reduce((sum, item) => sum + item.quantity, 0)} items in
//                 cart
//               </p>
//               <p className="text-orange-600 font-bold">₹{total}</p>
//             </div>
//             <button
//               onClick={() => setShowCart(true)}
//               className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
//             >
//               View Cart
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShriSahasraGourmet;

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Cloud,
  Code,
  Network,
  Shield,
  Users,
  Zap,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  Server,
  Smartphone,
  Building2,
  Target,
  Award,
  Clock,
} from "lucide-react";

export default function SafetagWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "services", "partners", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `New Inquiry from Safetag Website%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ACompany: ${formData.company}%0AService: ${formData.service}%0AMessage: ${formData.message}`;

    const mailtoLink = `mailto:info@safetag.co.in?subject=New Website Inquiry&body=${message}`;
    window.location.href = mailtoLink;

    const whatsappMessage = `New Inquiry:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ACompany: ${formData.company}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
    setTimeout(() => {
      window.open(
        `https://wa.me/919876543210?text=${whatsappMessage}`,
        "_blank"
      );
    }, 500);

    setFormStatus("Thank you! Your inquiry has been sent.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });

    setTimeout(() => setFormStatus(""), 5000);
  };

  const services = [
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Solutions",
      description:
        "Enterprise cloud infrastructure and migration services as Authorized Gold Partner for Yotta Cloud",
      features: ["Cloud Migration", "Infrastructure Setup", "24/7 Support"],
    },
    {
      icon: <Network className="w-12 h-12" />,
      title: "Networking & Telephony",
      description:
        "Complete telephony systems and network infrastructure for seamless business communication",
      features: ["VoIP Systems", "Network Design", "Infrastructure Setup"],
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Software Development",
      description:
        "Custom web and mobile applications tailored to your business requirements",
      features: ["Web Development", "Mobile Apps", "Custom Solutions"],
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "HRMS & Biometric",
      description:
        "Advanced HR management and face recognition solutions through Facto HRMS and Truein partnerships",
      features: ["HRMS Integration", "Face Recognition", "Attendance Systems"],
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Digital Infrastructure",
      description:
        "Secure and scalable digital infrastructure solutions for modern enterprises",
      features: ["Security Systems", "Data Centers", "Backup Solutions"],
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Automation Solutions",
      description:
        "Business process automation to enhance efficiency and reduce operational costs",
      features: [
        "Process Automation",
        "Workflow Design",
        "Integration Services",
      ],
    },
  ];

  const partners = [
    { name: "Yotta Cloud", type: "Authorized Gold Partner" },
    { name: "Facto HRMS", type: "Authorized Gold Partner" },
    { name: "Truein Face Recognition", type: "Authorized Gold Partner" },
  ];

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "500+",
      label: "Happy Clients",
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: "1000+",
      label: "Projects Completed",
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "15+",
      label: "Years Experience",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: "24/7",
      label: "Support Available",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Safetag Enterprises
                </h1>
                <p className="text-xs text-gray-600">LLP</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "services", "partners", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize font-medium transition-colors ${
                      activeSection === item
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {["home", "about", "services", "partners", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-4 py-2 capitalize text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                Trusted Technology Partner
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Empowering Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  {" "}
                  Digital Future
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                End-to-end solutions for telephony, networking, cloud
                infrastructure, and automation. Delivering excellence across
                India with certified expertise.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300"
                >
                  Our Services
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {[Cloud, Server, Smartphone, Building2].map((Icon, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <Icon className="w-12 h-12 text-blue-600" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="flex justify-center text-blue-600 mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Safetag Enterprises
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A Hyderabad-based registered firm delivering excellence in digital
              transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Registered & Certified
                  </h3>
                  <p className="text-gray-600">
                    Safetag Enterprises LLP is a registered firm with certified
                    experts emphasizing quality, ethics, and timely delivery.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Authorized Gold Partner
                  </h3>
                  <p className="text-gray-600">
                    Recognized partner for Yotta Cloud, Facto HRMS, and Truein
                    Face Recognition applications.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Comprehensive Solutions
                  </h3>
                  <p className="text-gray-600">
                    Specializing in telephony, networking, cloud infrastructure,
                    automation, and custom software development.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Serving Telangana & India
                  </h3>
                  <p className="text-gray-600">
                    Supporting businesses across Telangana and pan-India with
                    reliable digital infrastructure solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                <p className="text-lg leading-relaxed mb-6">
                  To empower modern enterprises with cutting-edge digital
                  solutions that drive growth, efficiency, and innovation
                  through reliable technology partnerships and ethical business
                  practices.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                    <span>Quality-driven project delivery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                    <span>Ethical business practices</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                    <span>24/7 customer support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                    <span>Certified expert team</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored for modern enterprises
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-blue-600 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, fidx) => (
                    <li
                      key={fidx}
                      className="flex items-center space-x-3 text-gray-700"
                    >
                      <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Authorized Gold Partner status with industry-leading platforms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {partner.name}
                </h3>
                <p className="text-blue-600 font-semibold">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business? Contact us today for a
              consultation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Address
                      </h4>
                      <p className="text-gray-600">
                        Hyderabad, Telangana, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Phone
                      </h4>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Email
                      </h4>
                      <p className="text-gray-600">info@safetag.co.in</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
                <p className="mt-6 text-blue-100">
                  24/7 Support Available for Critical Issues
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="networking">Networking & Telephony</option>
                    <option value="development">Software Development</option>
                    <option value="hrms">HRMS & Biometric</option>
                    <option value="infrastructure">
                      Digital Infrastructure
                    </option>
                    <option value="automation">Automation Solutions</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                {formStatus && (
                  <div className="p-4 bg-green-100 text-green-700 rounded-lg text-center font-semibold">
                    {formStatus}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Safetag Enterprises</h3>
                  <p className="text-sm text-gray-400">LLP</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering businesses with cutting-edge digital solutions across
                India. Your trusted partner for technology transformation.
              </p>
              <p className="text-sm text-gray-500">
                © 2024 Safetag Enterprises LLP. All rights reserved.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("partners")}
                    className="hover:text-white transition-colors"
                  >
                    Partners
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Hyderabad, Telangana</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@safetag.co.in</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>
              Built with excellence by Safetag Enterprises | Authorized Gold
              Partner for Yotta Cloud, Facto HRMS & Truein
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
