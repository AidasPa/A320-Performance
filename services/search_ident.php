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
$airportOnlyIATAs = [];

foreach ($airports as $airport) {
    $airportOnlyIATAs[] = explode('/', $airport)[0];
}

$input = preg_quote($data->query, '~');
$result = preg_filter('~' . $input . '~', null, $airportOnlyIATAs);

$searchResult = [];
foreach ($result as $key => $value) {
    $searchResult[] = $airports[$key];
}

echo json_encode($searchResult);

