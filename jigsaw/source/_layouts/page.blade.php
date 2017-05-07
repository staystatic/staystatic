@extends('_layouts.master')

@section('body')

<div class="page">

  <h1>{{ $page->title }}</h1>

  @yield('content')
</div>

@endsection
