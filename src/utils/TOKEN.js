import { config } from '../../config.js';
import fetch from 'node-fetch';
import { writeFileSync } from 'fs';

const url = config.url + '/login';

fetch(url, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "username": config.username,
    "password": config.password
  })
})
.then(response => response.json())
.then(data => {
  console.log(data);
  
  const mergedData = {...config, ...data};
  
  writeFileSync('../../config.js', `export const config = ${JSON.stringify(mergedData, null, 2)}`);
})
.catch((error) => {
  console.error('Error:', error);
});