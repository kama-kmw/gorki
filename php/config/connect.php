<?php
// $connect = mysqli_connect('localhost', 'root', 'root', 'цуриху');
$connect = mysqli_connect('localhost', 'kamakmwy_sputnik', 'a80818081A', 'kamakmwy_sputnik');

// $connect = mysqli_connect('localhost', 'root', 'root', 'gorki');
if(!$connect) {
  die('ошибка подключения к базе данных');
}

// $connect = mysqli_connect('localhost', 'kamakmw_ogorode', 'a80818081A', 'kamakmw_ogorode');