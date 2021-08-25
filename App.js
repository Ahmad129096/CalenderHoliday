import React, { useState, useEffect } from "react";
import Calendar from "./Calender";
import { getCode } from "country-list";
import Select from "react-select";
import countryList from "react-select-country-list";
import Calender from "./Calender";

const App = () => {
  const [data, setData] = useState(null);
  const [country, setcountry] = useState("Pakistan");
  const options = countryList().getData();
  // console.log(getValue('Pakistan'));
  useEffect(() => {
    if (getCode(country)) {
      fetch(
        `https://calendarific.com/api/v2/holidays?&api_key=34a020dcca6346f0554fcfd0fb2e275dd58fbd41&country=${getCode(
          country
        )}&year=2021`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data);
          
        });
    }
  }, [country]);

  return (
    <div>
      <div style={{ marginLeft: 500, marginTop: 10, width: 250 }}>
        <Select
          options={options}
          value={country}

          onChange={(country) => setcountry(String(country).toLowerCase())}
        />
        
      </div>
      {data && <Calender data={data} />}
    </div>
  );
};

export default App;
