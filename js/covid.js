const APIURL = "https://disease.sh/v3/covid-19/countries/india";

async function getRecords(url) {
    const response = await fetch(url);
    const resData = await response.json();
    console.log(resData);
    showRecords(resData);
}


getRecords(APIURL);

function showRecords(record) {
    console.log(record);
    document.getElementById("main").innerHTML =
        `
        <div class="container">
            <h2 class="h2">Cases</h2>
                <div class="cases">
                    <div class="cases-item">
                        <h3 class="h3">Total Cases</h3>
                        <div class="record">${record.cases} </div>
                    </div>
                        <div class="cases-item">
                            <h3 class="h3">Cases per Million</h3>
                            <div class="record">${record.casesPerOneMillion}</div>
                        </div>
                        <div class="cases-item">
                            <h3 class="h3">Cases reported Today</h3>
                            <div class="record">${record.todayCases}</div>
                        </div>
                </div>

                    <h2 class="h2">Recovered</h2>
                        <div class="recovered">
                            <div class="recovered-item">
                                <h3 class="h3">Total Recovered</h3>
                                <div class="record">${record.recovered} </div>
                            </div>
                            <div class="recovered-item">
                                <h3 class="h3">Cases per Million</h3>
                                <div class="record">${record.recoveredPerOneMillion}</div>
                            </div>
                                <div class="recovered-item">
                                <h3 class="h3">Cases Recovered Today</h3>
                                <div class="record">${record.todayRecovered}</div>
                            </div>
                        </div>
                        <h2 class="h2">Active Cases</h2>
                        <div class="active">
                            <div class="active-item">
                                <h3 class="h3">Total Active Cases</h3>
                                <div class="record">${record.active} </div>
                            </div>
                            <div class="active-item">
                                <h3 class="h3">Active Cases per Million</h3>
                                <div class="record">${record.activePerOneMillion}</div>
                            </div>
                        </div>
                        <h2 class="h2">Deaths</h2>
                            <div class="deaths">
                                <div class="deaths-item">
                                    <h3 class="h3">Total Deaths</h3>
                                    <div class="record">${record.deaths} </div>
                                </div>
                                <div class="deaths-item">
                                    <h3 class="h3">Deaths per Million</h3>
                                    <div class="record">${record.deathsPerOneMillion}</div>
                                </div>
                                <div class="deaths-item">
                                    <h3 class="h3">Deaths reported Today</h3>
                                    <div class="record">${record.todayDeaths}</div>
                                </div>
                            </div>   
        </div>   
                `

}
document.getElementById("time").innerHTML = Date();