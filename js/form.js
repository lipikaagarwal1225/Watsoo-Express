$(document).ready(function() {
    // Show the waitlist modal when the "openWaitlistModal" button is clicked
    $(".openWaitlistModal").click(function() {
        $("#joinWaitlistModal").css("display", "flex");
    });

    // Hide the waitlist modal when the "close" button is clicked
    $(".close").click(function() {
        $("#joinWaitlistModal").hide();
    });

    // Handle the form submission inside the modal
    $("#submit-button").submit(function(e) {
        e.preventDefault(); // Prevent default form submission
        var email = $("#useremail").val(); // Get the email value from the form
        $("#joinWaitlistModal").css("display", "flex"); // Show the modal
        $("#email").val(email); // Set the email in the modal
        return false; // Prevent form submission from refreshing the page
    });

    // Handle another form submission for explore form
    $("#explore-form").submit(function(e) {
        e.preventDefault(); // Prevent default form submission
        var email = $("#explore-email").val(); // Get the email value
        $("#joinWaitlistModal").css("display", "flex"); // Show the modal
        $("#email").val(email); // Set the email in the modal
        return false; // Prevent form submission from refreshing the page
    });
});
