import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";

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
  let forecastData = props.forecast;
  console.log(formattedToday, formattedTomorrowDate, formattedYesterday);

  function checkForecast(item) {
    if (item.day === formattedToday) {
      return true;
    } else if (item.day === formattedTomorrowDate) {
      return true;
    } else if (item.day === formattedYesterday) {
      return true;
    } else {
      return false;
    }
  }

  const getForecastValues = (forecast) => {
    let ret = [];
    Object.entries(forecast).map(function (item) {
      let obj = {};
      let key = item[0];
      obj["key"] = key;
      obj["value"] = forecast[item[0]].filter(checkForecast);
      ret.push(obj);
    });
    return ret;
  };

  return [formattedYesterday, formattedToday, formattedTomorrowDate].map(
    (date) => (
      <div>
        <h3>{date}</h3>
        {getForecastValues(forecastData).map((item) => (
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{item.key}</Card.Title>
              <Card.Text>
                {item.value
                  .filter(function (val) {
                    return val.day === date;
                  })
                  .map((value) => (
                    <>
                      <p>Average: {value.avg}</p>
                      <p>Maximum: {value.max}</p>
                      <p>Minimum: {value.min}</p>
                    </>
                  ))}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    )
  );
};

export default CityAQIForecast;
