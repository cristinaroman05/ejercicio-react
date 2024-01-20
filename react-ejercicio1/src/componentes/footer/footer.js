import "./footer.css"

const Footer = (props) =>{
    return(
        <div className="footer-container">
            <p className="footerText">{props.footerText}</p> 
        </div>
       
    )
}
export default Footer