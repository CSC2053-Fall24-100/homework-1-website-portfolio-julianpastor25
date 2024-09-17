const toggleScheduleButton = document.getElementById('toggle-schedule');
const schedule = document.getElementById('schedule-container');
toggleScheduleButton.addEventListener('click', function() { 
    if(schedule.style.display == 'none'){ //schedule shown
        schedule.style.display = 'block';
        toggleScheduleButton.textContent = 'Hide Schedule';
    }
    else {
        schedule.style.display = 'none';
        toggleScheduleButton.textContent = 'Show Schedule';
    }
})