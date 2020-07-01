<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A320 Performance</title>
    <link rel="stylesheet" href="css/flexboxgrid.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <div id="app" class="container efb-base">
        <div class="row center-md">
            <conditions></conditions>
            <rwy-computation></rwy-computation>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vuex@3.5.1/dist/vuex.js"></script>
    <script src="js/components/input-select.js"></script>
    <script src="js/components/input-select-airport.js"></script>
    <script src="js/components/input-select-pretend.js"></script>
    <script src="js/components/condition-field.js"></script>
    <script src="js/components/conditions.js"></script>
    <script src="js/components/results.js"></script>
    <script src="js/components/runway_info.js"></script>
    <script src="js/components/rwy-computation.js"></script>
    <script src="js/store.js"></script>
    <script src="js/app.js"></script>
</body>

</html>