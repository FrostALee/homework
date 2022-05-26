import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Homework from './Homework'
import {Route} from 'react-router-dom';


const Detail = (props) => {
    const history = useHistory();
    const dayName = useParams();
    
    return(
        <div>
            
         무언가 만들고 싶었지만 보이지 않아 만들 수 없었습니다...
        </div>
    )
}

export default Detail