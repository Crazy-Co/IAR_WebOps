<?php
 $msg="Name : $_POST[myName]\nEmail : $_POST[myEmail]\nContact : $_POST[myContact]\nPassword : $_POST[myPass1]\nConfirm Password : $_POST[myPass2]\n";
                                                                                

       mail("khushdevyogi001@gmail.com","Inquiry For IAR-WebOps",$msg);
	   
header('location:IAR_WebOps/index.html');
exit(0);
?>
