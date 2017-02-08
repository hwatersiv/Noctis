require('es6-promise').polyfill();
require('isomorphic-fetch');

export const getInventory = () => {
  return fetch('/api/inventory')
    .then(function (response) {
      return response.json()
    }).then(function (json) {
      return json
    });
}

export const addItem = (item) => {
  console.log(item)
}