import React from 'react'


function Header(props) {
  return (
    <div>
        <header>
            <h1>{props.blogname}</h1>
        </header>
    </div>
  )
}

export default Header