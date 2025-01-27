export const downloadCSV = (data, filename="table_data") => {
    const csvRows = [];
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(',')); // Add headers
  
    for (const row of data) {
      const values = headers.map(header => {
        const escaped = ('' + row[header]).replace(/"/g, '\\"'); // Escape double quotes
        return `"${escaped}"`; // Wrap in quotes
      });
      csvRows.push(values.join(',')); // Add row values
    }
  
    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', filename + '.csv');
    a.click();
    URL.revokeObjectURL(url); // Clean up
  };

