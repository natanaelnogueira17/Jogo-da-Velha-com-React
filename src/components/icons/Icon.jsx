function Icon ({iconName, size, link, children}){
  return(
<a href={link} target= "blank">
 <img src={`/icons/${iconName}.svg`} width={size}/>
  {children}
</a>
    
  )
}

Icon.defaultProps = {
size: '30px'
}

export default Icon