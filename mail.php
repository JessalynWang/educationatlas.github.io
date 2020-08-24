<?php
	if($_POST["submit"]) {
		$recipient = "1234astuanet@gmail.com";
		$subject = "test";
		$content = $_POST["emailinput"];
		$header = "From: $recipient";

		$mailBody = "$content has signed up for the newsletter!";

		if(!mail($recipient, $subject, $mailBody, $header)) {
			echo "<h1>Something went wrong, please go back and try again";
		}
	}
?>
