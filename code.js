var leaderboardList = document.querySelectorAll('.leaderboard-list-view');
var result = [];

leaderboardList.forEach(function(entry) {
    var user_info = {};

    var rank = entry.querySelector('.span-flex-2.text-center p').innerText.trim();
    user_info['Rank'] = rank;

    var name = entry.querySelector('.span-flex-4 a.leaderboard-hackername').innerText.trim();
    user_info['Name'] = name;

    var score = entry.querySelector('.span-flex-3 p').innerText.trim();
    user_info['Score'] = score;

    result.push(user_info);
});

var json_result = JSON.stringify(result, null, 2);
console.log(json_result);
