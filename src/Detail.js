import React from "react";
import { useHistory, useParams } from "react-router-dom";


const Detail = (props) => {
    const history = useHistory();
    const [rate, setRate] = React.useState(0);
    const paramitor = useParams();
    
    return(
        <div>

            어디로 가야하죠 매니저님... 우는 학생은 처음인가요...

            <div
                style={{
                    Width: "500px", height: "auto",
                    margin: "15px", padding: "10px",
                    border: "1px solid gray", boxSizing: "border-box",
                    borderRadius: "10px",
                }}>
                <p style={{
                    textAlign: "center", color: "#dd0b64",
                    fontSize: "30px", fontWeight: "bold"
                }}>
                    {paramitor.day_Name}요일
                    평점 남기기
                </p>

                <div
                    style={{
                        display: "flex", justifyContent: "center",
                        textAlign: "center", margin: "15px",
                        width: "100%",
                    }}>
                    {Array.from({ length: 5 }, (item, i) => {
                        return (
                            <div key={i}
                                onClick={() => { setRate(i + 1); }}
                                style={{
                                    width: "25px", height: "25px",
                                    borderRadius: "20px", margin: "15px",
                                    backgroundColor: rate < i + 1 ? "#ffe7bf" : "#fcc755",
                                }}
                            ></div>
                        );
                    })}
                </div>

                <button
                    style={{
                        width: "250px", backgroundColor: "#dd0b64",
                        border: "0px", outline: "none",
                        borderRadius: "15px", padding: "1rem",
                        color: "#fff", fontSize: "20px",
                        fontWeight: "bold", marginBottom: "45px"
                    }}
                    onClick={() => {
                        history.goBack();
                    }}
                >
                    확인
                </button>
            </div>

        </div>
    )
}

export default Detail