import { Routes, Route } from "react-router-dom";
import reactIcon from "../images/React-icon.svg";
import reduxIcon from "../images/Redux-icon.svg";
import searchIcon from "../images/Search-icon.svg";
import { ShowAppInfo } from "./showAppInfo";
import { Show47 } from "./show74";
import { ShowThx} from "./showThx";
import { ShowA113} from "./showA113";
import { Show28} from "./show28";
import { ShowPi} from "./showPi";
import { ShowDetail } from "./showDetail";
import { basePath, version } from "../index";
import { ShowSearch } from "./showSearch";
import { Link } from "react-router-dom";

const Content = () => {
    const recipePath = basePath + "/:id";
    const infoPath = basePath + "/appInfo";
    const fortySevenPath = basePath + "/47";
    const thxPath = basePath + "/thx1138";
    const aOneOneThreePath = basePath + "/a113";
    const aTwentyEightPath = basePath + "/28";
    const piPath = basePath + "/pi";
    return (
        
        <div className="w3-rest" style={{height: "100%"}}>
            <div className="w3-container">
                <div className="w3-cell-row">
                    <div className="w3-cell ra-lcars-top-left-corner ra-lcars-color-lavender">
                        <div className="ra-lcars-top-left-corner-inside"></div>
                    </div>
                    <div className="w3-cell ra-lcars-horizontal-spacer"></div>
                    <div className="w3-cell ra-lcars-top" style={{width: "5%"}}>
                        <div className="ra-lcars-color-yellow ra-lcars-line-bold">&nbsp;</div>
                    </div>
                    <div className="w3-cell ra-lcars-horizontal-spacer"></div>
                    <div className="w3-cell ra-lcars-top">
                        <div className="ra-lcars-color-lightblue ra-lcars-line-bold">&nbsp;</div>
                    </div>
                    <div className="w3-cell ra-lcars-horizontal-spacer"></div>
                    <div className="w3-cell ra-lcars-top" style={{width: "2em"}}>
                        <div className="ra-lcars-color-grey ra-lcars-line-bold">&nbsp;</div>
                    </div>
                    <div className="w3-cell ra-lcars-horizontal-spacer"></div>
                    <div className="w3-cell ra-lcars-top">
                        <div className="ra-lcars-color-red ra-lcars-line-bold ra-lcars-line-end-left">&nbsp;</div>
                    </div>
                </div>
                <div className="ra-lcars-vertical-spacer"></div>
                <div className="w3-cell-row" style={{height: "80vh"}}>
                    <div className="w3-cell ra-lcars-line-left ra-lcars-color-red" style={{height: "100%"}}>
                        <div className="ra-lcars-color-red w3-right-align" style={{minHeight: "10em"}}><span className="ra-lcars-code"><Link to={fortySevenPath}>47</Link>-<Link to={thxPath}>1138</Link></span>
                            <div className="w3-center">
                                <Link to={basePath}>
                                    <img alt="Rezeptsuche" style={{marginTop: "2rem"}} width={"28px"} src={searchIcon}/>
                                </Link>
                            </div>
                        </div> 
                        <div className="ra-lcars-vertical-spacer"></div>
                        <div className="ra-lcars-color-yellow w3-right-align" style={{height: "40%", maxHeight: "75%", minHeight: "12em"}}><span className="ra-lcars-code"><Link to={aOneOneThreePath}>A1-13</Link></span></div>
                        <div className="ra-lcars-vertical-spacer"></div>
                        <div className="ra-lcars-color-grey w3-right-align" style={{height: "20%", maxHeight: "30%", minHeight: "10em"}}><span className="ra-lcars-code">V-{version}-<Link to={aTwentyEightPath}>28</Link></span>
                            <div className="w3-center">
                                <Link to={infoPath}>
                                    <img style={{marginTop: "0.5rem"}} width={"28px"} alt="React" src={reactIcon}/><br/>
                                    <img width={"28px"} alt="Redux" style={{marginTop: "0.5rem"}} src={reduxIcon}/>
                                </Link>
                            </div>
                        </div>
                        <div className="ra-lcars-vertical-spacer"></div>
                    </div>
                    <div className="w3-cell">
                        <div className="w3-container w3-margin-left ra-lcars-text-yellow-light" style={{maxWidth: "800px"}}>
                            <Routes>
                                <Route path={basePath} element={ <ShowSearch/> }/>
                                <Route path={infoPath} element={ <ShowAppInfo/> }/>
                                <Route path={fortySevenPath} element={ <Show47/> }/>
                                <Route path={thxPath} element={ <ShowThx/> }/>
                                <Route path={aOneOneThreePath} element={ <ShowA113/> }/>
                                <Route path={aTwentyEightPath} element={ <Show28/> }/>
                                <Route path={piPath} element={ <ShowPi /> }/>
                                <Route path={recipePath} element={ <ShowDetail /> }/>
                            </Routes>
                        </div>
                    </div>
                </div>
                <div className="ra-lcars-vertical-spacer"></div>
                <div className="w3-cell-row">
                    <div className="w3-cell ra-lcars-bottom-left-corner ra-lcars-color-yellow">
                        <div className="ra-lcars-bottom-left-corner-inside"></div>
                    </div>
                    <div className="w3-cell ra-lcars-horizontal-spacer"></div>
                    <div className="w3-cell ra-lcars-bottom">
                        <div className="ra-lcars-color-grey ra-lcars-line-thin ">&nbsp;</div>
                    </div>
                    <div className="w3-cell ra-lcars-horizontal-spacer"></div>
                    <div className="w3-cell ra-lcars-bottom" style={{width: "5%"}}>
                        <div className="ra-lcars-color-lavender ra-lcars-line-thin">&nbsp;</div>
                    </div>
                    <div className="w3-cell ra-lcars-horizontal-spacer"></div>
                    <div className="w3-cell ra-lcars-bottom">
                        <div className="ra-lcars-color-red ra-lcars-line-thin">&nbsp;</div>
                    </div>
                    <div className="w3-cell ra-lcars-horizontal-spacer"></div>
                    <div className="w3-cell ra-lcars-bottom" style={{width: "2em"}}>
                        <div className="ra-lcars-color-yellow ra-lcars-line-thin">&nbsp;</div>
                    </div>
                    <div className="w3-cell ra-lcars-horizontal-spacer"></div>
                    <div className="w3-cell ra-lcars-bottom">
                        <div className="ra-lcars-color-lightblue ra-lcars-line-thin ra-lcars-line-end-left">&nbsp;</div>
                    </div>
                </div>
                <div>&nbsp;</div>
            </div>
         </div>
    );
}

export default Content;