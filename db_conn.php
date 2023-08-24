
<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$database = "subform_db";

$con = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $con->connect_error);
}
?>




<?php if (isset($_GET['error'])): ?>
		        <p><?php echo $_GET['error']; ?></p>
	          <?php endif ?>