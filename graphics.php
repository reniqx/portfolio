<style>
    .folioImg{
        width: 40%;
        padding: 10px;
        padding-bottom: 0px;
    }

::-webkit-scrollbar {
display: none;
}
</style>

<?php
    $dir = "images/Folio";

    $files = scandir($dir, 1);
    array_pop($files);
    array_pop($files);
    $id = 0;
    ?>
<div class="image_wrap" id="image_wrap">
    <?php
    foreach($files as $key){
        if(strcmp($key, ".") != 0 || strcmp($key, "..") != 0){
        echo("<img class='folioImg slideImage'"."id='slideImage". $id ."'" ."src='images/Folio/". $key ."'>");
        $id++;
        }
    }
?>
</div>



