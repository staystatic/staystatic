<?php

return [
    'siteTitle' => 'Jigsaw Stay Static Sample Site',
    'baseUrl'   => '/sites/jigsaw',
    'production' => false,

    /** todo: check if we can use "datafiles" ???
        for now use "inline" links
     */
    'links'  => [
       [ 'title' => "football.db - Open Football Data",
         'url'   => "https://github.com/openfootball",
       ],
       [ 'title' => "beer.db - Open Beer, Brewery 'n' Brewpub Data",
         'url'   => "https://github.com/openbeer",
       ],
       [ 'title' => "world.db - Open World Data",
         'url'   => "https://github.com/openmundi",
       ]
    ],

    'collections' => [
       'posts' => [
            /**
             * Sorting:
             *     - can be a single criterion, or array
             *     - uses '-' for descending; '+' is optional
             *     - array of criteria will do multi-level sort
             */
            'sort' => ['date'],
            'dateFormatted' => function($page) {
              list($year, $month, $day) = parseDate($page['date']);
              return sprintf('%s/%s/%s', $month, $day, $year);
            },

       ],
    ],
    'dump' => function($page) {
      return json_encode($page->toArray(), JSON_PRETTY_PRINT);
    },
];


function parseDate($timestamp) {
    $date = DateTime::createFromFormat('U', $timestamp);

    return [
        $date->format('Y'),
        $date->format('m'),
        $date->format('d'),
    ];
}
