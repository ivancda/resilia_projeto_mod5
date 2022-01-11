import React from 'react'
import LoadingReq from '../Loading/LoadingReq'
import { useEffect, useState } from "react";

// url=https://apireservas.herokuapp.com/reservas

const Reservas = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(()=>{
        setLoading(false);
      },2000)
    }, [])

    return (
            loading ? <LoadingReq/> : 
            <div>
                Reservas Hotel California
            </div>
    )
}

export default Reservas
