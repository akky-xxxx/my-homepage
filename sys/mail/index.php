<?php
if($_POST){
	while(list($key,$vals) = each($_POST)){
		${$key} = $vals;
	}
	
	require_once $_SERVER["DOCUMENT_ROOT"] . "/sys/phpmailer/jphpmailer.php";
	mb_language("japanese");
	mb_internal_encoding("UTF-8");
	
	$mail = new JPHPMailer();          //JPHPMailerのインスタンス生成
	
	$to = $form_mail;
	$subject = "お問合せいただきありがとうございます";
	$from = "";
	$fromname = "";
	$body = "お問合せいただきありがとうございます。\nご問合せいただいた内容を確認次第、ご連絡させていただきます。\nどうぞよろしくお願いいたします。\n\n※こちらのメールには直接ご返信できません。";
	
	$to = htmlspecialchars($to, ENT_QUOTES,'UTF-8');
	$fromname = htmlspecialchars($fromname, ENT_QUOTES,'UTF-8');
	$subject = htmlspecialchars($subject, ENT_QUOTES,'UTF-8');
	$body = htmlspecialchars($body, ENT_QUOTES,'UTF-8');
	
	$mail->in_enc = "UTF-8";
	$mail->addTo($to);
	$mail->setFrom($from,$fromname);
	$mail->setSubject($subject);
	$mail->setBody($body);
	
	//メールを送信
	$mail->Send();
	
	$to = "";
	$subject = "【ホームページよりお問合せ】";
	$from = $form_mail;
	$fromname = "wandering style";
	
	$body = "■氏名：" . $form_name . "\n";
	$body .= "■メールアドレス：" . $form_mail . "\n";
	if($form_url) $body .= "ホームページURL：" . $form_url . "\n";
	$body .= "▼本文：" . "\n" . $form_content;
	
	$to = htmlspecialchars($to, ENT_QUOTES,'UTF-8');
	$fromname = htmlspecialchars($fromname, ENT_QUOTES,'UTF-8');
	$subject = htmlspecialchars($subject, ENT_QUOTES,'UTF-8');
	$body = htmlspecialchars($body, ENT_QUOTES,'UTF-8');
	
	$mail->in_enc = "UTF-8";
	$mail->addTo($to);
	$mail->setFrom($from,$fromname);
	$mail->setSubject($subject);
	$mail->setBody($body);
	
	//メールを送信
	$mail->Send();
}