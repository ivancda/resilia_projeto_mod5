import React from 'react'
import LoadingReq from '../Loading/LoadingReq'
import { useEffect, useState } from "react";

const Funcionarios = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(()=>{
        setLoading(false);
      },2000)
    }, [])

    return (
            loading ? <LoadingReq/> : 
            <div>
                Funcionarios Hotel California
            </div>
    )
}

export default Funcionarios
