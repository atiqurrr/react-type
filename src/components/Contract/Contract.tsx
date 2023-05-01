import React from 'react';

type UserType1 ={
    user: {
        name: string;
        age: number;
        isRegister: boolean;
        language: string[];
    }
}

const Contract = ({user}:UserType1) => {
    return (
        <div>
            <h1>{user.name}</h1>
            <h3>{user.age}</h3>
            {user.isRegister ? <p>User is register ok </p> : <p>User is not Register</p>}
            <h5 style={{color:"blue"}}>
                Languages : 
                {
                    user.language.map((lang,index)=>{
                        return <p key={index}>{lang.toUpperCase()}</p>
                    })
                }
            </h5>
        </div>
    );
};

export default Contract;