import style from "./FoodInput.module.css";
function FoodInput({InputProps}){
    return(
<>
<input type="text" placeholder="enter here" 
className={style.FoodInput}
onChange={InputProps} 

// onChange={(event)=>{console.log(event.target.value)}

/>
</>

    );
};

export default  FoodInput;