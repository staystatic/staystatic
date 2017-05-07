@extends('_layouts.master')

@section('body')

<div class="post">

  <header class="post-header">
    <h1 class="post-title">{{ $page->title }}</h1>
    <p class="post-meta">{{ $page->dateFormatted() }}</p>
  </header>

  <article class="post-main">
     @yield('content')
  </article>

</div>

<div>
    <b>More News 'n' Updates</b>
    <ul>
      @foreach($posts as $post)
        <li><a href="{{ $page->baseUrl }}{{ $post->getPath() }}">{{ $post->title }}</a></li>
      @endforeach
    </ul>
</div>

<!-- debug -->
<!--
<div class="debug">
  <p>Dump of <code>$page</code>
      (can also be accessed as singular version of collection name, i.e. <code>$post</code>)</p>
  <pre><code>{{ $page->dump() }}</code></pre>
</div>
-->

@endsection
