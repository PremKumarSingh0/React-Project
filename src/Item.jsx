
import style from "./Button.module.css";


function Item({favFood , ButtonX}){
//   let {ButtonX} = props;
//     let {favFood} = props;
    // ye khud k e objec bana deta h react [prob naam se{item ki jagah prob,favFood}]
return(
<>
<li className="list-group-item">{favFood}

<button className={`${style.Button}  btn btn-info`} onClick={ButtonX}> click me</button>
</li>


</>

)

}

export default Item