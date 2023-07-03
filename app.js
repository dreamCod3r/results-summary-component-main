/* const url = '/data.json';

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Create an HTML table
    const table = document.createElement('table');

    // Loop through the data and create a row for each item
    for (const item of data) {
      const row = document.createElement('tr');

      // Add the item's properties to the row
      for (const key in item) {
        const cell = document.createElement('td');
        cell.textContent = item[key];
        row.appendChild(cell);
      }

      table.appendChild(row);
    }

    // Append the table to the document
    document.body.appendChild(table);
  }); */

const url = './data.json';
fetch(url)
          .then(response => response.json())
          .then(data => {
            const table = document.createElement('table');
            const newData = [...data.map(item => ({icon: item.icon, category: item.category, score: item.score}))];
            for (const item of newData) {
              const row = document.createElement('tr');
              for (const [property, value] of Object.entries(item)) {
                const cell = document.createElement('td');
                if (property === 'icon') {
                  const img = document.createElement('img');
                  img.src = value;
                  cell.appendChild(img);
                } else if (property === 'score'){
                  const span = document.createElement('span');
                  span.textContent = ' / 100';
                  cell.textContent = value;
                  cell.appendChild(span);
                } else {
                  cell.textContent = value;
                }
                row.appendChild(cell);
              }
              table.appendChild(row);
            }
            const gainedScores = document.getElementById('gained-scores');
            gainedScores.appendChild(table);
          });

