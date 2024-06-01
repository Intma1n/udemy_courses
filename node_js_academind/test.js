const timeout = setTimeout(() => console.log('LOX'), 3000);

async function sendReauest() {
  try {
    return await fetch(
      'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
      {
        headers: {
          'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
          'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
}

sendReauest().then((r) => console.log(r));

console.log('1');
