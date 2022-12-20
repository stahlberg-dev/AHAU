<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
//use PHPMailer\PHPMailer\SMTP;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
//require 'phpmailer/src/SMTP.php';

$model = $_POST['model'] ?? "";
$name = $_POST['name'] ?? "";
$phone = $_POST['phone'] ?? "";
$email = $_POST['email'] ?? "";
$subject = $_POST['subject'] ?? "";
$message = $_POST['message'] ?? "";

$title = "";
if ($model !== "") {
    $title = "Order";
} else {
    if ($subject !== "") {
        $title = $subject;
    } else {
        $title = "Message";
    }
}

$body = "<body>";
if (trim(!empty($model))) {
    $body .= "<p><b>Model: </b>$model</p>";
}
if (trim(!empty($name))) {
    $body .= "<p><b>Name: </b>$name</p>";
}
if (trim(!empty($phone))) {
    $body .= "<p><b>Phone number: </b>$phone</p>";
}
if (trim(!empty($email))) {
    $body .= "<p><b>E-mail: </b>$email</p>";
}
if (trim(!empty($message))) {
    $body .= "<p><b>Message: </b>$message</p>";
}
$body .= "</body>";

$report = "The e-mail has been sent.";

$mail = new PHPMailer(true);


try {
    //$mail->SMTPDebug = 3;
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('en', 'phpmailer/language');
    //$mail->isSMTP();                         
    //$mail->Host = 'smtp.mail.ru';
    //$mail->SMTPAuth = true; 
    //$mail->Username = 'r44ds@mail.ru';
    //$mail->Password = 'itpZ2zfpbDrkxQApxGmd'; 
    //$mail->SMTPSecure = 'ssl';
    //$mail->Port = 465;   

    $mail->setFrom('info@ahaumarine.com', 'AHAU');
    $mail->addAddress('info@ahaumarine.com');
    //$mail->addAddress('samsonov.d@ahaumarine.com');
    
    $mail->IsHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;


    if($mail->send()) {    
        $status = 'Success';
    } else {
        $status = 'Error';
    }

} catch (Exception $e) {
    $status = 'Error';
    $report = "The e-mail has not been sent. Reason for the error: {$mail->ErrorInfo}";
}

header('Content-type: application/json');
echo json_encode(['status' => $status, 'report' => $report]);