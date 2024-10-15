import React from 'react';

const Table = ({data}) => {
    return (
        <div>
           {
            JSON.stringify(data) === '{}'
            ?''
            : <table>
                <tr>
                    <td>City:</td>
                    <td>{data.name}</td>
                </tr>
                <tr>
                    <td>Temp:</td>
                    <td>{Math.floor(data.main.temp - 273.15)+'°C'}</td>
                </tr>
                <tr>
                    <td>Description:</td>
                    <td>{data.weather[0].description}</td>
                </tr>
                <tr>
                    <td>Country:</td>
                    <td>{data.sys.country}</td>
                </tr>
              </table>
           }
        </div>
    );
}

export default Table;