<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get form data
    $first_name = htmlspecialchars($_POST['first_name']);
    $last_name = htmlspecialchars($_POST['last_name']);
    $first_name = htmlspecialchars($_POST['van_size']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $collection_address_line1 = htmlspecialchars($_POST['collection_address_line1']);
    $collection_address_line2 = htmlspecialchars($_POST['collection_address_line2']);
    $collection_city = htmlspecialchars($_POST['collection_city']);
    $collection_postcode = htmlspecialchars($_POST['collection_postcode']);
    $delivery_address_line1 = htmlspecialchars($_POST['delivery_address_line1']);
    $delivery_address_line2 = htmlspecialchars($_POST['delivery_address_line2']);
    $delivery_city = htmlspecialchars($_POST['delivery_city']);
    $delivery_postcode = htmlspecialchars($_POST['delivery_postcode']);
    $delivery_notes =htmlspecialchars($POST['delivery_notes']);

    // Recipient email
    $to = "william.e.peel@gmail.com";

    // Email subject
    $subject = "New Contact Form Submission";

    // Email body
    $body = "You have received a new message from your website contact form.\n\n";
    $body .= "Name: $first_name $last_name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Collection Address:\n $collection_address_line1\n";
    $body .= "$collection_address_line2\n";
    $body .= "$collection_city\n";
    $body .= "$collection_postcode\n";
    $body .= "Delivery Address:\n$delivery_address_line1\n";
    $body .= "$delivery_address_line2\n";
    $body .= "$delivery_city\n";
    $body .= "$delivery_postcode\n";

    $body .= "Delivery Notes:\n$delivery_notes\n";

    // Email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Oops! Something went wrong. Please try again.";
    }
} else {
    echo "Invalid request.";
}
?>
