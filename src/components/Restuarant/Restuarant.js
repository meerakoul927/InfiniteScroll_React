import React from "react";
import './Restuarant.css';


export const Restuarant = (props) =>{
     const resList = props?.listofres;
     return (
          <>
          <div
            style={{
                 display : 'flex',
                 flexWrap:'wrap',
                 paddingTop:'0px'
            }}
          >
          {resList?.map(item => {
                 return(
                    <div
                    className="container_width"
                  >
                     <div
                      >
                           <img
                             src ={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item?.info?.cloudinaryImageId}`}
                             alt = "Img not found"
                             width= "273px"
                              height = "182px"
                              style = {{
                                    borderRadius:'5px'
                              }}
                           />
                      </div> 
                      <div
                        style = {{
                           marginLeft:'12px'
                        }}
                      >
                      <p
                        style = {{
                           color : '#000000',
                           fontFamily:'openSans',
                           fontWeight:'600'
                        }}
                      >{item?.info?.name}</p>
                      <div
                        className="container_desc"
                      >
                       <span>{item?.info?.avgRatingString}</span>
                       <span>.</span>
                       <span
                         style = {{
                                fontWeight:'600'
                         }}
                       >{item?.info?.sla?.slaString}</span>
                      </div>

                      <div
                        className="container_place"
                      >
                         <span>{item?.info?.cuisines}</span>
                         <span
                           style = {{
                            margin : '0px !important',
                           padding : '0px !important'
                         }}
                         >{item?.info?.areaName}</span>
                      </div>
                    </div>
                   
        
                  </div>
                 )
          })}
          </div>
         
          </>
     )
}
