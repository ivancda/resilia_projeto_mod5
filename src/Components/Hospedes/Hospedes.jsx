import React from 'react'
import LoadingReq from '../Loading/LoadingReq'
import { useEffect, useState } from "react";

const Hospedes = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(()=>{
        setLoading(false);
      },2000)
    }, [])

    return (
            loading ? <LoadingReq/> : 
            <div>
                Hospedes Hotel California
            </div>
    )
}

export default Hospedes
