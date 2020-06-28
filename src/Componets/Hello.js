import React from 'react'

// Props Usage
const Hello = (props) =>{
    console.log(props)
return (
    <div>
<h1>Functional Component {props.name} a.k.a {props.heroName}</h1>
{props.children}
</div>
)}

export default Hello;