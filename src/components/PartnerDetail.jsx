// import { useParams, Link } from "react-router-dom";
// import { partners } from "../data/partners";

// export default function PartnerDetail() {
//   const { partnerId } = useParams();
//   const partner = partners.find((p) => p.id === partnerId);

//   if (!partner) {
//     return (
//       <div className="max-w-2xl mx-auto p-8 text-center">
//         <h2 className="text-3xl font-bold mb-4">Partner Not Found</h2>
//         <Link to="/partners" className="text-blue-700 underline">
//           Back to partners
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-8">
//       <h1 className="text-4xl font-bold mb-2">{partner.name}</h1>
//       <p className="mb-2 text-blue-600 font-semibold">{partner.type}</p>
//       <p className="mb-8 text-gray-700">{partner.details}</p>
//       <Link to="/partners" className="text-gray-700 underline">
//         ← Back to all partners
//       </Link>
//     </div>
//   );
// }

import { useParams, Link } from "react-router-dom";
import { partners } from "../data/partners";

export default function PartnerDetail() {
  const { partnerId } = useParams();
  const partner = partners.find((p) => p.id === partnerId);

  if (!partner) {
    return (
      <div>
        <h2>Partner Not Found</h2>
        <Link to="/partners">Back to partners</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{partner.name}</h1>
      <p className="text-blue-600 font-semibold mb-6">{partner.type}</p>
      <p className="text-gray-700 leading-relaxed">{partner.details}</p>
      <Link to="/partners" className="text-blue-500 underline mt-6 block">
        ← Back to all partners
      </Link>
    </div>
  );
}
