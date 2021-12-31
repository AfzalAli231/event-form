import React from 'react';


export default function GetServices({ vendordata }) {
    vendordata.replace("")
    var array = vendordata.split(',');
    return (
     <>
         {array[0]}
     </>
    );
}

