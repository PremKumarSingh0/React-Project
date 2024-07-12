import style from "./Container.module.css";
function Container({children, containerProp}){
    return(
        <div className={style.container}>
           
            {children}
           

            </div>
    );
};

export default Container;

// isko idea nahi h isme humne kya pass kiya h...javascripst k component ko send kae sakte h