<meta charset="UTF-8">
<?php

if (isset($_POST['Name'])) $Name = $_POST['Name'];

if (isset($_POST['Email'])) $Email = $_POST['Email'];
;
if (isset($_POST['Phone'])) $Phone = $_POST['Phone'];

if (isset($_POST['Message'])) $Message = $_POST['Message'];


$host = '127.0.0.1';
$db   = 'testphp4';
$user = 'root';
$pass = '';
$charset = 'utf8';

    $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
    $opt = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
    ];

$pdo = new PDO($dsn, $user, $pass, $opt);



$sql = "INSERT INTO tabphp4 (Name, Email, Phone, Message) VALUES (:Name, :Email, :Phone, :Message)";
$q = $pdo->prepare($sql);

$pattern_name = "/[a-zA-Zа-яА-Я]/";
$pattern_email = "/[a-zA-Z]/";
$pattern_phone = "/\d[0-9]{10,13}/";
$pattern_message = "/[a-zA-Zа-яА-Я]/";

	if(!preg_match($pattern_name, $Name)){
	     echo "Не работает";
          }
   else{
	   if(!preg_match($pattern_email, $Email)){
	   echo "Не работает";
        }else
        {
	        if(!preg_match($pattern_phone, $Phone)){
	        echo "Не работает";
        }
       else {
	      if(!preg_match($pattern_message, $Message)){
	      echo "Не работает";
           }
            else {
	             $q->execute(array(':Name'=>$Name,
 				  		':Email'=>$Email,
 						 ':Phone'=>$Phone,
 						  ':Message'=>$Message));
}
}
}
}

// $q->execute(array(':Name'=>$Name,
// 				  ':Email'=>$Email,
// 					':Phone'=>$Phone,
// 					':Message'=>$Message));
?>




