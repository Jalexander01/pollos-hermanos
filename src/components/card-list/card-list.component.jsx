import React from 'react';

export const CardList = (props) => {
    console.log(props);
     
    return (
        <div>Hello user
         <p>
   {props.name}
</p>
<p>
   {props.children}
</p> 

        </div>
       
    );
   

}

