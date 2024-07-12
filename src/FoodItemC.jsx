import Item from "./Item";

 function FoodItemC({itemList}){
    // let foodItem =["Dal","Green Vegitable", "Roti","Salad"];
   
    return(<>
        <ul className="list-group">
  {itemList.map((item ) =>(
   <Item  key={item} favFood = {item} ButtonX={()=> 
   console.log(  `${item} clicked` )}>
  
   </Item>
  ))}
  
  {/* yahan se food item ki list send karunga [favFood = {item}]*/}
  
</ul>
</>
    )
 } 

 export default FoodItemC