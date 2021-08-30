<?php header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods:POST,GET,PUT,DELETE');
header('Access-Control-Allow-Headers: content-type or other');
header('Content-Type: application/json');


$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "users";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if(isset($_POST['myEmail']))
{
    $sql = "INSERT INTO users (email, username)
        VALUES ('".$_POST['myEmail']."', '".$_POST['myUsername']."')";
    if (mysqli_query($conn,$sql)) {
        $data = array("data" => "You added Data successfully");
        echo json_encode($data);
    } else {
        $data = array("data" => "Error: " . $sql . "<br>" . $conn->error);
        echo json_encode($data);

    }
}

//remove
else if(isset($_GET['deleteId'])) //
{
    $sql = "DELETE FROM users WHERE id='".$_GET['deleteId']."'";
    if (mysqli_query($conn,$sql)) {
        $data = array("data" => "You removed Data successfully");
        echo json_encode($data);
    } else {
        $data = array("data" => "Error: " . $sql . "<br>" . $conn->error);
        echo json_encode($data);
    }
}

//modify user
else if(isset($_GET['modifyId'])) //
{
    $sql = "UPDATE users SET (email, username) WHERE id='".$_GET['modifyId']."'";
    if (mysqli_query($conn,$sql)) {
        $data = array("data" => "You updated Data successfully");
        echo json_encode($data);
    } else {
        $data = array("data" => "Error: " . $sql . "<br>" . $conn->error);
        echo json_encode($data);
    }
}


else
{
    //get all users details
    $trp = mysqli_query($conn, "SELECT * from users ORDER BY id DESC");
    $rows = array();
    while($r = mysqli_fetch_assoc($trp)) {
        $rows[] = $r;
    }
    print json_encode($rows);
}
die();
