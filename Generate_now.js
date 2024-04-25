// Function to generate a personalized workout plan
function generateWorkoutPlan() {
    // Get user input
    var fitnessLevel = document.getElementById("fitness-level").value;
    var goal = document.getElementById("goal").value;
    var duration = parseInt(document.getElementById("duration").value);
    var daysPerWeek = parseInt(document.getElementById("days-per-week").value);

    // Define workout plan variables
    var workoutPlan = [];

    // Logic to generate workout plan based on user input
    // Example conditions, you can adjust these based on your specific requirements
    for (var i = 0; i < daysPerWeek; i++) {
        var workoutDay = "Day " + (i + 1) + ": ";
        var exercises = [];

        // Determine exercises based on fitness level and goal
        if (fitnessLevel === "beginner") {
            exercises.push("Stretching");
            exercises.push("Walking");
            // Add more beginner exercises as needed
        } else if (fitnessLevel === "intermediate") {
            exercises.push("Jogging");
            exercises.push("Bodyweight Squats");
            // Add more intermediate exercises as needed
        } else if (fitnessLevel === "advanced") {
            exercises.push("Running");
            exercises.push("Weightlifting");
            // Add more advanced exercises as needed
        }

        // Modify exercises based on goal
        if (goal === "weight-loss") {
            // Include more cardio-focused exercises
            exercises.push("Jumping Jacks");
        } else if (goal === "muscle-gain") {
            // Include more strength training exercises
            exercises.push("Push-ups");
            exercises.push("Pull-ups");
        }

        // Add exercises to the workout plan
        workoutPlan.push(workoutDay + exercises.join(", "));
    }

    // Display generated workout plan
    displayWorkoutPlan(workoutPlan);
}

// Function to display the generated workout plan
function displayWorkoutPlan(workoutPlan) {
    var workoutPlanDisplay = document.getElementById("workout-plan");
    workoutPlanDisplay.innerHTML = "";
    workoutPlan.forEach(function (workoutDay) {
        var workoutDayElement = document.createElement("p");
        workoutDayElement.textContent = workoutDay;
        workoutPlanDisplay.appendChild(workoutDayElement);
    });
}

// Event listener for form submission
document.getElementById("workout-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    generateWorkoutPlan(); // Generate workout plan
});
