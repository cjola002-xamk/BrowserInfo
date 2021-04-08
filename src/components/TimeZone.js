function TimeZone(){

    let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return(
        <h1>Your Timezone: {timezone}</h1>
    );
}

export default TimeZone;