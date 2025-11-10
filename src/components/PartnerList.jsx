import { Link } from "react-router-dom";
import { partners } from "../data/partners"; // Path to your data file

export default function PartnerList() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {partners.map((partner) => (
        <Link
          to={`/partners/${partner.id}`} // use partner.id as unique URL
          key={partner.id}
          className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 block"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {partner.name}
          </h3>
          <p className="text-blue-600 font-semibold">{partner.type}</p>
        </Link>
      ))}
    </div>
  );
}
