function filterMissions(status) {
    const missions = document.querySelectorAll('.mission-card');

    missions.forEach(function(mission) {
        if (status === 'all' || mission.dataset.status === status) {
            mission.style.display = 'block';
        } else {
            mission.style.display = 'none';
        }
    });
}
