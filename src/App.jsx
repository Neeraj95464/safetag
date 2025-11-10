// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import Highlights from "./components/Highlights";
// import MenuGrid from "./components/MenuGrid";
// import Gallery from "./components/Gallery";
// import Testimonials from "./components/Testimonials";
// import OrderForm from "./components/OrderForm";
// import ContactForm from "./components/ContactForm";
// import DarbarStreetCafe from "./page/DarbarStreetCafe";

// export default function App() {
//   return (
//     <div className="font-sans bg-gradient-to-br from-yellow-50 to-rose-50 min-h-screen text-gray-900">
//       {/* <Navbar />
//       <HeroSection />
//       <Highlights />
//       <MenuGrid />
//       <Gallery />
//       <Testimonials />
//       <OrderForm />
//       <ContactForm /> */}
//       <DarbarStreetCafe />
//       {/* <footer className="bg-gray-900 text-yellow-100 py-6 text-center text-lg tracking-wide mt-6">
//         <div>
//           © 2025 Shri Sahasra Gourmet LLP | Franchise: Darbar Street Cafe
//         </div>
//         <div>Hyderabad, TS, India | ssglp.co.in</div>
//       </footer> */}
//     </div>
//   );
// }

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import PartnerDetail from "./components/PartnerDetail";
// import SafetagWebsite from "./page/SafetagWebsite";

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/partners/:partnerId" element={<PartnerDetail />} />
//         <Route path="/*" element={<SafetagWebsite />} />
//       </Routes>
//     </Router>
//   );
// }

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PartnerList from "./components/PartnerList";
import PartnerDetail from "./components/PartnerDetail";
import SafetagWebsite from "./page/SafetagWebsite";
import TrueinPartner from "./components/TrueinPartner";
import YottaPartner from "./components/YottaPartner";
import FactoHRPartner from "./components/FactoHRPartner";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/partners" element={<PartnerList />} /> */}
        <Route path="/" element={<SafetagWebsite />} />
        <Route path="/partners" element={<SafetagWebsite />} />
        <Route path="/partners/truein" element={<TrueinPartner />} />
        <Route path="/partners/yotta" element={<YottaPartner />} />
        <Route path="/partners/factohr" element={<FactoHRPartner />} />
      </Routes>
    </Router>
  );
}

export default App;
