import React from "react";

const CityAQIForecast = (props) => {
  let yesterdayDate = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
  let todayDate = new Date();
  let tomorrowDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  function convertDate(date) {
    let year = date.toLocaleString("default", { year: "numeric" });
    let month = date.toLocaleString("default", { month: "2-digit" });
    let day = date.toLocaleString("default", { day: "2-digit" });
    let formattedDate = year + "-" + month + "-" + day;
    return formattedDate;
  }
  let formattedYesterday = convertDate(yesterdayDate);
  let formattedToday = convertDate(todayDate);
  let formattedTomorrowDate = convertDate(tomorrowDate);

  return <div>CityAQIForecast</div>;
};

export default CityAQIForecast;
