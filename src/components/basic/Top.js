import React from 'react'
import './nav.css'
const Top = () => {
    return (
        <div className="flex flex-row justify-center md:pt-8 pt-3">
        
            {/* <h1 className="text-6xl text-gray-200 ">Restaurant Menu</h1> */}
            <svg viewBox="0 0 2000 210" className="h-full w-full items-center">
                <symbol id="s-text">
                  <text text-anchor="middle" x="50%" y="76%" className=" text-8xl ">
                  Restaurant Menu
                  
                  </text>
                </symbol>
                <g className = "g-ants">
		<use href="#s-text" class="text-copy"></use>
		<use href="#s-text" class="text-copy"></use>
		<use href="#s-text" class="text-copy"></use>
		<use href="#s-text" class="text-copy"></use>
		<use href="#s-text" class="text-copy"></use>
	</g>
              </svg>
        </div>
    )
}

export default Top
