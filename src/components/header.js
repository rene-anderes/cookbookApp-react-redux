
const Header = () => {
    return (
        <header className="w3-container">
        <div className="w3-cell-row" style={{height: "auto"}}>
            <div className="w3-cell ra-lcars-line-left ra-lcars-color-yellow" tyle={{height: "auto"}}>
                <div className="ra-lcars-color-yellow" style={{height: "75%"}}>&nbsp;</div>
                <div className="ra-lcars-vertical-spacer"></div>
                <div className="ra-lcars-color-lavender" style={{height: "25%"}}>&nbsp;</div>
            </div>
            <div className="w3-cell">
                <div className="w3-margin-left"><h1>Kochbuch chez René</h1></div>
            </div>
        </div>
        <div className="ra-lcars-vertical-spacer"></div>
        <div className="w3-cell-row">
            <div className="w3-cell ra-lcars-bottom-left-corner ra-lcars-color-red">
                <div className="ra-lcars-bottom-left-corner-inside"></div>
            </div>
             <div className="w3-cell ra-lcars-horizontal-spacer"></div>
            <div className="w3-cell ra-lcars-bottom" style={{width: "15%"}}>
                <div className="ra-lcars-color-lavender ra-lcars-line-thin">&nbsp;</div>
            </div>
            <div className="w3-cell ra-lcars-horizontal-spacer"></div>
            <div className="w3-cell ra-lcars-bottom">
                <div className="ra-lcars-color-yellow ra-lcars-line-thin ">&nbsp;</div>
            </div>
            <div className="w3-cell ra-lcars-horizontal-spacer"></div>
            <div className="w3-cell ra-lcars-bottom">
                <div className="ra-lcars-color-red ra-lcars-line-thin">&nbsp;</div>
            </div>
            <div className="w3-cell ra-lcars-horizontal-spacer"></div>
            <div className="w3-cell ra-lcars-bottom" style={{width: "1em"}}>
                <div className="ra-lcars-color-grey ra-lcars-line-thin">&nbsp;</div>
            </div>
            <div className="w3-cell ra-lcars-horizontal-spacer"></div>
            <div className="w3-cell ra-lcars-bottom">
                <div className="ra-lcars-color-lightblue ra-lcars-line-thin">&nbsp;</div>
            </div>
            <div className="w3-cell ra-lcars-horizontal-spacer"></div>
            <div className="w3-cell ra-lcars-bottom" style={{width: "1em"}}>
                <div className="ra-lcars-color-yellow ra-lcars-line-thin ra-lcars-line-end-left">&nbsp;</div>
            </div>
        </div>
        </header>
    );
}

export default Header;