function OsInfo(){

    let OS = window.navigator.oscpu.toString();
    let resolution = window.screen.width.toString() + "x" + window.screen.height.toString();
    

    return(
        <>
            <h1>OS: {OS}</h1>
            <h1>Screen resolution: {resolution}</h1>
        </>
    );
};

export default OsInfo;