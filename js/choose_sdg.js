function selectGoal(goal_index) {
    img_id = 'sdg' + goal_index;
    button_id = 'selectButtonG' + goal_index;

    goal = document.getElementById(img_id);
    button = document.getElementById(button_id);
    goal.style.opacity == 0.5? goal.style.opacity = 1.0 : goal.style.opacity = 0.5;
    goal.style.opacity == 1.0? button.innerHTML = 'Selected' : button.innerHTML = 'Select';
    goal.style.opacity == 1.0? button.style.background = 'grey' : button.style.background = 'green';     
}