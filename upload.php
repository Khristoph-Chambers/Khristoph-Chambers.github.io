<?php

if (isset($_POST['submit']) && isset($_FILES['my_image'])) {
    include "db_conn.php";

    echo "<pre>";
    print_r($_FILES['my_image']);
    echo "</pre>";

    $img_name = $_FILES['my_image']['name'];
    $img_size = $_FILES['my_image']['size'];
    $tmp_name = $_FILES['my_image']['tmp_name'];
    $error = $_FILES['my_image']['error'];

    if ($error === 0) {
        if ($img_size > 12500000) {
            $em = "Sorry, your file is too large.";
            header("Location: index.php?error=$em");
        } else {
            $img_ex = pathinfo($img_name, PATHINFO_EXTENSION);
            $img_ex_lc = strtolower($img_ex);

            $allowed_exs = array("pdf", "doc", "docx");

            if (in_array($img_ex_lc, $allowed_exs)) {
                $unique_id = uniqid();
                $new_img_name = $img_name . '_' . $unique_id . '.' . $img_ex;

                $img_upload_path = 'uploads/' . $new_img_name;
                move_uploaded_file($tmp_name, $img_upload_path);

                // Insert into Database using prepared statement
                $sql = "INSERT INTO forms(file_name) VALUES(?)";
                $stmt = mysqli_prepare($con, $sql);
                mysqli_stmt_bind_param($stmt, "s", $new_img_name);
                mysqli_stmt_execute($stmt);
                mysqli_stmt_close($stmt);

                header("Location: submit.html");
            } else {
                $em = "You can't upload files of this type";
                $_SESSION['error'] = $em;
                header("Location: fileerror.html");


            }
        }
    } else {
        $em = "Unknown error occurred!";
        $_SESSION['error'] = $em;
        header("Location: index.html$em");
    }
} else {
    header("Location: index.html");
}
?>
