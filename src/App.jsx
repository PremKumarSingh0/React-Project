
import React from 'react';
import FoodItemC from './FoodItemC';
import ErrorMsg from './ErrorMsg';
import Container from './Container';
import FoodInput from './FoodInput';
import  {useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  let foodItem =["Sabji","Dal","Green Vegitable", "Roti","Salad"];

  // let textStateArr =  useState("");
  // let texToShow = textStateArr[0];
  // let setTextState = textStateArr[1];
  // console.log(`current value of texyState: ${texToShow}`);


  const [texToShow, setTextState] = useState(); 
  
  // isko destructure karne k liye [] use karte h ye string h
 

  const InputI = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  };
  

  return(
  
 <Container containerProp={foodItem}>
  

<h1 >.............Helthy Food..............</h1>
<ErrorMsg itemList ={foodItem}></ErrorMsg>
<FoodInput InputProps ={InputI}></FoodInput>
<p>{texToShow}</p>
<FoodItemC itemList ={foodItem}></FoodItemC>

</Container>


  );

}

export default App;