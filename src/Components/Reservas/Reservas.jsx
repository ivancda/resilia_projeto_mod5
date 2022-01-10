import React from 'react'
import LoadingReq from '../Loading/LoadingReq'
import { useEffect, useState } from "react";

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
