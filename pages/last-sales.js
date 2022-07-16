import { useEffect, useState } from "react";
import useSWR from "swr";

function LastSalesPage() {
  const [sales, setSales] = useState();
  // const [isLoading, setLoaing] = useState(false);

  const { data, error } = useSWR(
    "https://nextjs-course-53929-default-rtdb.firebaseio.com/sales.json"
  );

  useEffect(() => {
    if (data) {
      const transformData = [];
      for (const key in data) {
        transformData.push({
          id: key,
          username: data[key].username,
          valume: data[key].valume,
        });
      }
      setSales(transformData);
    }
  }, [data]);

  // useEffect(() => {
  //   setLoaing(true);
  //   fetch("https://nextjs-course-53929-default-rtdb.firebaseio.com/sales.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const transformData = [];
  //       for (const key in data) {
  //         transformData.push({
  //           id: key,
  //           username: data[key].username,
  //           valume: data[key].valume,
  //         });
  //       }
  //       setSales(transformData);
  //       setLoaing(false);
  //     });
  // }, []);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  // if (!sales) {
  //   return <p>No data yet.</p>;
  // }

  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!data || !sales) {
    return <p>Loading...</p>;
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
