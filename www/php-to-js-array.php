<?php
    header('Content-Type: text/javascript; charset=UTF-8');
    echo "var images = [];\n";
    $folder = 'images/slabinventory';
    $all_folders = glob($folder . '*', GLOB_ONLYDIR);
    $coun_f = count($all_folders);
   
    for ($i = 0; $i < $coun_f; $i++) {
            $sub_folder [] = $all_folders[$i]."/";
            echo "images[".$i."] = {};\n";
            echo "images[".$i."].thumbnail = '".$coun_f."';\n";
            echo "images[".$i."].name = '".$sub_folder[$i]."';\n";
            $all_images = glob($sub_folder[$i]."{*.jpg, *.JPG, *.JPEG, *.png, *.PNG}", GLOB_BRACE);
            echo "images[".$i."].photos = '".$all_images[$i]."';\n";

            $count = count($all_images);

        echo "images[".$i."].photos = [];\n";
        for ($j = 0; $j < $count; $j++) {
            
            echo "images[".$i."].photos[".$j."] = {};\n";
            echo "images[".$i."].photos[".$j."] = '".$all_images[$j]."';\n";
        }
        
        
    
        
    }

?>
