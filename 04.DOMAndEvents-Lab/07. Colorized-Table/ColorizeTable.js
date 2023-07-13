function colorize() {
    const rows = Array.from(document.querySelectorAll("tr:nth-child(even)"));
    for (const row of rows) {
        row.style.background = `teal`
    }
    // rows.forEach(row => {       
    //     row.style.background = `teal`
    // });
}