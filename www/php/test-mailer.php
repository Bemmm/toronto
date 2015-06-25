<?php
if (isset($_POST['nme'])){
  $to = "bembenok@gmail.com"; // поменять на свой адрес
  $from = $_POST['nme'];
  $subject = "You have a new Testimonial";
  $email = $_POST["eml"];
  $feedback = $_POST["feedback"];
  $message = "Name: ".$from."\nEmail: ".$email."\nMessage: ".$feedback;
  $boundary = md5(date('r', time()));
  $filesize = '';
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "From: " . $from . "\r\n";
  $headers .= "Reply-To: " . $from . "\r\n";
  $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
  Echo('Halahlah');
  $message="
Content-Type: multipart/mixed; boundary=\"$boundary\"

--$boundary
Content-Type: text/plain; charset=\"utf-8\"
Content-Transfer-Encoding: 7bit

$message";
      if(is_uploaded_file($_FILES['file']['tmp_name'])) {
         $attachment = chunk_split(base64_encode(file_get_contents($_FILES['file']['tmp_name'])));
         $filename = $_FILES['file']['name'];
         $filetype = $_FILES['file']['type'];
         $filesize += $_FILES['file']['size'];
         $message.="

--$boundary
Content-Type: \"$filetype\"; name=\"$filename\"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=\"$filename\"

$attachment";
     }
   
   $message.="
--$boundary--";

  if ($filesize < 10000000) { // проверка на общий размер всех файлов. Многие почтовые сервисы не принимают вложения больше 10 МБ
    mail($to, $subject, $message, $headers);
    header("Location: /index.html");
    $output = '<script>alert("Ваше сообщение получено, спасибо!");</script>';
  } else {
    $output = '<script>alert("Извините, письмо не отправлено. Размер всех файлов превышает 10 МБ.");</script>';
  }
} 

?>



