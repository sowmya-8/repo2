//import React from 'react'

export default function Seven() {
    const wonders = [
        {Name:"Taj Mahal",
          Location:"Agra",
          Country:"india",
          URL:"https://www.pinterest.com/pin/277675133270114147/"},
        {Name:"petra",
           Location:"Ma'an",
           Country:"Jordan",
           URL:"https://www.pinterest.com/pin/288230444907695661/" },
        {Name:"Great wall of china",
            Location:"Near Beijing",
            Country:"china",
            URL:"https://www.pinterest.com/pin/473792823309132645/"},
        {Name:"Colosseum",
            Location:"Rome",
            Country:"Italy",
            URL:"https://www.pinterest.com/pin/6403624463958364/"},
        {Name:"Machu Picchu",
            Location:"Urubamba Province",
            Country:"Peru",
            URL:"https://www.pinterest.com/pin/4503668371409802/"},
        {Name:"Christ the Redeemer",
            Location:"Rio de Janeiro",
            Country:"Brazil",
            URL:"https://www.pinterest.com/pin/37717715625802295/" },
        {Name:"Chichén Itzá",
            Location:"Yucatán",
            Country:"Mexico",
            URL:"https://www.pinterest.com/pin/558587160052420880/"
        }
    ]
  return (
    <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Location</th>
              <th scope="col">Country</th>
              <th scope="col">URL</th>
            </tr>
          </thead>
          <tbody>
            {wonders.map(
                (x)=>( 
                <tr>
                    <td>{x.Name}</td>
                    <td>{x.Location}</td>
                    <td>{x.Country}</td>
                    <td>{x.URL}</td>
                  </tr>
                 )
            )}
           
          </tbody>
        </table>
    </div>
  )
}