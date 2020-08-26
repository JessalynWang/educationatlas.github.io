<?php 
if(isset($_POST['submit'])){
    $to = "1234astuanet@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $subject = "Mailing list sign up!";
    $message = $from . "signed up for our mailing list!";

    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you, we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>