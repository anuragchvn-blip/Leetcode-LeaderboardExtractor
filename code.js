// Function to extract LeetCode leaderboard data
function extractLeetCodeLeaderboard() {
    // Select all rows in the leaderboard table
    var rows = document.querySelectorAll('.ranking-table-row');
    var result = [];

    rows.forEach(function(row) {
        var user_info = {};

        // Extract Rank
        var rankElement = row.querySelector('.ranking-col span');
        if (rankElement) {
            user_info['Rank'] = rankElement.innerText.trim();
        }

        // Extract Username
        var usernameElement = row.querySelector('.ranking-username a');
        if (usernameElement) {
            user_info['Username'] = usernameElement.innerText.trim();
        }

        // Extract Score
        var scoreElement = row.querySelector('.ranking-score span');
        if (scoreElement) {
            user_info['Score'] = scoreElement.innerText.trim();
        }

        // Push the user info to the result array
        result.push(user_info);
    });

    // Convert the result array to a JSON string
    var json_result = JSON.stringify(result, null, 2);
    return json_result;
}

// Example usage
var leaderboardData = extractLeetCodeLeaderboard();
console.log(leaderboardData);
