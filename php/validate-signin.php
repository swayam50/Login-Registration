<?php
    echo var_dump($_GET);
    $email = $_GET['email'];
    if(strlen($email) <= 4) {
        exit("Invalid Email");
    } else if( substr($email,-4) <> ".com") {
        exit("Invalid Email, doesn't contain domain name");
    } else if( !strpos($email, "@") || strrpos($email, "@") <> stripos($email, "@")) {
        exit("Invalid @position");
    } else {
        exit("Valid Email");
    }
    
    $password = $_GET['password'];
    $confPassword = $_GET['confPassword'];
?>