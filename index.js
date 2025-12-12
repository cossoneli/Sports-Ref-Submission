const teamRecords = {};   // Would be our json data 

// Initialize our matrix
let tableMatrix = [];   

// Get list of team names
const teams = Object.keys(teamRecords);

teams.forEach((team) => {
    let row = [];
    teams.forEach((opponent) => {
        // Exclude team playing itself
        if (team === opponent) {
            row.push("-");
        }
        // Get wins against opponent
        else {
            const record = teamRecords[team][opponent];
            row.push(`${record.W}`);
        }
    });
    // Push the row with all the teams wins into the table matrix
    tableMatrix.push(row);
});