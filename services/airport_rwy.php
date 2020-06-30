<?php

$runwaysRaw = file_get_contents('../data/ARPT_RWY.dat');
$runways = explode("\n", $runwaysRaw);

$results = [];

foreach ($runways as $key => $singleAirport) {
    $airportLine = explode(';', $singleAirport);

    if ($airportLine[0] == 'AP' && $airportLine[1] === $_GET['ident']) {
        $runwaysFiltered = array_slice($runways, $key + 1);
        foreach ($runwaysFiltered as $key => $line) {

            $rwy = explode(';', $line);
            $data = [];

            if (isset($_GET['metric'])) {
                $data[$rwy[1]] = [
                    'tora' => (int)$rwy[5] / 3.281,
                    'toda' => (int)$rwy[8] / 3.281,
                    'elev' => (int)$rwy[4]
                ];
            } else {
                $data[$rwy[1]] = [
                    'tora' => (int)$rwy[5],
                    'toda' => (int)$rwy[8],
                    'elev' => (int)$rwy[4]
                ];
            }

            $results[] = $data;
            if ((explode(';', $runwaysFiltered[$key + 1])[0] === 'AP')) break;
        }
    }
}

header('Content-Type: application/json');
echo json_encode($results);
