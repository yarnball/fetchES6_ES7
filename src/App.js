import React from "react";

const URL =
  "https://itunes.apple.com/search?term=Doctor%20Who&media=music&entity=album";

const promiseTest = e => {
  fetch(URL)
    .then(r => {
      if (r.ok) {
        return r.json();
      } else {
        throw new Error("Couldn't obtain information from the service");
      }
    })
    .then(json => console.log("promise", json.results))
    .catch(err => console.error(err.message));
};
const request = async () => {
  const response = await fetch(URL);
  return await response.json();
};

async function asyncTest() {
  const response = await fetch(URL);
  if (response.ok) {
    const json = await response.json();
    console.log("Async", json.results);
  }
  // throw new Error("Could not retrieve results from service");
}

// console.log('asyncres', )
request().then(data => console.log(data.results));

export const App = () => (
  <div>
    <button onClick={promiseTest}>Promise</button>
    <button onClick={asyncTest}>Async #1</button>
    <button onClick={request}>Async #2</button>
  </div>
);

