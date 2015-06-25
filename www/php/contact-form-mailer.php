<?php 
  $to = "bembenok@gmail.com";
  $from = $_POST['inputName'];
  $subject = "You have a new Message from TorontoGranite";
  $email = $_POST["inputEmail"];
  $phone = $_POST["inputSubject"];
  $feedback = $_POST["inputMessage"];
  $message = "Name: ".$from."\nEmail: ".$email."\nPhone: ".$phone."\nMessage: ".$feedback;
  $boundary = md5(date('r', time()));
  $filesize = '';
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "From: " . $from . "\r\n";
  $headers .= "Reply-To: " . $from . "\r\n";
  Echo('form2');
    mail($to, $subject, $message, $headers);
    header("Location: /index.html");
die();
 ?>