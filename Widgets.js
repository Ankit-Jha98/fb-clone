import React from 'react'

function Widgets() {
    return (
        <div className="widgets">
        <iframe
         src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2F
         www.facebook.com%2FWHO&tabs=timeline&width=340&small_header=false&
         adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
            width="340"
            hight="100%"
            style={{ border:"none",overflow:"hidden"}}
            scrolling="yes"
            frameborder="0"
            allowTrasparency="true"
            allow="encrypted-media">          
        </iframe>
            
        </div>
    );
}

export default Widgets
