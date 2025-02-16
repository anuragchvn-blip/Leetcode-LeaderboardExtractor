const leaderboardList = document.querySelectorAll('.leaderboard-list-view');
const result = [];

leaderboardList.forEach(entry => {
    const user_info = {};

    const rank = entry.querySelector('.span-flex-2.text-center p').innerText.trim();
    user_info['Rank'] = rank;

    const name = entry.querySelector('.span-flex-4 a.leaderboard-hackername').innerText.trim();
    user_info['Name'] = name;

    const score = entry.querySelector('.span-flex-3 p').innerText.trim();
    user_info['Score'] = score;

    result.push(user_info);
});

const json_result = JSON.stringify(result, null, 2);
console.log(json_result);
