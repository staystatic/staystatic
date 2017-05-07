<!DOCTYPE html>
<html>
  <head>
     <meta charset="utf-8">
     <title>{{ $page->title }} | {{ $page->siteTitle }}</title>

     <!-- CSS -->
     <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=PT+Serif:400,400italic,700|PT+Sans:400">
     <link rel="stylesheet" href="{{ $page->baseUrl }}/css/style.css">
  </head>
  <body>
    @include('_includes.github')
    @include('_includes.header')
    <div class="main">
       @yield('body')
    </div>
    @include('_includes.footer')
  </body>
</html>
