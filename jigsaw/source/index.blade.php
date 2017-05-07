---
extends: _layouts.master
title:   Welcome
---

@section('body')

<div>
  <b>News 'n' Updates</b>
  <ul class="news">
    @foreach($posts as $post)
        <li><a href="{{ $page->baseUrl }}{{ $post->getPath() }}">{{ $post->title }}</a></li>
    @endforeach
  </ul>
</div>

<div>
  <b>Links 'n' Bookmarks</b>
  <ul class="links">
    @foreach($page->links as $link)
      <li><a href="{{ $link->url }}">{{ $link->title }}</a></li>
    @endforeach
  </ul>
</div>

@endsection
