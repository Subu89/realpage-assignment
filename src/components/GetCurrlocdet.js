import React, { useEffect, useState } from "react";
import { TOKEN, FEED_AQI_BASE_URL } from "../utils/AQIConst";
import LocAQI from "./CurrLocAQI/LocAQI";

const GetCurrlocdet = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [locdata, setLocdata] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      await fetch(`${FEED_AQI_BASE_URL}geo:${lat};${long}/?token=${TOKEN}`)
        .then(res => res.json())
        .then(result => {
          setLocdata(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  // const getNearestStation = async () => {
  //   try {
  //     await navigator.geolocation.getCurrentPosition((position) => {
  //       setLat(position.coords.latitude);
  //       setLong(position.coords.longitude);
  //     })
  //     setLoading(true);
  //     fetch(`${FEED_AQI_BASE_URL}geo:${lat};${long}/?token=${TOKEN}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setLocdata(data);
  //         setLoading(false);
  //       })
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  // useEffect(() => {
  //   getNearestStation();
  // }, [lat]);

  return (
    <div>
      {(typeof locdata.data != 'undefined')
      ? <LocAQI data={locdata.data} />
      : (
        <div></div>
      )}
    </div>
  );
};

export default GetCurrlocdet;
