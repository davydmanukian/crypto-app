import { cryptoAssets, cryptoData } from "./data";

export function fakeFetchCrypto() {
    console.log(5);
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-API-KEY': 'ud6B3518WhS4F+cZ/wl+fsg010PHhgaIfxtqXzgX0hI='
        }
      };
      
    const result = fetch('https://openapiv1.coinstats.app/coins', options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err)
    );

    return result

    // return new Promise(resolve => {
    //     setTimeout(() => {
    //         resolve(cryptoData)
    //     }, 1500)
    // })
}

export function fetchAssets() {
    console.log(6);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(cryptoAssets)
        }, 1500)
    })
}