import React, { useEffect, useState } from "react";
import { yardList } from "./yardList";

const CityWreckers = ({ cityValue }) => {
  const [yardCity, setYardCity] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    if (cityValue) {
      const yardCity = yardList;
      const cityName = cityValue.toLowerCase();
      const list = yardCity.filter((yard) => {
        return yard.cityName === cityName;
      });
      setYardCity(list);
      console.log(cityName);
    } else {
      setYardCity(yardList);
      console.log("not found");
    }
  }, [cityValue]);

  return (
    <>
      {yardCity.map((city) => {
        return (
          <div className="col-lg-3 cities-card">
            <div className="row">
              <div className="col-lg-6">
                <h4 className="city-name">{city.cityName}</h4>
                <p className="yardcount">{city.noOfYards}</p>
              </div>
              <div className="col-lg-6">
                <img
                  src={"./avatars/m.png"}
                  style={{ height: "50px", width: "50px", padding: "10px" }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CityWreckers;
