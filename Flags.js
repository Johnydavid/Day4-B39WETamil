// Displaying all the country flags in the console using 

const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all');
request.send(null);
request.onload = function() {
    console.log(request.responseText);
        console.log(typeof request.responseText);
        const countries = JSON.parse(request.responseText);
        console.log(typeof countries);
        console.log(countries);

        for(country of countries){
            const {flags} = country;
            console.log(flags);
        }
}