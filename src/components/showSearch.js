

export const ShowSearch = () => {
    const dispatch = useDispatch();
    
    return(
        <div className="w3-container w3-margin-left w3-animate-opacity">
            <p className="ra-lcars-text-red w3-large" style={{textTransform: "uppercase"}}>Rezeptsuche</p>
            <input type="text" onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            console.log(e.target.value);
                        }
                    }}
                    placeholder='Type to search'/>
        </div>
    );

}