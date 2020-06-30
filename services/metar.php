<?php

$metar = false;

if (!isset($_GET['ident'])) {
    return 'error';
} else {
    if (!isset($_GET['source'])) {
        $icao = $_GET['ident'];
        $metar = file_get_contents("http://metar.vatsim.net/metar.php?id=$icao");
    }

    if ($metar) {
        if (isset($_GET['decode'])) {
            $data = [];
            $metarRemarksRmd = explode(' RMK ', $metar)[0];
            $splitMetar = explode(' ', $metarRemarksRmd);

            $winds = $splitMetar[2];
            $data['winds']['dir'] = (int)substr($winds, 0, 3);
            $data['winds']['kt'] = (int)substr(substr($winds, 0, -2), 3);

            $tempos = $splitMetar[count($splitMetar) -2];
            $data['tempos']['oat'] = (int)explode('/', $tempos)[0];
            $data['tempos']['dew'] = (int)explode('/', $tempos)[1];

            $data['qnh'] = (int)substr($splitMetar[count($splitMetar) -1], 1);

            header('Content-Type: application/json');
            echo json_encode($data);
        } else {
            echo $metar;
        }
    }
}
