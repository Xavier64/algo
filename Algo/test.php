<?php
function XO($s) {
    $xCount = 0;
    $oCount = 0;
      
      for($i = 0; $i < count($s); $i ++ ){
        $lettre = $s[$i];
        
        if($lettre === 'x' || $lettre === "X"){
          $xCount++;
          } 
        else if ($lettre === 'o' || $lettre === "O") {
          $oCount++;
          }
      }
      return $xCount === $oCount;
      
    }