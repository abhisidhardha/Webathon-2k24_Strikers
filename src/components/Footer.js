import './Footer.css'
function Footer(){
    return(
            <div className="footer">
                <ul className="textlist d-flex m-0 list-unstyled justify-content-center">
                    <li className="p-3 rounded">About</li>
                    <li className="p-3 rounded">F.A.Q</li>
                    <li className="p-3 rounded">Privacy Policy</li>
                    <li className="p-3 rounded">Terms of Service</li>
                    <li className="p-3 rounded">Contact Us</li>
                </ul>
                <ul className="imagelist d-flex m-0 list-unstyled justify-content-center">
                    <li className="p-3 rounded"><img src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Facebook_glyph_svg-256.png" style={{width:'40px'}} alt="" /></li>
                    <li className="p-3 rounded"><img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-256.png" style={{width:'40px'}} alt="" /></li>
                    <li className="p-3 rounded"><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/03-twitter-256.png" style={{width:'40px'}} alt="" /></li>
                    <li className="p-3 rounded"><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-256.png" style={{width:'40px'}} alt="" /></li>
                </ul>
            </div>
    )
}
    
export default Footer ;