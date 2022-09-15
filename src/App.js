import { useState } from "react";
import "./styles.css";

export default function App() {
  // const brandData = ["puma", "adiddas", "wildcraft", "levis", "celio"];
  // const [brands, setBrand] = useState(brandData);
//   const searchBrands = (value) => {
//     const data = brandData.filter((brand) => brand.includes(value));
//     console.log(data);
//     setBrand(data);
//   };
//   return (
//     <div className="App">
//       <input onChange={(e) => searchBrands(e.target.value)} />
//       <ul>
//         {brands.map((brand) => (
//           <li>{brand}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// Do the same thing with this Data Structure
const brandData1 = [
  { id: "0a", brandName: "puma" },
  { id: "0b", brandName: "adiddas" },
  { id: "0c", brandName: "wildcraft" },
  { id: "0d", brandName: "levis" },
  { id: "0e", brandName: "celio" }
];

const [brands, setBrand] = useState(brandData1);
function searchBarHandler(value){
  const data = brandData1.filter(brand => brand.brandName.includes(value));
  setBrand(data);
  return value;
}
return(
  <div>
    <input onChange={(e) => searchBarHandler(e.target.value)} />
    <ul>
      {brands.map(brand => <li key={brand.id}>
        {brand.brandName}
      </li>)}
    </ul>
  </div>
);
}

// Do the same thing with this Data Structure
// const brandData2 = {
//   customerRating: [
//     { brandId: "0a", rating: "4.5" },
//     { brandId: "0b", rating: "4" },
//     { brandId: "0c", rating: "3.8" },
//     { brandId: "0d", rating: "4.5" },
//     { brandId: "0e", rating: "3.9" }
//   ],
//   brandNames: [
//     { id: "0a", brandName: "puma" },
//     { id: "0b", brandName: "adiddas" },
//     { id: "0c", brandName: "wildcraft" },
//     { id: "0d", brandName: "levis" },
//     { id: "0e", brandName: "celio" }
//   ]
// };
