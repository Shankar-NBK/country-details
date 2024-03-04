let input=document.querySelector(".searchTxt");
let button=document.querySelector(".Btn_Search");
let result=document.querySelector(".result");


button.addEventListener("click", function() {
    //e.preventDefault();
    let url=`https://restcountries.com/v3.1/name/${input.value}?fullText=true`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        result.innerHTML=`
        <h1>${input.value}</h1>
        <p><b>Capital:</b> ${data[0].capital}</p>
        <p><b>Timezone:</b> ${data[0].timezones}</p>
        <p><b>Continents:</b> ${data[0].continents}</p>
        <p><b>Currencies:</b> ${Object.keys(data[0].currencies)}</p>
        <p><b>Currencies name:</b> ${data[0].currencies[Object.keys(data[0].currencies)].name}</p>
        <p><b>Symbol:</b> ${data[0].currencies[Object.keys(data[0].currencies)].symbol}</p>
        <img src="${data[0].flags.png}">
        `;
    })
    
    .catch(() => {
        result.innerHTML=`<h2>Couldn't Find the Country</h2>`;
    });
    console.log(url);
    //alert("test");
});
