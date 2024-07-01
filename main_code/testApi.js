async function getCountryCapital(countryName) {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        if (!response.ok) {
            throw new Error('Country not found');
        }
        const data = await response.json();
        const capital = data[0]?.capital;
        return capital;
    } catch (error) {
        console.error('Error fetching country data:', error);
        return null;
    }
}

const countryName = 'Mayotte'; 
getCountryCapital(countryName)
    .then(capital => {
        if (capital) {
            console.log(`${countryName}'s capital is ${capital}`);
        } else {
            console.log(`Couldn't find the capital for ${countryName}`);
        }
    })
    .catch(err => console.error('Error:', err));
