// import { useEffect, useState } from "react";

// function LastSalesPage() {
//   const [sales, setSales] = useState();
//   const [isLoading, setLoaing] = useState(false);

//   useEffect(() => {
//     setLoaing(true);
//     fetch("https://nextjs-course-53929-default-rtdb.firebaseio.com/sales.json")
//       .then((response) => response.json())
//       .then((data) => {
//         const transformData = [];
//         for (const key in data) {
//           transformData.push({
//             id: key,
//             username: data[key].username,
//             valume: data[key].valume,
//           });
//         }
//         setSales(transformData);
//         setLoaing(false);
//       });
//   }, []);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  // if (!sales) {
  //   return <p>No data yet.</p>;
  // }

//   return (
//     <ul>
//       {sales.map((sale) => {
//         <li key={sale.id}>
//           {sale.username} - ${sale.valume}
//         </li>;
//       })}
//     </ul>
//   );
// }

// export default LastSalesPage;
import { useEffect, useState } from 'react';

function LastSalesPage() {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://nextjs-course-53929-default-rtdb.firebaseio.com/sales.json')
      .then((response) => response.json())
      .then((data) => {
        const transformedSales = [];

        for (const key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }
        
        setSales(transformedSales);
        setIsLoading(false);
      });
  }, []);

   if (isLoading) {
     return <p>Loading...</p>;
   }
   if (!sales) {
     return <p>No data yet.</p>;
   }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.valume}
        </li>
      ))}
    </ul>
  );
}

export default LastSalesPage;
