import React from 'react';

function About({imageSrc ="https://via.placeholder.com/215",about}) {
   
  return (
    <div>
        <aside>
            <img src={imageSrc} alt="blog logo"></img>
            <p>{about}</p>
        </aside>
    </div>
  );
}

export default About;