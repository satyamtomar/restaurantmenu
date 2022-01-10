import React from 'react'

const MenuCard = ({menuData}) => {
    return (
        <>
        <section className="md:px-4 px-2 pb-6 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 space-x-4 " >
       {menuData.map((curElem)=>{
           return( 
               <>
            <div className="card-container " key={curElem.id}>
            <div className="card rounded-lg">
                <div className="card-body ">
                     <span className="card-number card-circle subtle">{curElem.id}</span>
                     <span className="card-author subtle" >{curElem.name}</span>
                     <h2 className="card-title ">{curElem.name}</h2>
                     <span className=" card-description subtle     " >
                     {curElem.description} 
                     </span>
                     <div className="card-read"></div>
                </div>
                 <img src={curElem.image} alt="images" className="card-media"/> 
               
            </div>
        </div>
        </>
           );
       })}
        
            
       </section>
        </>
    )
}

export default MenuCard
