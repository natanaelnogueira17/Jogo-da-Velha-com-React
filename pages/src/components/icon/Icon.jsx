function Icon({iconName, size, link}){
  return(
    <a href={link} target="blanck">
     <img src={`../icons/${iconName}.svg`} width={size}/>
     </a>
     
    
   
  )
}

Icon.defaultprops = {
  size: '30px'
}

export default Icon