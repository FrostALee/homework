import './App.css';
import styled from "styled-components";
import React, { useState } from "react";
import {Route} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Detail from './Detail';


const Homework = (props) => {

  const history = useHistory();

  const day_dict = {
    0: "일",
    1: "월",
    2: "화",
    3: "수",
    4: "목",
    5: "금",
    6: "토",
  };

  const week = Object.keys(day_dict).map((daynow, i) => {
    let today = new Date().getDay();

    let day =
      today + parseInt(daynow) > 6
        ? today + parseInt(daynow) - 7
        : today + parseInt(daynow);
    return day_dict[day];
  });

  const totalScore = week.map((sc, i) => {
    let randomNum = Math.random() * 5
    let randomNumFloor = Math.floor(randomNum)

    return {
      today: sc,
      score: randomNumFloor
    };
  });

  return (
    <div style={{ 
          display: "flex", justifyContent: "center", 
          alignItems: "center", width: "auto" }}>
      <div
        style={{
          Width: "500px", height: "auto",
          margin: "15px", padding: "10px",
          border: "1px solid gray", boxSizing: "border-box",
          borderRadius: "10px",
        }}
      >
        <h3 style={{
          textAlign: "center", fontSize: "36px",
          fontWeight: "bold", color: "#dd0b64"
        }}>
          나의 일주일은
        </h3>
        <hr style={{ width: "90%", marginTop: "30px" }} />
        {totalScore.map((sc, i) => {

          return (
            <div
              key={`week${i}`}
              style={{ 
                display: "flex", justifyContent: "center", 
                alignItems: "center", margin: "15px" }}>

              <p style={{ 
                  margin: "15px", fontWeight: "bold", 
                  color: "#005bc5", fontSize: "20px" }}>
                {sc.today}
              </p>

              {Array.from({ length: 5 }, (item, i) => {
                return (
                  <div key={i}
                    style={{
                      width: "25px", height: "25px",
                      borderRadius: "15px", margin: "15px",
                      backgroundColor: sc.score < i ? "#ffe7bf" : "#fcc755"
                    }}>
                  </div>
                )
              })}
              
              <div style={{
                width: "0px", height: "0px", 
                borderLeft: "15px solid #005bc5", borderTop: "10px solid transparent",
                borderBottom: "10px solid transparent", margin: "15px", 
                marginLeft: "15px"
              }}
              onClick={() => {
                history.push("/detail");
              }}
              >
              </div>
            </div>
          )
        })}

        <hr style={{ width: "90%", marginTop: "30px" }} />
        <div
          style={{
            textAlign: "center", marginTop: "40px",
            fontSize: "20px", fontWeight: "bold",
            marginBottom: "20px"
          }}>
          평균 평점
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            style={{
              width: "200px", height: "50px",
              backgroundColor: "#dd0b64", borderRadius: "5px",
              textAlign: "center", margin: "35px",
              color: "white", fontSize: "20px",
              fontWeight: "bold", outline: "none",
              border: "0"
            }}
            onClick={() => {
              window.location.reload()
            }}
          > 초기화
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homework;