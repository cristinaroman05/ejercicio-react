import "./header.css"
const headerLink = (props) =>{
    const linkStyle = props.linkStyle
    const renderLink = () =>{
        return(
            linkStyle === "button" ? 
            <button className="button">{props.text}</button> 
            :<a className="link" target="blank" href={props.url}>{props.text}</a>
        )
        
    }
    return (
        renderLink()
    )
}
export default headerLink 