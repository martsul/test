<?php
$layout = trim($_POST['layout']);
$style = trim($_POST['style']);
$material = trim($_POST['material']);
$square = trim($_POST['square']);
$connection = trim($_POST['connection']);
$phone = trim($_POST['phone']);

define("CONTACT_FORM", 'spt-tm@yandex.ru');

$recepient = "spt-tm@yandex.ru";

$siteName = "valodinmebel";

$subject = 'Заявка онлайн';

$message = '
        <html>
                <head>
                    <title>Заявка с сайта</title>
                    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
                </head>
                <body>
                    <p>Планировка: ' . $layout . '</p>
                    <p>Стиль: ' . $style . '</p>
                    <p>Материал: ' . $material . '</p>
                    <p>Площадь: ' . $square . '</p>
                    <p>Связь: ' . $connection . '</p>
                    <p>Телефон: ' . $phone . '</p>
                </body>
        </html>';


$mail = mail(CONTACT_FORM, $subject, $message,
  "MIME-Version: 1.0\r\n"
  . "From: " . $siteName . " <" . CONTACT_FORM . ">\r\n"
  . "Reply-To: " . $recepient . "\r\n"
  . "Content-type: text/html; charset=UTF-8\r\n");
