function ErrorMsg({itemList}){
    // let foodItem =["Dal","Green Vegitable", "Roti","Salad"
    return( 
<>
{itemList.length === 0 && <h3>errors</h3>}
</>

    )


}

export default ErrorMsg