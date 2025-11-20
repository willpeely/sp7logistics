<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $van_size = htmlspecialchars($_POST['van_size']);
    $first_name = htmlspecialchars($_POST['first_name']);
    $last_name = htmlspecialchars($_POST['last_name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $delivery_notes = htmlspecialchars($_POST['delivery_notes']);

    $to = "william.e.peel@gmail.com";
    $subject = "New Booking Form Submission";

    // Message
    $message = "
    New booking request:\n
    Van Size: $van_size\n
    Name: $first_name $last_name\n
    Phone: $phone\n
    Email: $email\n
    Delivery Notes: $delivery_notes
    ";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        // Redirect to thank you page
        header("Location: thank_you.html");
        exit;
    } else {
        echo "There was an error sending your message. Please try again.";
    }
} else {
    // If someone opens this page directly
    echo "Invalid request.";
}
?>
