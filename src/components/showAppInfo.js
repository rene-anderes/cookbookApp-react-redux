import React from "react";
import reactIcon from "../images/React-icon.svg";
import reduxIcon from "../images/Redux-icon.svg";
import starTrekIcon from "../images/star-trek.png";

export const ShowAppInfo = () => {

    return(
        <div className="ra-lcars-text-yellow">
            <p className="ra-lcars-text-red w3-large" style={{textTransform: "uppercase"}}>Informationen zu dieser App</p>
            <p>
                <ul className="w3-ul">
                    <li className="w3-bar">
                        <img className="w3-bar-item" style={{width: "80px"}} alt="React" src={reactIcon}/>
                        <div className="w3-bar-item">
                            <span className="w3-large" style={{textTransform: "uppercase"}}>React</span><br/>
                            <span>React ist eine freie und quelloffene JavaScript-Bibliothek zur Erstellung von Benutzeroberflächen. Sie verwendet eine deklarative Syntax, um die Struktur der Benutzeroberfläche zu beschreiben, und ermöglicht es Entwicklern, effizient und skalierbar interaktive Anwendungen zu erstellen.</span>
                        </div>
                    </li>
                    <li className="w3-bar">
                        <img className="w3-bar-item" style={{width: "80px"}} alt="Redux" src={reduxIcon}/>
                        <div className="w3-bar-item">
                            <span className="w3-large" style={{textTransform: "uppercase"}}>Redux</span><br/>
                            <span>Redux ist eine JavaScript-Bibliothek zur Verwaltung des Zustands in Webanwendungen. Sie ermöglicht die zentrale Verwaltung des Anwendungszustands und die Definition von Regeln, wie sich dieser Zustand basierend auf Aktionen ändern kann.</span>
                        </div>
                    </li>
                    <li className="w3-bar">
                        <img className="w3-bar-item" style={{width: "80px"}} alt="Star Trek" src={starTrekIcon}/>
                        <div className="w3-bar-item">
                            <span className="w3-large" style={{textTransform: "uppercase"}}>LCARS Design</span><br/>
                            <span>LCARS steht für Library Computer Access/Retrieval System. Es ist ein fiktives Designsystem für Benutzeroberflächen, das in vielen Star Trek-Serien und -Filmen verwendet wird. LCARS zeichnet sich durch seine übersichtliche Gestaltung, klare Linien aus.</span>
                        </div>
                    </li>
                    
                </ul>
            </p>
        </div>
    );
}

