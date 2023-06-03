<?php
require_once 'config/connect.php';
$products = mysqli_query($connect, 'SELECT * FROM `products`');
$products=mysqli_fetch_all($products);
echo '<pre>';
print_r($products);
echo '</pre>';


?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Document</title>
</head>
<body>
    <table>
    <tr>
        <th>id</th>
        <th>name</th>
        <th>images</th>
        <th>price</th>
        <th>oldprice</th>
        <th>our-products</th>
        <th>our-collection</th>
        <th>description</th>
    </tr>

    <?php
    foreach ($products as $item){
    ?>
    <tr>
        <td><?=$item[0]?></td>
        <td><?=$item[1]?></td>
        <td><?=$item[2]?></td>
        <td><?=$item[3]?></td>
        <td><?=$item[4]?></td>
        <td><?=$item[5]?></td>
        <td><?=$item[6]?></td>
        <td><?=$item[7]?></td>
    </tr>
    <?php
    }
    ?>
    </table>
    
</body>
</html>