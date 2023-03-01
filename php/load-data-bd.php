<?php
require_once 'config/connect.php';

$sql = mysqli_query($connect, "SELECT * FROM `Эльбрус` ");
$result = mysqli_fetch_all($sql, MYSQLI_ASSOC);

// $del_id = $_POST['id_word'];
// if($connection) mysqli_query($connection, "DELETE FROM translate WHERE id = '$del_id'");
// mysqli_close($connection);
// echo '<script>location.replace("/admin/");</script>';
exit(json_encode($result));


$res = $_POST['id'];

?>