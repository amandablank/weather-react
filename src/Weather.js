import React from "react";
import axios from "axios";
import { Grid } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${props.city} is ${Math.round(response.data.main.temp)}°C`
    );
  }
  let apiKey = "393db4e5c25bdf1bb6b5d70d133f7a67";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&APPID=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <Grid
      height="120"
      width="120"
      color="#A03599"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
