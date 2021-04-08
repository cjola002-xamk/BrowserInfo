import { useEffect, useState } from "react";

function IpInfo(){

    const [machineIp, setMachineIp] = useState();

    const getIp = async() => {
        
        try{

            const conn = await fetch('https://api.ipify.org?format=json');
            const data = await conn.json();

            setMachineIp(data.ip);
            console.log(data);
        }

        catch(error){
            console.log(error);
        }
    };

    
    //Fetch data

    useEffect( () => {
        getIp();
    }, []);
    

    return(
        <>
            <h1>IP Address: {machineIp}</h1>

        </>
    )
}

export default IpInfo;