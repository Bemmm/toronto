

<?php
//define the receiver of the email

// $name = ($_POST["nme"]);
$email = ($_POST["eml"]);
$file = ($_FILES["file"]);
// $feedback = ($_POST["feedback"]);
// $to = "bembenok@gmail.com";
// $subject = "Yoy have a new Testimonial";
// $body = "".$feedback."";

// $attachment = chunk_split(base64_encode(file_get_contents($_FILES['file']['tmp_name'])));
//     	$filename = $_FILES['file']['name'];

//     	$boundary =md5(date('r', time())); 

//     	$headers = "From: webmaster@example.com\r\nReply-To: webmaster@example.com";
//     	$headers .= "\r\nMIME-Version: 1.0\r\nContent-Type: multipart/mixed; boundary=\"_1_$boundary\"";

//     	$message="This is a multi-part message in MIME format.

// --_1_$boundary
// Content-Type: multipart/alternative; boundary=\"_2_$boundary\"

// --_2_$boundary
// Content-Type: text/plain; charset=\"iso-8859-1\"
// Content-Transfer-Encoding: 7bit

// $message

// --_2_$boundary--
// --_1_$boundary
// Content-Type: application/octet-stream; name=\"$filename\" 
// Content-Transfer-Encoding: base64 
// Content-Disposition: attachment 

// $attachment
// --_1_$boundary--";
//  if (mail($to, $subject, $message, $headers))  echo "<p>Message to ".$to." successfully sent!</p>";
// else 
// {
//         echo "<p>Message  to ".$to." delivery failed...</p>";
// }

$to = ''.$email.'';
//define the subject of the email
$subject = 'Test email with attachment';
//create a boundary string. It must be unique
//so we use the MD5 algorithm to generate a random hash
$random_hash = md5(date('r', time()));
//define the headers we want passed. Note that they are separated with \r\n
$headers = "From: webmaster@example.com\r\nReply-To: webmaster@example.com";
//add boundary string and mime type specification
$headers .= "\r\nContent-Type: multipart/mixed; boundary=\"PHP-mixed-".$random_hash."\"";
//read the atachment file contents into a string,
//encode it with MIME base64,
//and split it into smaller chunks
$attachment = chunk_split(base64_encode(file_get_contents(".'$file'.")));
//define the body of the message.
ob_start(); //Turn on output buffering
?>
--PHP-mixed-<?php echo $random_hash; ?> 
Content-Type: multipart/alternative; boundary="PHP-alt-<?php echo $random_hash; ?>"

--PHP-alt-<?php echo $random_hash; ?> 
Content-Type: text/plain; charset="iso-8859-1"
Content-Transfer-Encoding: 7bit

Hello World!!!
This is simple text email message.

--PHP-alt-<?php echo $random_hash; ?> 
Content-Type: text/html; charset="iso-8859-1"
Content-Transfer-Encoding: 7bit

<h2>Hello World!</h2>
<p>This is something with <b>HTML</b> formatting.</p>

--PHP-alt-<?php echo $random_hash; ?>--

--PHP-mixed-<?php echo $random_hash; ?> 
Content-Type: application/jpg; name="photo.jpg" 
Content-Transfer-Encoding: base64 
Content-Disposition: photo 

<?php echo $attachment; ?>
--PHP-mixed-<?php echo $random_hash; ?>--

<?php
//copy current buffer contents into $message variable and delete current output buffer
$message = ob_get_clean();
//send the email
$mail_sent = @mail( $to, $subject, $message, $headers );
//if the message is sent successfully print "Mail sent". Otherwise print "Mail failed"
echo $mail_sent ? "Mail sent" : "Mail failed";
?>




