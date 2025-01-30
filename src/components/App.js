// import React from "react";
// import './../styles/App.css';

// const App = () => {
//   const weather = {
//     temperature: 25, 
//     conditions: "Sunny"
//   }
//   return (
//     <div>
//         <p style={weather.temperature> 20?{backgroundColor:'red'}:{backgroundColor:'blue'}}>Temperature: {weather.temperature}</p>
//         <span > Condition: {weather.conditions}</span>

//     </div>
//   )
// }

// export default App
// import React from "react";
// import './../styles/App.css';

// const App = () => {
//   const weather = {
//     temperature: 25, 
//     conditions: "Sunny"
//   }
//   return (
//     <div>
//         <p style={weather.temperature > 20 ? {color:'red'} : {color:'blue'}}>Temperature: {weather.temperature}</p>
//         <span> Condition: {weather.conditions}</span>
//     </div>
//   )
// }

// export default App
import './../styles/App.css';

import React ,{useState, useEffect} from 'react';

const App = () => {
  const [weatherInput, setWeatherInput] =useState({ temperature: 25, conditions: "Sunny" });
  const [textColor, setTextColor] = useState("blue");
  useEffect(() => {
    // Set text color based on temperature threshold
    if (weatherInput.temperature > 20) {
      setTextColor("red");
    } else {
      setTextColor("blue");
    }
  }, [weatherInput.temperature]);
 
  return (
    <div>
        {/* Do not remove the main div */}
       <div style ={{color:textColor}}>
        <p>Temperature: {weatherInput.temperature}</p>
        <p>Conditions: {weatherInput.conditions}</p>
       </div>
    </div>
  )
}


export default App
