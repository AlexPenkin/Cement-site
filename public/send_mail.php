<?php

$actions = [
	'message' => 'Сообщение',
	'order' => 'Заказ'
];

if (!isset($_POST['action']) || !isset($actions[$_POST['action']])) {
	exit;
}

$action = $actions[$_POST['action']];

$error = [];

if (!isset($_POST['name']) || trim($_POST['name']) == "") {
	$error[] = "Введите имя.";
}
if (!isset($_POST['email']) || trim($_POST['email']) == "") {
	$error[] = "Введите email.";
}
if (!isset($_POST['text']) || trim($_POST['text']) == "") {
	$error[] = "Введите текст сообщения.";
}

if ($_POST['action'] == 'order') {
	if (!isset($_POST['theme']) || trim($_POST['theme']) == "") {
		$error[] = "Введите тему.";
	}
}

// Каптча
if (!$error) {
	if (!isset($_POST['gRecaptchaResponse'])) {
		$error[] = "Пройдите спам-контроль.";
	} else {
		require_once "../php/recaptchalib.php";
		$reCaptcha = new ReCaptcha("6LdjwSITAAAAAG0_vSr_bC_1trXsoRuvq_fkRwjJ");
		$resp = $reCaptcha->verifyResponse(
			$_SERVER["REMOTE_ADDR"],
			$_POST["gRecaptchaResponse"]
		);
		if (!$resp->success) {
			$error[] = "Вы не прошли спам-контроль.";
		}
	}
}

if (!$error) {
	
	$subject = $action . ' c сайта cem-rus.ru';
	
	$data = [];
	foreach ($_POST as $key => $val) {
		$data[$key] = htmlspecialchars($val);
	}
	
	$body = '<div><b>Имя:</b> ' . $data['name'] . '</div>';
	$body .= '<div><b>Email:</b> ' . $data['email'] . '</div>';
	if ($_POST['action'] == 'order') {
		$body .= '<div><b>Тема:</b> ' . $data['theme'] . '</div>';
	}
	$body .= '<div><b>Сообщение:</b> ' . $data['text'] . '</div>';
	
	require '../php/PHPMailer/PHPMailerAutoload.php';

	$mail = new PHPMailer;

	//$mail->SMTPDebug = 3;                               // Enable verbose debug output

	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->Host = 'smtp.yandex.ru';						  // Specify main and backup SMTP servers
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'site@cem-rus.ru';                 // SMTP username
	$mail->Password = 'rgL35VdsNmt';                           // SMTP password
	$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
	$mail->Port = 465;                                    // TCP port to connect to

	$mail->setFrom('site@cem-rus.ru', 'cem-rus.ru');
	//$mail->addAddress('joe@example.net', 'Joe User');     // Add a recipient
	$mail->addAddress('a.penkin@smartcodes.ru');               // Name is optional
	//$mail->addReplyTo('info@example.com', 'Information');
	//$mail->addCC('cc@example.com');
	//$mail->addBCC('bcc@example.com');

	//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
	//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
	$mail->isHTML(true);                                  // Set email format to HTML

	/*$mail->SMTPOptions = array(
		'ssl' => array(
			'verify_peer' => false,
			'verify_peer_name' => false,
			'allow_self_signed' => true
		)
	);*/
	$mail->CharSet = "utf-8";
	
	$mail->Subject = $subject;
	$mail->Body    = $body;
	//$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

	if(!$mail->send()) {
		//echo 'Message could not be sent.';
		//echo 'Mailer Error: ' . $mail->ErrorInfo;
		$error[] = "При отправке сообщения произошла ошибка. Пожалуйста, попробуйте отправить Ваше сообщение позднее.";
	}
}

if (!$error) {
	$result = [
		'success' => TRUE,
		'message' => 'Ваше сообщение успешно отправлено.'
	];
} else {
	$result = [
		'success' => FALSE,
		'errors' => $error
	];
}

header('Content-Type: application/json; charset=utf-8');
echo json_encode($result);
exit;
