import React from 'react';
type UserType = {
    name:string;
    age:number;
    isRegister:boolean;
    lang:string[];

}
const User = ({name,age,isRegister,lang}:UserType) => {

    return (
        <div style={{border:"solid 3px gold", background:"tomato"}}>
            <h1>User Name : {name}</h1>
            <h2>User Age Is : {age}</h2>
            {
                isRegister? <h3 style={{color:"green"}}>User Is Register ok </h3> : <h3 style={{color:"red"}}>User Is Not Register</h3>
            }
           <h4>
            Languages : 
            {
                lang.map((language,index)=>{
                    return <span key={index}> {language} </span>
                })
            }
           </h4>
        </div>
    );
};

export default User;