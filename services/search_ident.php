<?php

// $airports = file_get_contents('airports.dat');

// $lines = explode("\n", $airports);

// $newData = '';
// foreach ($lines as $airport) {
//     $field = explode(',', $airport);
//     $newData .= $field[5] . ' / ' . $field[4] . "\n";
// }

// $file = fopen('airports.txt', 'w');
// fwrite($file, $newData);
// fclose($file);

header('Content-Type: application/json');

$airportsRaw = file_get_contents('../data/airports.txt');
$data = json_decode(file_get_contents('php://input'));

$airports = explode("\n", $airportsRaw);
$airportOnlyICAOs = [];

foreach ($airports as $airport) {
    $exploded = explode('/', $airport);
    // var_dump($exploded[1]);
    // if ($exploded[1] != ' nil') {
        $airportOnlyICAOs[] = $exploded[0];
    // }
}

$searchResult = [];

foreach ($airportOnlyICAOs as $key => $airport) {
    $search = substr($airport, 0, strlen($data->query));
    if ($search === $data->query) $searchResult[] = $airports[$key];
}

echo json_encode($searchResult);
