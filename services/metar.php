<?php

if(!isset($_GET['ident'])) {
    return 'error';
} else {
    if(!isset($_GET['source'])) {
        $icao = $_GET['ident'];
        echo file_get_contents("http://metar.vatsim.net/metar.php?id=$icao");
    }
}