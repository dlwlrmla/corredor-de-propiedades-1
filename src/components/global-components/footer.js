import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import footerdata from '../../data/footerdata.json';

class Footer_v1 extends Component {

    componentDidMount() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"
        const inlineStyle = {
            backgroundImage: 'url('+publicUrl+footerdata.footerbg+')'
        }

        return (
             <footer className="footer-area style-two">
              <div className="container">
              <div className="subscribe-area">
                <div className="row justify-content-center">
                  <div className="col-xl-7 col-lg-9 text-center">
                    <h2>Mantente al día</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla dui nibh, idhendrerit Suspendisse faucibus nulla accumsan. </p>
                    <div className="rld-single-input">
                      <input type="text" placeholder="Tu correo electrónico" />
                      <button className="btn">Enviar</button>
                    </div>
                  </div>
                </div>
              </div>
                <div className="footer-top">
                  <div className="row">
                    <div className="col-sm-4">
                    </div>
                    <div className="col-sm-8">
                      <div className="footer-social text-sm-right">
                        <span>Síguenos</span>
                        <ul className="social-icon">
                         { footerdata.socialicon.map( ( item, i )=>
                            <li key={i}>
                              <a href={ item.url } target="_blank"><i className={ item.icon } /></a>
                            </li>
                          ) }
                        </ul>
                      </div>  
                    </div>
                  </div>
                </div>
              </div>
            </footer>

        )
    }
}


export default Footer_v1