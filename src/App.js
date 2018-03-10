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
}
async function asyncTest() {
        try {
            let response = await fetch(URL);
            let json = await response.text()
            console.log("oooog", json)
        } catch (e) {
          console.log('BAD', e.message)
            return e.message;
        }
    }

const request = async () => {
  const response = await fetch(URL);
  return await response.json();
}

// IMPORTANT *** How to get results
// request().then(data => console.log(data.results));

export const App = () => (
  <div>
    <button onClick={promiseTest}>Promise</button>
    <button onClick={asyncTest}>Async #1</button>
    <button onClick={request}>Async #2</button>
  </div>
);

