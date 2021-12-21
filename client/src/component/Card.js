import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const Card=()=>{
    let [product,setProduct]=useState([])
    useEffect(()=>{
        fetch("/products")
        .then(res => res.json())
        .then(({data}) => setProduct(data))
        
        .catch(err => console.log(err))
        
    },[])
    let history=useHistory()
    const handleParams=(obj)=>{
        const option={
            pathname:`/product/${obj.id}`,
            state:obj
        }
        history.push(option)
    }
    return(
        <>
   {
       !product ? <div>Loading</div>
       :

    <div>

<div class="text-center mb-4">
<div class="container">
{/* <!--Grid row--> */}
<div class="row wow fadeIn">

    {/* <!--Grid column--> */}
    {
        product.map(data => {
            return(
                <div class="col-lg-3 col-md-6 mb-4">

        {/* <!--Card--> */}
        <div class="card" style={{cursor:"pointer",maxWidth:"300px",height:"350px"}} onClick={()=> handleParams(data)}>

            {/* <!--Card image--> */}
            <div class="view overlay">
                <img width="400" height="180" src={data.photo} class="card-img-top" alt="Iphone 12 Pro Max" />
                <a href="#">
                    <div class="mask rgba-white-slight"></div>
                </a>
            </div>
            {/* <!--Card image--> */}

            {/* <!--Card content--> */}
            <div class="card-body text-center">
                {/* <!--Category & Title--> */}
                <a href="" class="grey-text">
                    <h5>{data.category}</h5>
                </a>
                <h5>
                    <strong>
    <a href="#"class="dark-grey-text" style={{fontSize:"14px"}}>{data.name}      <span class=" ml-2 badge badge-pill danger-color" style={{backgroundColor:"red",color:"#fff",padding:"6px"}}>NEW</span>
    </a>
  </strong>
                </h5>

                <h4 class="font-weight-bold blue-text">
                    <strong>Rs {data.price}</strong>
                </h4>

            </div>
            {/* <!--Card content--> */}

        </div>
        

    </div>


            )
        })
    }
    

    </div>
    </div>
    </div>    
</div>
  
}
       
       </>
       )
}

export default Card;