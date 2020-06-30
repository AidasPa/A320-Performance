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
    $airportOnlyICAOs[] = explode('/', $airport)[0];
}

// $input = preg_quote($data->query, '~');
// $result = preg_filter('~' . $input . '~', null, $airportOnlyICAOs);

// $searchResult = [];
// foreach ($result as $key => $value) {
//     $searchResult[] = $airports[$key];
// }

// echo json_encode($searchResult);

$searchResult = [];

foreach ($airportOnlyICAOs as $key => $airport) {
    if (strlen($data->query) === 2) {
        $firstTwo = substr($airport, 0, 2);
        if($firstTwo === $data->query) $searchResult[] = $airports[$key];
    } else if (strlen($data->query) === 3) {
        $firstThree = substr($data->query, 0, 3);
        if($firstThree === $data->query) $searchResult[] = $airports[$key];
    } else if (strlen($data->query) === 4) {
        if($airport === $data->query) $searchResult[] = $airports[$key];
    }
}

echo json_encode($searchResult);