import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";

export default function Covid() {
  const [Data, setData] = useState([]);
  console.log(Data, "++Data");
  const getCovidData = async () => {
    const res = await fetch(
      "https://data.covid19india.org/travel_history.json"
    );
    const CovidData = await res.json();
    console.log(CovidData, "CovidData");
    setData(CovidData.travel_history);
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <h1>covid 19 India</h1>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Placename</th>
            <th>Type</th>
            <th>Source</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((e) => {
            return (
              <>
                <tr>
                  <td>{e._cn6ca}</td>

                  <td>{e.placename}</td>
                  <td>{e.type}</td>
                  <td><a href={e.type}>{e.datasource}</a></td>

                  <td>{e.address}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
