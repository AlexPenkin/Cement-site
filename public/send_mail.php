<?php

<<<<<<< HEAD
//phpinfo();

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

$mail->setFrom('site@cem-rus.ru', 'Mailer');
//$mail->addAddress('joe@example.net', 'Joe User');     // Add a recipient
$mail->addAddress('grungestranger@yandex.ru');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Here is the subject';
$mail->Body    = 'This is the HTML message body <b>in bold!</b>';
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);
if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
=======
$actions = [
	'message' => '���������',
	'order' => '�����'
];

if (!isset($_POST['action']) || !isset($actions[$_POST['action']])) {
	exit;
}

$action = $actions[$_POST['action']];

$error = [];

if (!isset($_POST['name']) || trim($_POST['name']) == "") {
	$error[] = "������� ���.";
}
if (!isset($_POST['email']) || trim($_POST['email']) == "") {
	$error[] = "������� email.";
}
if (!isset($_POST['text']) || trim($_POST['text']) == "") {
	$error[] = "������� ����� ���������.";
}

if ($_POST['action'] == 'order') {
	if (!isset($_POST['theme']) || trim($_POST['theme']) == "") {
		$error[] = "������� ����.";
	}
}

if (!$error) {
	
	$subject = $actions . ' c ����� cem-rus.ru';
	
	$data = [];
	foreach ($_POST as $key => $val) {
		$data[$key] = htmlspecialchars($item);
	}
	
	$body = '<div><b>���:<b> ' . $data['name'] . '</div>';
	$body .= '<div><b>Email:<b> ' . $data['email'] . '</div>';
	if ($_POST['action'] == 'order') {
		$body .= '<div><b>����:<b> ' . $data['theme'] . '</div>';
	}
	$body .= '<div><b>���������:<b> ' . $data['text'] . '</div>';
	
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

	$mail->setFrom('site@cem-rus.ru', 'Mailer');
	//$mail->addAddress('joe@example.net', 'Joe User');     // Add a recipient
	$mail->addAddress('grungestranger@yandex.ru');               // Name is optional
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

	$mail->Subject = $subject;
	$mail->Body    = $body;
	//$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

	if(!$mail->send()) {
		//echo 'Message could not be sent.';
		//echo 'Mailer Error: ' . $mail->ErrorInfo;
		$error[] = "��� �������� ��������� ��������� ������. ����������, ���������� ��������� ���� ��������� �������.";
	}
}

if (!$error) {
	$result = [
		'succes' => TRUE,
		'message' => '���� ��������� ������� ����������.'
	];
} else {
	$result = [
		'succes' => FALSE,
		'errors' => $error
	];
}

header('Content-Type: application/json; charset=utf-8');
echo json_encode($result);
exit;
>>>>>>> b595117f02f9c1501c13ac28ebcb84941f49b173
