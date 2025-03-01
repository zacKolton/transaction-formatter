import { 
    formatDate,
    negateAmount

 } from "./format-utils";

document.getElementById('drop-area').addEventListener('dragover', function (event) {
    event.preventDefault();
    event.stopPropagation();
    this.style.backgroundColor = '#f0f0f0'; 
});

document.getElementById('drop-area').addEventListener('drop', function (event) {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = 'copy';
    if (event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      processCSV(file);
    }
    this.style.backgroundColor = ''; 
});

function processCSV(file) {
    const reader = new FileReader();
    reader.onload = function (event) {
        console.log('File is being read.'); // Debug log
        const text = event.target.result;
        const allRows = text.split('\n');
        let headerFound = false;
        let table = document.createElement('table');
        table.innerHTML = '<tr><th>Transaction Date</th><th>Description</th><th>Transaction Amount</th></tr>';

        for (let i = 0; i < allRows.length; i++) {
            const row = allRows[i];
            if (!headerFound) {
                if (row.trim().startsWith('Item #')) {
                    headerFound = true;
                    console.log('Header found at line:', i); // Debug log
                }
            } else {
                const cols = row.split(',');
                if (cols.length >= 6) {
                    const formattedDate = formatDate(cols[2].trim());
                    const negatedAmount = negateAmount(cols[4].trim());
                    const html = `<tr><td>${formattedDate}</td><td>${cols[5].trim()}</td><td>${negatedAmount}</td></tr>`;
                    table.innerHTML += html;
                }
            }
        }
        document.getElementById('table-container').innerHTML = '';
        document.getElementById('table-container').appendChild(table);
        console.log('Table should now be visible.'); // Debug log
    };
    reader.readAsText(file);
}
