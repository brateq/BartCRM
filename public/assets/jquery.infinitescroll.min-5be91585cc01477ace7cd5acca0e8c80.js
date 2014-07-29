




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>infinite-scroll/jquery.infinitescroll.min.js at master · paulirish/infinite-scroll</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="paulirish/infinite-scroll" name="twitter:title" /><meta content="infinite-scroll - jQuery and Wordpress plugins for infinite scroll" name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/39191?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/39191?s=400" property="og:image" /><meta content="paulirish/infinite-scroll" property="og:title" /><meta content="https://github.com/paulirish/infinite-scroll" property="og:url" /><meta content="infinite-scroll - jQuery and Wordpress plugins for infinite scroll" property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="D995F997:4564:127C3E0:53CCFE37" name="octolytics-dimension-request_id" /><meta content="5649199" name="octolytics-actor-id" /><meta content="brateq" name="octolytics-actor-login" /><meta content="33a279dd6313d016def9feb393b3b1ebdeef1ec37661299ceb1c351851896d93" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico" />


    <meta content="authenticity_token" name="csrf-param" />
<meta content="4woOJzJBp/8hI9JLF2j334xJqtphUNJo+nH69/HSKB1nBwNODmHvxSHp/RBOe9zwtW7gJDH2QnOv1GSkAFcsKg==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-08cc4d21dbfdd953c85afbf75762f5b6e145620d.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-7fa45bc1a10ba6acbc768b848364578bfb855eac.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="db52f4e25078b55191f8b1f2d9a3a573">

      
  <meta name="description" content="infinite-scroll - jQuery and Wordpress plugins for infinite scroll" />


  <meta content="39191" name="octolytics-dimension-user_id" /><meta content="paulirish" name="octolytics-dimension-user_login" /><meta content="646976" name="octolytics-dimension-repository_id" /><meta content="paulirish/infinite-scroll" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="646976" name="octolytics-dimension-repository_network_root_id" /><meta content="paulirish/infinite-scroll" name="octolytics-dimension-repository_network_root_nwo" />

  <link href="https://github.com/paulirish/infinite-scroll/commits/master.atom" rel="alternate" title="Recent Commits to infinite-scroll:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


    
    <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s" data-hotkey="g n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="brateq"
    data-repo="paulirish/infinite-scroll"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="paulirish/infinite-scroll" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    

<ul id="user-links">
  <li>
    <a href="/brateq" class="name">
      <img alt="brateq" class=" js-avatar" data-user="5649199" height="20" src="https://avatars2.githubusercontent.com/u/5649199?s=140" width="20" /> brateq
    </a>
  </li>

  <li class="new-menu dropdown-toggle js-menu-container">
    <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-arrow"></span>
    </a>

    <div class="new-menu-content js-menu-content">
    </div>
  </li>

  <li>
    <a href="/settings/profile" id="account_settings"
      class="tooltipped tooltipped-s"
      aria-label="Account settings ">
      <span class="octicon octicon-tools"></span>
    </a>
  </li>
  <li>
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="uH+uOL/N8/3r47NqADhAjP9ym2W3/xay+ot/UVksfIdZCaJ+Lpv3xr1Lvu3XdPlspdimfIzYzlJsgldXtKTIiw==" /></div>
      <button class="sign-out-button tooltipped tooltipped-s" aria-label="Sign out">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="paulirish/infinite-scroll">This repository</span>
    </li>
      <li>
        <a href="/paulirish/infinite-scroll/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="Hn2w2ATvo9QldyJoMpS2nrzilT+AwxIVDoEkoHOLn9NsUqzqODoCRd+sR7p7+xnOaPGQpwcyovZ+YQnuIy+v2A==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="646976" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/paulirish/infinite-scroll/watchers">
        192
      </a>
      <a href="/paulirish/infinite-scroll/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    

  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/paulirish/infinite-scroll/unstar" class="js-toggler-form starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="9hMi/hIyof3bL2QjMw+xJbbseLAOuRzK2mLd1kv15Vy+MtjNiNQ6xj8ITal9a+Vjf76jXcTpIPEujy09xio1Rw==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar paulirish/infinite-scroll">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/paulirish/infinite-scroll/stargazers">
          3,104
        </a>
</form>
    <form accept-charset="UTF-8" action="/paulirish/infinite-scroll/star" class="js-toggler-form unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="tQWTmgAvNuhX0uIBxDDe3iBWiKTSmIr5fkbtqDRENNsd4SqlB/sZpoU564pMHQD6+44p7+DNRnY2ZeITw5EIfA==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star paulirish/infinite-scroll">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/paulirish/infinite-scroll/stargazers">
          3,104
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/paulirish/infinite-scroll/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of paulirish/infinite-scroll to your account" aria-label="Fork your own copy of paulirish/infinite-scroll to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/paulirish/infinite-scroll/network" class="social-count">1,174</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/paulirish" class="url fn" itemprop="url" rel="author"><span itemprop="title">paulirish</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/paulirish/infinite-scroll" class="js-current-repository js-repo-home-link">infinite-scroll</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/paulirish/infinite-scroll" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /paulirish/infinite-scroll">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/paulirish/infinite-scroll/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /paulirish/infinite-scroll/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>88</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/paulirish/infinite-scroll/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /paulirish/infinite-scroll/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>24</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/paulirish/infinite-scroll/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /paulirish/infinite-scroll/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/paulirish/infinite-scroll/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /paulirish/infinite-scroll/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/paulirish/infinite-scroll/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /paulirish/infinite-scroll/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/paulirish/infinite-scroll/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /paulirish/infinite-scroll/network">
          <span class="octicon octicon-repo-forked"></span> <span class="full-word">Network</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/paulirish/infinite-scroll.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/paulirish/infinite-scroll.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:paulirish/infinite-scroll.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:paulirish/infinite-scroll.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/paulirish/infinite-scroll" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/paulirish/infinite-scroll" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button" title="Save paulirish/infinite-scroll to your computer and use it in GitHub Desktop." aria-label="Save paulirish/infinite-scroll to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/paulirish/infinite-scroll/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download paulirish/infinite-scroll as a zip file"
                   title="Download paulirish/infinite-scroll as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/paulirish/infinite-scroll/blob/7e181cdd8df325b835957416384c2bac694e6521/jquery.infinitescroll.min.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:e4307d31913ad32f2f737db2d3997665 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paulirish/infinite-scroll/blob/2.1/jquery.infinitescroll.min.js"
                 data-name="2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1">2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paulirish/infinite-scroll/blob/3.0/jquery.infinitescroll.min.js"
                 data-name="3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.0">3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paulirish/infinite-scroll/blob/WPTest/jquery.infinitescroll.min.js"
                 data-name="WPTest"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="WPTest">WPTest</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paulirish/infinite-scroll/blob/gh-pages/jquery.infinitescroll.min.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paulirish/infinite-scroll/blob/infinite-scroll-3/jquery.infinitescroll.min.js"
                 data-name="infinite-scroll-3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="infinite-scroll-3">infinite-scroll-3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paulirish/infinite-scroll/blob/master/jquery.infinitescroll.min.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paulirish/infinite-scroll/tree/2.0b2.120520/jquery.infinitescroll.min.js"
                 data-name="2.0b2.120520"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0b2.120520">2.0b2.120520</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paulirish/infinite-scroll/tree/2.0.2/jquery.infinitescroll.min.js"
                 data-name="2.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.2">2.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paulirish/infinite-scroll/tree/2.0.1/jquery.infinitescroll.min.js"
                 data-name="2.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.1">2.0.1</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/paulirish/infinite-scroll/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="jquery.infinitescroll.min.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/paulirish/infinite-scroll" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">infinite-scroll</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.infinitescroll.min.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
      <img alt="" class="main-avatar" height="24" src="https://0.gravatar.com/avatar/ba83bb8518a61922e310c508f2da248e?d=https%3A%2F%2Fassets-cdn.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=x&amp;s=140" width="24" />
      <span class="author"><span>Jack Tarantino</span></span>
      <time datetime="2014-05-28T13:14:12-04:00" is="relative-time">May 28, 2014</time>
      <div class="commit-title">
          <a href="/paulirish/infinite-scroll/commit/dd7e34869dd7b94757472ed34a1dbc5f7ae5c743" class="message" data-pjax="true" title="Bumped version number, updated Readme.">Bumped version number, updated Readme.</a>
      </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>7</strong>  contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="67726e" href="/paulirish/infinite-scroll/commits/master/jquery.infinitescroll.min.js?author=67726e"><img alt="Glenn Nelson" class=" js-avatar" data-user="543788" height="20" src="https://avatars0.githubusercontent.com/u/543788?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="paulirish" href="/paulirish/infinite-scroll/commits/master/jquery.infinitescroll.min.js?author=paulirish"><img alt="Paul Irish" class=" js-avatar" data-user="39191" height="20" src="https://avatars2.githubusercontent.com/u/39191?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="samcleaver" href="/paulirish/infinite-scroll/commits/master/jquery.infinitescroll.min.js?author=samcleaver"><img alt="Sam Cleaver" class=" js-avatar" data-user="284957" height="20" src="https://avatars3.githubusercontent.com/u/284957?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="lukeshumard" href="/paulirish/infinite-scroll/commits/master/jquery.infinitescroll.min.js?author=lukeshumard"><img alt="Luke Shumard" class=" js-avatar" data-user="472555" height="20" src="https://avatars3.githubusercontent.com/u/472555?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="jvanasco" href="/paulirish/infinite-scroll/commits/master/jquery.infinitescroll.min.js?author=jvanasco"><img alt="jvanasco" class=" js-avatar" data-user="204779" height="20" src="https://avatars0.githubusercontent.com/u/204779?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="iantearle" href="/paulirish/infinite-scroll/commits/master/jquery.infinitescroll.min.js?author=iantearle"><img alt="Ian Tearle" class=" js-avatar" data-user="201174" height="20" src="https://avatars2.githubusercontent.com/u/201174?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="defeated" href="/paulirish/infinite-scroll/commits/master/jquery.infinitescroll.min.js?author=defeated"><img alt="eddie cianci" class=" js-avatar" data-user="1920" height="20" src="https://avatars1.githubusercontent.com/u/1920?s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Glenn Nelson" class=" js-avatar" data-user="543788" height="24" src="https://avatars0.githubusercontent.com/u/543788?s=140" width="24" />
            <a href="/67726e">67726e</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Paul Irish" class=" js-avatar" data-user="39191" height="24" src="https://avatars2.githubusercontent.com/u/39191?s=140" width="24" />
            <a href="/paulirish">paulirish</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Sam Cleaver" class=" js-avatar" data-user="284957" height="24" src="https://avatars3.githubusercontent.com/u/284957?s=140" width="24" />
            <a href="/samcleaver">samcleaver</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Luke Shumard" class=" js-avatar" data-user="472555" height="24" src="https://avatars3.githubusercontent.com/u/472555?s=140" width="24" />
            <a href="/lukeshumard">lukeshumard</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="jvanasco" class=" js-avatar" data-user="204779" height="24" src="https://avatars0.githubusercontent.com/u/204779?s=140" width="24" />
            <a href="/jvanasco">jvanasco</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Ian Tearle" class=" js-avatar" data-user="201174" height="24" src="https://avatars2.githubusercontent.com/u/201174?s=140" width="24" />
            <a href="/iantearle">iantearle</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="eddie cianci" class=" js-avatar" data-user="1920" height="24" src="https://avatars1.githubusercontent.com/u/1920?s=140" width="24" />
            <a href="/defeated">defeated</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>12 lines (11 sloc)</span>
          <span class="meta-divider"></span>
        <span>21.555 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w"
               href="http://windows.github.com" aria-label="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/paulirish/infinite-scroll/edit/master/jquery.infinitescroll.min.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/paulirish/infinite-scroll/raw/master/jquery.infinitescroll.min.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/paulirish/infinite-scroll/blame/master/jquery.infinitescroll.min.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/paulirish/infinite-scroll/commits/master/jquery.infinitescroll.min.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

            <a class="minibutton danger empty-icon tooltipped tooltipped-s"
               href="/paulirish/infinite-scroll/delete/master/jquery.infinitescroll.min.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">

          Delete
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript js-blob-data">
       <table class="file-code file-diff tab-size-8">
         <tr class="file-code-line">
           <td class="blob-line-nums">
             <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>

           </td>
           <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/*!</span></div><div class='line' id='LC2'><span class="cm">   --------------------------------</span></div><div class='line' id='LC3'><span class="cm">   Infinite Scroll</span></div><div class='line' id='LC4'><span class="cm">   --------------------------------</span></div><div class='line' id='LC5'><span class="cm">   + https://github.com/paulirish/infinite-scroll</span></div><div class='line' id='LC6'><span class="cm">   + version 2.0.2</span></div><div class='line' id='LC7'><span class="cm">   + Copyright 2011/12 Paul Irish &amp; Luke Shumard</span></div><div class='line' id='LC8'><span class="cm">   + Licensed under the MIT license</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'><span class="cm">   + Documentation: http://infinite-scroll.com/</span></div><div class='line' id='LC11'><span class="cm">*/</span></div><div class='line' id='LC12'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">t</span><span class="p">,</span><span class="nx">n</span><span class="p">){</span><span class="s2">&quot;use strict&quot;</span><span class="p">;</span><span class="nx">t</span><span class="p">.</span><span class="nx">infinitescroll</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">n</span><span class="p">,</span><span class="nx">r</span><span class="p">,</span><span class="nx">i</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="o">=</span><span class="nx">t</span><span class="p">(</span><span class="nx">i</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">_create</span><span class="p">(</span><span class="nx">n</span><span class="p">,</span><span class="nx">r</span><span class="p">)){</span><span class="k">this</span><span class="p">.</span><span class="nx">failed</span><span class="o">=</span><span class="kc">true</span><span class="p">}};</span><span class="nx">t</span><span class="p">.</span><span class="nx">infinitescroll</span><span class="p">.</span><span class="nx">defaults</span><span class="o">=</span><span class="p">{</span><span class="nx">loading</span><span class="o">:</span><span class="p">{</span><span class="nx">finished</span><span class="o">:</span><span class="nx">n</span><span class="p">,</span><span class="nx">finishedMsg</span><span class="o">:</span><span class="s2">&quot;&lt;em&gt;Congratulations, you&#39;ve reached the end of the internet.&lt;/em&gt;&quot;</span><span class="p">,</span><span class="nx">img</span><span class="o">:</span><span class="s2">&quot;data:image/gif;base64,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&quot;</span><span class="p">,</span><span class="nx">msg</span><span class="o">:</span><span class="kc">null</span><span class="p">,</span><span class="nx">msgText</span><span class="o">:</span><span class="s2">&quot;&lt;em&gt;Loading the next set of posts...&lt;/em&gt;&quot;</span><span class="p">,</span><span class="nx">selector</span><span class="o">:</span><span class="kc">null</span><span class="p">,</span><span class="nx">speed</span><span class="o">:</span><span class="s2">&quot;fast&quot;</span><span class="p">,</span><span class="nx">start</span><span class="o">:</span><span class="nx">n</span><span class="p">},</span><span class="nx">state</span><span class="o">:</span><span class="p">{</span><span class="nx">isDuringAjax</span><span class="o">:</span><span class="kc">false</span><span class="p">,</span><span class="nx">isInvalidPage</span><span class="o">:</span><span class="kc">false</span><span class="p">,</span><span class="nx">isDestroyed</span><span class="o">:</span><span class="kc">false</span><span class="p">,</span><span class="nx">isDone</span><span class="o">:</span><span class="kc">false</span><span class="p">,</span><span class="nx">isPaused</span><span class="o">:</span><span class="kc">false</span><span class="p">,</span><span class="nx">isBeyondMaxPage</span><span class="o">:</span><span class="kc">false</span><span class="p">,</span><span class="nx">currPage</span><span class="o">:</span><span class="mi">1</span><span class="p">},</span><span class="nx">debug</span><span class="o">:</span><span class="kc">false</span><span class="p">,</span><span class="nx">behavior</span><span class="o">:</span><span class="nx">n</span><span class="p">,</span><span class="nx">binder</span><span class="o">:</span><span class="nx">t</span><span class="p">(</span><span class="nx">e</span><span class="p">),</span><span class="nx">nextSelector</span><span class="o">:</span><span class="s2">&quot;div.navigation a:first&quot;</span><span class="p">,</span><span class="nx">navSelector</span><span class="o">:</span><span class="s2">&quot;div.navigation&quot;</span><span class="p">,</span><span class="nx">contentSelector</span><span class="o">:</span><span class="kc">null</span><span class="p">,</span><span class="nx">extraScrollPx</span><span class="o">:</span><span class="mi">150</span><span class="p">,</span><span class="nx">itemSelector</span><span class="o">:</span><span class="s2">&quot;div.post&quot;</span><span class="p">,</span><span class="nx">animate</span><span class="o">:</span><span class="kc">false</span><span class="p">,</span><span class="nx">pathParse</span><span class="o">:</span><span class="nx">n</span><span class="p">,</span><span class="nx">dataType</span><span class="o">:</span><span class="s2">&quot;html&quot;</span><span class="p">,</span><span class="nx">appendCallback</span><span class="o">:</span><span class="kc">true</span><span class="p">,</span><span class="nx">bufferPx</span><span class="o">:</span><span class="mi">40</span><span class="p">,</span><span class="nx">errorCallback</span><span class="o">:</span><span class="kd">function</span><span class="p">(){},</span><span class="nx">infid</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">pixelsFromNavToBottom</span><span class="o">:</span><span class="nx">n</span><span class="p">,</span><span class="nx">path</span><span class="o">:</span><span class="nx">n</span><span class="p">,</span><span class="nx">prefill</span><span class="o">:</span><span class="kc">false</span><span class="p">,</span><span class="nx">maxPage</span><span class="o">:</span><span class="nx">n</span><span class="p">};</span><span class="nx">t</span><span class="p">.</span><span class="nx">infinitescroll</span><span class="p">.</span><span class="nx">prototype</span><span class="o">=</span><span class="p">{</span><span class="nx">_binding</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">){</span><span class="kd">var</span> <span class="nx">r</span><span class="o">=</span><span class="k">this</span><span class="p">,</span><span class="nx">i</span><span class="o">=</span><span class="nx">r</span><span class="p">.</span><span class="nx">options</span><span class="p">;</span><span class="nx">i</span><span class="p">.</span><span class="nx">v</span><span class="o">=</span><span class="s2">&quot;2.0b2.120520&quot;</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="o">!!</span><span class="nx">i</span><span class="p">.</span><span class="nx">behavior</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">[</span><span class="s2">&quot;_binding_&quot;</span><span class="o">+</span><span class="nx">i</span><span class="p">.</span><span class="nx">behavior</span><span class="p">]</span><span class="o">!==</span><span class="nx">n</span><span class="p">){</span><span class="k">this</span><span class="p">[</span><span class="s2">&quot;_binding_&quot;</span><span class="o">+</span><span class="nx">i</span><span class="p">.</span><span class="nx">behavior</span><span class="p">].</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">);</span><span class="k">return</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="nx">t</span><span class="o">!==</span><span class="s2">&quot;bind&quot;</span><span class="o">&amp;&amp;</span><span class="nx">t</span><span class="o">!==</span><span class="s2">&quot;unbind&quot;</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">_debug</span><span class="p">(</span><span class="s2">&quot;Binding value  &quot;</span><span class="o">+</span><span class="nx">t</span><span class="o">+</span><span class="s2">&quot; not valid&quot;</span><span class="p">);</span><span class="k">return</span> <span class="kc">false</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="nx">t</span><span class="o">===</span><span class="s2">&quot;unbind&quot;</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">binder</span><span class="p">.</span><span class="nx">unbind</span><span class="p">(</span><span class="s2">&quot;smartscroll.infscr.&quot;</span><span class="o">+</span><span class="nx">r</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">infid</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">binder</span><span class="p">[</span><span class="nx">t</span><span class="p">](</span><span class="s2">&quot;smartscroll.infscr.&quot;</span><span class="o">+</span><span class="nx">r</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">infid</span><span class="p">,</span><span class="kd">function</span><span class="p">(){</span><span class="nx">r</span><span class="p">.</span><span class="nx">scroll</span><span class="p">()})}</span><span class="k">this</span><span class="p">.</span><span class="nx">_debug</span><span class="p">(</span><span class="s2">&quot;Binding&quot;</span><span class="p">,</span><span class="nx">t</span><span class="p">)},</span><span class="nx">_create</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span><span class="nx">s</span><span class="p">){</span><span class="kd">var</span> <span class="nx">o</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="kc">true</span><span class="p">,{},</span><span class="nx">t</span><span class="p">.</span><span class="nx">infinitescroll</span><span class="p">.</span><span class="nx">defaults</span><span class="p">,</span><span class="nx">i</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="o">=</span><span class="nx">o</span><span class="p">;</span><span class="kd">var</span> <span class="nx">u</span><span class="o">=</span><span class="nx">t</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="k">this</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">a</span><span class="p">.</span><span class="nx">_validate</span><span class="p">(</span><span class="nx">i</span><span class="p">)){</span><span class="k">return</span> <span class="kc">false</span><span class="p">}</span><span class="kd">var</span> <span class="nx">f</span><span class="o">=</span><span class="nx">t</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">nextSelector</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;href&quot;</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">f</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">_debug</span><span class="p">(</span><span class="s2">&quot;Navigation selector not found&quot;</span><span class="p">);</span><span class="k">return</span> <span class="kc">false</span><span class="p">}</span><span class="nx">o</span><span class="p">.</span><span class="nx">path</span><span class="o">=</span><span class="nx">o</span><span class="p">.</span><span class="nx">path</span><span class="o">||</span><span class="k">this</span><span class="p">.</span><span class="nx">_determinepath</span><span class="p">(</span><span class="nx">f</span><span class="p">);</span><span class="nx">o</span><span class="p">.</span><span class="nx">contentSelector</span><span class="o">=</span><span class="nx">o</span><span class="p">.</span><span class="nx">contentSelector</span><span class="o">||</span><span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">;</span><span class="nx">o</span><span class="p">.</span><span class="nx">loading</span><span class="p">.</span><span class="nx">selector</span><span class="o">=</span><span class="nx">o</span><span class="p">.</span><span class="nx">loading</span><span class="p">.</span><span class="nx">selector</span><span class="o">||</span><span class="nx">o</span><span class="p">.</span><span class="nx">contentSelector</span><span class="p">;</span><span class="nx">o</span><span class="p">.</span><span class="nx">loading</span><span class="p">.</span><span class="nx">msg</span><span class="o">=</span><span class="nx">o</span><span class="p">.</span><span class="nx">loading</span><span class="p">.</span><span class="nx">msg</span><span class="o">||</span><span class="nx">t</span><span class="p">(</span><span class="s1">&#39;&lt;div id=&quot;infscr-loading&quot;&gt;&lt;img alt=&quot;Loading...&quot; src=&quot;&#39;</span><span class="o">+</span><span class="nx">o</span><span class="p">.</span><span class="nx">loading</span><span class="p">.</span><span class="nx">img</span><span class="o">+</span><span class="s1">&#39;&quot; /&gt;&lt;div&gt;&#39;</span><span class="o">+</span><span class="nx">o</span><span class="p">.</span><span class="nx">loading</span><span class="p">.</span><span class="nx">msgText</span><span class="o">+</span><span class="s2">&quot;&lt;/div&gt;&lt;/div&gt;&quot;</span><span class="p">);(</span><span class="k">new</span> <span class="nx">Image</span><span class="p">).</span><span class="nx">src</span><span class="o">=</span><span class="nx">o</span><span class="p">.</span><span class="nx">loading</span><span class="p">.</span><span class="nx">img</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">pixelsFromNavToBottom</span><span class="o">===</span><span class="nx">n</span><span class="p">){</span><span class="nx">o</span><span class="p">.</span><span class="nx">pixelsFromNavToBottom</span><span class="o">=</span><span class="nx">t</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">height</span><span class="p">()</span><span class="o">-</span><span class="nx">t</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">navSelector</span><span class="p">).</span><span class="nx">offset</span><span class="p">().</span><span class="nx">top</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">_debug</span><span class="p">(</span><span class="s2">&quot;pixelsFromNavToBottom: &quot;</span><span class="o">+</span><span class="nx">o</span><span class="p">.</span><span class="nx">pixelsFromNavToBottom</span><span class="p">)}</span><span class="kd">var</span> <span class="nx">l</span><span class="o">=</span><span class="k">this</span><span class="p">;</span><span class="nx">o</span><span class="p">.</span><span class="nx">loading</span><span class="p">.</span><span class="nx">start</span><span class="o">=</span><span class="nx">o</span><span class="p">.</span><span class="nx">loading</span><span class="p">.</span><span class="nx">start</span><span class="o">||</span><span class="kd">function</span><span class="p">(){</span><span class="nx">t</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">navSelector</span><span class="p">).</span><span class="nx">hide</span><span class="p">();</span><span class="nx">o</span><span class="p">.</span><span class="nx">loading</span><span class="p">.</span><span class="nx">msg</span><span class="p">.</span><span class="nx">appendTo</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">loading</span><span class="p">.</span><span class="nx">selector</span><span class="p">).</span><span class="nx">show</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">loading</span><span class="p">.</span><span class="nx">speed</span><span class="p">,</span><span class="nx">t</span><span class="p">.</span><span class="nx">proxy</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="k">this</span><span class="p">.</span><span class="nx">beginAjax</span><span class="p">(</span><span class="nx">o</span><span class="p">)},</span><span class="nx">l</span><span class="p">))};</span><span class="nx">o</span><span class="p">.</span><span class="nx">loading</span><span class="p">.</span><span class="nx">finished</span><span class="o">=</span><span class="nx">o</span><span class="p">.</span><span class="nx">loading</span><span class="p">.</span><span class="nx">finished</span><span class="o">||</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">isBeyondMaxPage</span><span class="p">)</span><span class="nx">o</span><span class="p">.</span><span class="nx">loading</span><span class="p">.</span><span class="nx">msg</span><span class="p">.</span><span class="nx">fadeOut</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">loading</span><span class="p">.</span><span class="nx">speed</span><span class="p">)};</span><span class="nx">o</span><span class="p">.</span><span class="nx">callback</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">r</span><span class="p">,</span><span class="nx">i</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="o">!!</span><span class="nx">o</span><span class="p">.</span><span class="nx">behavior</span><span class="o">&amp;&amp;</span><span class="nx">e</span><span class="p">[</span><span class="s2">&quot;_callback_&quot;</span><span class="o">+</span><span class="nx">o</span><span class="p">.</span><span class="nx">behavior</span><span class="p">]</span><span class="o">!==</span><span class="nx">n</span><span class="p">){</span><span class="nx">e</span><span class="p">[</span><span class="s2">&quot;_callback_&quot;</span><span class="o">+</span><span class="nx">o</span><span class="p">.</span><span class="nx">behavior</span><span class="p">].</span><span class="nx">call</span><span class="p">(</span><span class="nx">t</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">contentSelector</span><span class="p">)[</span><span class="mi">0</span><span class="p">],</span><span class="nx">r</span><span class="p">,</span><span class="nx">i</span><span class="p">)}</span><span class="k">if</span><span class="p">(</span><span class="nx">s</span><span class="p">){</span><span class="nx">s</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">t</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">contentSelector</span><span class="p">)[</span><span class="mi">0</span><span class="p">],</span><span class="nx">r</span><span class="p">,</span><span class="nx">o</span><span class="p">,</span><span class="nx">i</span><span class="p">)}</span><span class="k">if</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">prefill</span><span class="p">){</span><span class="nx">u</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="s2">&quot;resize.infinite-scroll&quot;</span><span class="p">,</span><span class="nx">e</span><span class="p">.</span><span class="nx">_prefill</span><span class="p">)}};</span><span class="k">if</span><span class="p">(</span><span class="nx">i</span><span class="p">.</span><span class="nx">debug</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nb">Function</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">bind</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">console</span><span class="o">===</span><span class="s2">&quot;object&quot;</span><span class="o">||</span><span class="k">typeof</span> <span class="nx">console</span><span class="o">===</span><span class="s2">&quot;function&quot;</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="o">===</span><span class="s2">&quot;object&quot;</span><span class="p">){[</span><span class="s2">&quot;log&quot;</span><span class="p">,</span><span class="s2">&quot;info&quot;</span><span class="p">,</span><span class="s2">&quot;warn&quot;</span><span class="p">,</span><span class="s2">&quot;error&quot;</span><span class="p">,</span><span class="s2">&quot;assert&quot;</span><span class="p">,</span><span class="s2">&quot;dir&quot;</span><span class="p">,</span><span class="s2">&quot;clear&quot;</span><span class="p">,</span><span class="s2">&quot;profile&quot;</span><span class="p">,</span><span class="s2">&quot;profileEnd&quot;</span><span class="p">].</span><span class="nx">forEach</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span><span class="nx">console</span><span class="p">[</span><span class="nx">e</span><span class="p">]</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">console</span><span class="p">[</span><span class="nx">e</span><span class="p">],</span><span class="nx">console</span><span class="p">)},</span><span class="nb">Function</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">bind</span><span class="p">)}}</span><span class="k">this</span><span class="p">.</span><span class="nx">_setup</span><span class="p">();</span><span class="k">if</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">prefill</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">_prefill</span><span class="p">()}</span><span class="k">return</span> <span class="kc">true</span><span class="p">},</span><span class="nx">_prefill</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="kd">function</span> <span class="nx">s</span><span class="p">(){</span><span class="k">return</span> <span class="nx">r</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">contentSelector</span><span class="p">.</span><span class="nx">height</span><span class="p">()</span><span class="o">&lt;=</span><span class="nx">i</span><span class="p">.</span><span class="nx">height</span><span class="p">()}</span><span class="kd">var</span> <span class="nx">r</span><span class="o">=</span><span class="k">this</span><span class="p">;</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="nx">t</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">_prefill</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="nx">s</span><span class="p">()){</span><span class="nx">r</span><span class="p">.</span><span class="nx">scroll</span><span class="p">()}</span><span class="nx">i</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="s2">&quot;resize.infinite-scroll&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="nx">s</span><span class="p">()){</span><span class="nx">i</span><span class="p">.</span><span class="nx">unbind</span><span class="p">(</span><span class="s2">&quot;resize.infinite-scroll&quot;</span><span class="p">);</span><span class="nx">r</span><span class="p">.</span><span class="nx">scroll</span><span class="p">()}})};</span><span class="k">this</span><span class="p">.</span><span class="nx">_prefill</span><span class="p">()},</span><span class="nx">_debug</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="kc">true</span><span class="o">!==</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">debug</span><span class="p">){</span><span class="k">return</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">console</span><span class="o">!==</span><span class="s2">&quot;undefined&quot;</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="o">===</span><span class="s2">&quot;function&quot;</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">).</span><span class="nx">length</span><span class="o">===</span><span class="mi">1</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">)[</span><span class="mi">0</span><span class="p">]</span><span class="o">===</span><span class="s2">&quot;string&quot;</span><span class="p">){</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">).</span><span class="nx">toString</span><span class="p">())}</span><span class="k">else</span><span class="p">{</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">))}}</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nb">Function</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">bind</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">console</span><span class="o">!==</span><span class="s2">&quot;undefined&quot;</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="o">===</span><span class="s2">&quot;object&quot;</span><span class="p">){</span><span class="nb">Function</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">call</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">,</span><span class="nx">console</span><span class="p">,</span><span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">))}},</span><span class="nx">_determinepath</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">){</span><span class="kd">var</span> <span class="nx">r</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="o">!!</span><span class="nx">r</span><span class="p">.</span><span class="nx">behavior</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">[</span><span class="s2">&quot;_determinepath_&quot;</span><span class="o">+</span><span class="nx">r</span><span class="p">.</span><span class="nx">behavior</span><span class="p">]</span><span class="o">!==</span><span class="nx">n</span><span class="p">){</span><span class="k">return</span> <span class="k">this</span><span class="p">[</span><span class="s2">&quot;_determinepath_&quot;</span><span class="o">+</span><span class="nx">r</span><span class="p">.</span><span class="nx">behavior</span><span class="p">].</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">t</span><span class="p">)}</span><span class="k">if</span><span class="p">(</span><span class="o">!!</span><span class="nx">r</span><span class="p">.</span><span class="nx">pathParse</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">_debug</span><span class="p">(</span><span class="s2">&quot;pathParse manual&quot;</span><span class="p">);</span><span class="k">return</span> <span class="nx">r</span><span class="p">.</span><span class="nx">pathParse</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">currPage</span><span class="o">+</span><span class="mi">1</span><span class="p">)}</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^(.*?)\b2\b(.*?$)/</span><span class="p">)){</span><span class="nx">t</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^(.*?)\b2\b(.*?$)/</span><span class="p">).</span><span class="nx">slice</span><span class="p">(</span><span class="mi">1</span><span class="p">)}</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^(.*?)2(.*?$)/</span><span class="p">)){</span><span class="k">if</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^(.*?page=)2(\/.*|$)/</span><span class="p">)){</span><span class="nx">t</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^(.*?page=)2(\/.*|$)/</span><span class="p">).</span><span class="nx">slice</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span><span class="k">return</span> <span class="nx">t</span><span class="p">}</span><span class="nx">t</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^(.*?)2(.*?$)/</span><span class="p">).</span><span class="nx">slice</span><span class="p">(</span><span class="mi">1</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^(.*?page=)1(\/.*|$)/</span><span class="p">)){</span><span class="nx">t</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^(.*?page=)1(\/.*|$)/</span><span class="p">).</span><span class="nx">slice</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span><span class="k">return</span> <span class="nx">t</span><span class="p">}</span><span class="k">else</span><span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">_debug</span><span class="p">(</span><span class="s2">&quot;Sorry, we couldn&#39;t parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.&quot;</span><span class="p">);</span><span class="nx">r</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">isInvalidPage</span><span class="o">=</span><span class="kc">true</span><span class="p">}}</span><span class="k">this</span><span class="p">.</span><span class="nx">_debug</span><span class="p">(</span><span class="s2">&quot;determinePath&quot;</span><span class="p">,</span><span class="nx">t</span><span class="p">);</span><span class="k">return</span> <span class="nx">t</span><span class="p">},</span><span class="nx">_error</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">){</span><span class="kd">var</span> <span class="nx">r</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="o">!!</span><span class="nx">r</span><span class="p">.</span><span class="nx">behavior</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">[</span><span class="s2">&quot;_error_&quot;</span><span class="o">+</span><span class="nx">r</span><span class="p">.</span><span class="nx">behavior</span><span class="p">]</span><span class="o">!==</span><span class="nx">n</span><span class="p">){</span><span class="k">this</span><span class="p">[</span><span class="s2">&quot;_error_&quot;</span><span class="o">+</span><span class="nx">r</span><span class="p">.</span><span class="nx">behavior</span><span class="p">].</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">t</span><span class="p">);</span><span class="k">return</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="nx">t</span><span class="o">!==</span><span class="s2">&quot;destroy&quot;</span><span class="o">&amp;&amp;</span><span class="nx">t</span><span class="o">!==</span><span class="s2">&quot;end&quot;</span><span class="p">){</span><span class="nx">t</span><span class="o">=</span><span class="s2">&quot;unknown&quot;</span><span class="p">}</span><span class="k">this</span><span class="p">.</span><span class="nx">_debug</span><span class="p">(</span><span class="s2">&quot;Error&quot;</span><span class="p">,</span><span class="nx">t</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">t</span><span class="o">===</span><span class="s2">&quot;end&quot;</span><span class="o">||</span><span class="nx">r</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">isBeyondMaxPage</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">_showdonemsg</span><span class="p">()}</span><span class="nx">r</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">isDone</span><span class="o">=</span><span class="kc">true</span><span class="p">;</span><span class="nx">r</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">currPage</span><span class="o">=</span><span class="mi">1</span><span class="p">;</span><span class="nx">r</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">isPaused</span><span class="o">=</span><span class="kc">false</span><span class="p">;</span><span class="nx">r</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">isBeyondMaxPage</span><span class="o">=</span><span class="kc">false</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">_binding</span><span class="p">(</span><span class="s2">&quot;unbind&quot;</span><span class="p">)},</span><span class="nx">_loadcallback</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span><span class="nx">s</span><span class="p">,</span><span class="nx">o</span><span class="p">){</span><span class="kd">var</span> <span class="nx">u</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">callback</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="nx">u</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">isDone</span><span class="o">?</span><span class="s2">&quot;done&quot;</span><span class="o">:!</span><span class="nx">u</span><span class="p">.</span><span class="nx">appendCallback</span><span class="o">?</span><span class="s2">&quot;no-append&quot;</span><span class="o">:</span><span class="s2">&quot;append&quot;</span><span class="p">,</span><span class="nx">l</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="o">!!</span><span class="nx">u</span><span class="p">.</span><span class="nx">behavior</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">[</span><span class="s2">&quot;_loadcallback_&quot;</span><span class="o">+</span><span class="nx">u</span><span class="p">.</span><span class="nx">behavior</span><span class="p">]</span><span class="o">!==</span><span class="nx">n</span><span class="p">){</span><span class="k">this</span><span class="p">[</span><span class="s2">&quot;_loadcallback_&quot;</span><span class="o">+</span><span class="nx">u</span><span class="p">.</span><span class="nx">behavior</span><span class="p">].</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">s</span><span class="p">);</span><span class="k">return</span><span class="p">}</span><span class="k">switch</span><span class="p">(</span><span class="nx">f</span><span class="p">){</span><span class="k">case</span><span class="s2">&quot;done&quot;</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">_showdonemsg</span><span class="p">();</span><span class="k">return</span> <span class="kc">false</span><span class="p">;</span><span class="k">case</span><span class="s2">&quot;no-append&quot;</span><span class="o">:</span><span class="k">if</span><span class="p">(</span><span class="nx">u</span><span class="p">.</span><span class="nx">dataType</span><span class="o">===</span><span class="s2">&quot;html&quot;</span><span class="p">){</span><span class="nx">s</span><span class="o">=</span><span class="s2">&quot;&lt;div&gt;&quot;</span><span class="o">+</span><span class="nx">s</span><span class="o">+</span><span class="s2">&quot;&lt;/div&gt;&quot;</span><span class="p">;</span><span class="nx">s</span><span class="o">=</span><span class="nx">t</span><span class="p">(</span><span class="nx">s</span><span class="p">).</span><span class="nx">find</span><span class="p">(</span><span class="nx">u</span><span class="p">.</span><span class="nx">itemSelector</span><span class="p">)}</span><span class="k">break</span><span class="p">;</span><span class="k">case</span><span class="s2">&quot;append&quot;</span><span class="o">:</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nx">i</span><span class="p">.</span><span class="nx">children</span><span class="p">();</span><span class="k">if</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">length</span><span class="o">===</span><span class="mi">0</span><span class="p">){</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">_error</span><span class="p">(</span><span class="s2">&quot;end&quot;</span><span class="p">)}</span><span class="nx">l</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createDocumentFragment</span><span class="p">();</span><span class="k">while</span><span class="p">(</span><span class="nx">i</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">firstChild</span><span class="p">){</span><span class="nx">l</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">i</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">firstChild</span><span class="p">)}</span><span class="k">this</span><span class="p">.</span><span class="nx">_debug</span><span class="p">(</span><span class="s2">&quot;contentSelector&quot;</span><span class="p">,</span><span class="nx">t</span><span class="p">(</span><span class="nx">u</span><span class="p">.</span><span class="nx">contentSelector</span><span class="p">)[</span><span class="mi">0</span><span class="p">]);</span><span class="nx">t</span><span class="p">(</span><span class="nx">u</span><span class="p">.</span><span class="nx">contentSelector</span><span class="p">)[</span><span class="mi">0</span><span class="p">].</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">l</span><span class="p">);</span><span class="nx">s</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">get</span><span class="p">();</span><span class="k">break</span><span class="p">}</span><span class="nx">u</span><span class="p">.</span><span class="nx">loading</span><span class="p">.</span><span class="nx">finished</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">t</span><span class="p">(</span><span class="nx">u</span><span class="p">.</span><span class="nx">contentSelector</span><span class="p">)[</span><span class="mi">0</span><span class="p">],</span><span class="nx">u</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">u</span><span class="p">.</span><span class="nx">animate</span><span class="p">){</span><span class="kd">var</span> <span class="nx">h</span><span class="o">=</span><span class="nx">t</span><span class="p">(</span><span class="nx">e</span><span class="p">).</span><span class="nx">scrollTop</span><span class="p">()</span><span class="o">+</span><span class="nx">t</span><span class="p">(</span><span class="nx">u</span><span class="p">.</span><span class="nx">loading</span><span class="p">.</span><span class="nx">msg</span><span class="p">).</span><span class="nx">height</span><span class="p">()</span><span class="o">+</span><span class="nx">u</span><span class="p">.</span><span class="nx">extraScrollPx</span><span class="o">+</span><span class="s2">&quot;px&quot;</span><span class="p">;</span><span class="nx">t</span><span class="p">(</span><span class="s2">&quot;html,body&quot;</span><span class="p">).</span><span class="nx">animate</span><span class="p">({</span><span class="nx">scrollTop</span><span class="o">:</span><span class="nx">h</span><span class="p">},</span><span class="mi">800</span><span class="p">,</span><span class="kd">function</span><span class="p">(){</span><span class="nx">u</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">isDuringAjax</span><span class="o">=</span><span class="kc">false</span><span class="p">})}</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">u</span><span class="p">.</span><span class="nx">animate</span><span class="p">){</span><span class="nx">u</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">isDuringAjax</span><span class="o">=</span><span class="kc">false</span><span class="p">}</span><span class="nx">a</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">s</span><span class="p">,</span><span class="nx">o</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">u</span><span class="p">.</span><span class="nx">prefill</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">_prefill</span><span class="p">()}},</span><span class="nx">_nearbottom</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">,</span><span class="nx">s</span><span class="o">=</span><span class="mi">0</span><span class="o">+</span><span class="nx">t</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">height</span><span class="p">()</span><span class="o">-</span><span class="nx">i</span><span class="p">.</span><span class="nx">binder</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">()</span><span class="o">-</span><span class="nx">t</span><span class="p">(</span><span class="nx">e</span><span class="p">).</span><span class="nx">height</span><span class="p">();</span><span class="k">if</span><span class="p">(</span><span class="o">!!</span><span class="nx">i</span><span class="p">.</span><span class="nx">behavior</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">[</span><span class="s2">&quot;_nearbottom_&quot;</span><span class="o">+</span><span class="nx">i</span><span class="p">.</span><span class="nx">behavior</span><span class="p">]</span><span class="o">!==</span><span class="nx">n</span><span class="p">){</span><span class="k">return</span> <span class="k">this</span><span class="p">[</span><span class="s2">&quot;_nearbottom_&quot;</span><span class="o">+</span><span class="nx">i</span><span class="p">.</span><span class="nx">behavior</span><span class="p">].</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">)}</span><span class="k">this</span><span class="p">.</span><span class="nx">_debug</span><span class="p">(</span><span class="s2">&quot;math:&quot;</span><span class="p">,</span><span class="nx">s</span><span class="p">,</span><span class="nx">i</span><span class="p">.</span><span class="nx">pixelsFromNavToBottom</span><span class="p">);</span><span class="k">return</span> <span class="nx">s</span><span class="o">-</span><span class="nx">i</span><span class="p">.</span><span class="nx">bufferPx</span><span class="o">&lt;</span><span class="nx">i</span><span class="p">.</span><span class="nx">pixelsFromNavToBottom</span><span class="p">},</span><span class="nx">_pausing</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">){</span><span class="kd">var</span> <span class="nx">r</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="o">!!</span><span class="nx">r</span><span class="p">.</span><span class="nx">behavior</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">[</span><span class="s2">&quot;_pausing_&quot;</span><span class="o">+</span><span class="nx">r</span><span class="p">.</span><span class="nx">behavior</span><span class="p">]</span><span class="o">!==</span><span class="nx">n</span><span class="p">){</span><span class="k">this</span><span class="p">[</span><span class="s2">&quot;_pausing_&quot;</span><span class="o">+</span><span class="nx">r</span><span class="p">.</span><span class="nx">behavior</span><span class="p">].</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">t</span><span class="p">);</span><span class="k">return</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="nx">t</span><span class="o">!==</span><span class="s2">&quot;pause&quot;</span><span class="o">&amp;&amp;</span><span class="nx">t</span><span class="o">!==</span><span class="s2">&quot;resume&quot;</span><span class="o">&amp;&amp;</span><span class="nx">t</span><span class="o">!==</span><span class="kc">null</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">_debug</span><span class="p">(</span><span class="s2">&quot;Invalid argument. Toggling pause value instead&quot;</span><span class="p">)}</span><span class="nx">t</span><span class="o">=</span><span class="nx">t</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">t</span><span class="o">===</span><span class="s2">&quot;pause&quot;</span><span class="o">||</span><span class="nx">t</span><span class="o">===</span><span class="s2">&quot;resume&quot;</span><span class="p">)</span><span class="o">?</span><span class="nx">t</span><span class="o">:</span><span class="s2">&quot;toggle&quot;</span><span class="p">;</span><span class="k">switch</span><span class="p">(</span><span class="nx">t</span><span class="p">){</span><span class="k">case</span><span class="s2">&quot;pause&quot;</span><span class="o">:</span><span class="nx">r</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">isPaused</span><span class="o">=</span><span class="kc">true</span><span class="p">;</span><span class="k">break</span><span class="p">;</span><span class="k">case</span><span class="s2">&quot;resume&quot;</span><span class="o">:</span><span class="nx">r</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">isPaused</span><span class="o">=</span><span class="kc">false</span><span class="p">;</span><span class="k">break</span><span class="p">;</span><span class="k">case</span><span class="s2">&quot;toggle&quot;</span><span class="o">:</span><span class="nx">r</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">isPaused</span><span class="o">=!</span><span class="nx">r</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">isPaused</span><span class="p">;</span><span class="k">break</span><span class="p">}</span><span class="k">this</span><span class="p">.</span><span class="nx">_debug</span><span class="p">(</span><span class="s2">&quot;Paused&quot;</span><span class="p">,</span><span class="nx">r</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">isPaused</span><span class="p">);</span><span class="k">return</span> <span class="kc">false</span><span class="p">},</span><span class="nx">_setup</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">t</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="o">!!</span><span class="nx">t</span><span class="p">.</span><span class="nx">behavior</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">[</span><span class="s2">&quot;_setup_&quot;</span><span class="o">+</span><span class="nx">t</span><span class="p">.</span><span class="nx">behavior</span><span class="p">]</span><span class="o">!==</span><span class="nx">n</span><span class="p">){</span><span class="k">this</span><span class="p">[</span><span class="s2">&quot;_setup_&quot;</span><span class="o">+</span><span class="nx">t</span><span class="p">.</span><span class="nx">behavior</span><span class="p">].</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">);</span><span class="k">return</span><span class="p">}</span><span class="k">this</span><span class="p">.</span><span class="nx">_binding</span><span class="p">(</span><span class="s2">&quot;bind&quot;</span><span class="p">);</span><span class="k">return</span> <span class="kc">false</span><span class="p">},</span><span class="nx">_showdonemsg</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">r</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="o">!!</span><span class="nx">r</span><span class="p">.</span><span class="nx">behavior</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">[</span><span class="s2">&quot;_showdonemsg_&quot;</span><span class="o">+</span><span class="nx">r</span><span class="p">.</span><span class="nx">behavior</span><span class="p">]</span><span class="o">!==</span><span class="nx">n</span><span class="p">){</span><span class="k">this</span><span class="p">[</span><span class="s2">&quot;_showdonemsg_&quot;</span><span class="o">+</span><span class="nx">r</span><span class="p">.</span><span class="nx">behavior</span><span class="p">].</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">);</span><span class="k">return</span><span class="p">}</span><span class="nx">r</span><span class="p">.</span><span class="nx">loading</span><span class="p">.</span><span class="nx">msg</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;img&quot;</span><span class="p">).</span><span class="nx">hide</span><span class="p">().</span><span class="nx">parent</span><span class="p">().</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">).</span><span class="nx">html</span><span class="p">(</span><span class="nx">r</span><span class="p">.</span><span class="nx">loading</span><span class="p">.</span><span class="nx">finishedMsg</span><span class="p">).</span><span class="nx">animate</span><span class="p">({</span><span class="nx">opacity</span><span class="o">:</span><span class="mi">1</span><span class="p">},</span><span class="mi">2</span><span class="nx">e3</span><span class="p">,</span><span class="kd">function</span><span class="p">(){</span><span class="nx">t</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">parent</span><span class="p">().</span><span class="nx">fadeOut</span><span class="p">(</span><span class="nx">r</span><span class="p">.</span><span class="nx">loading</span><span class="p">.</span><span class="nx">speed</span><span class="p">)});</span><span class="nx">r</span><span class="p">.</span><span class="nx">errorCallback</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">t</span><span class="p">(</span><span class="nx">r</span><span class="p">.</span><span class="nx">contentSelector</span><span class="p">)[</span><span class="mi">0</span><span class="p">],</span><span class="s2">&quot;done&quot;</span><span class="p">)},</span><span class="nx">_validate</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">n</span><span class="p">){</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">r</span> <span class="k">in</span> <span class="nx">n</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">r</span><span class="p">.</span><span class="nx">indexOf</span><span class="o">&amp;&amp;</span><span class="nx">r</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;Selector&quot;</span><span class="p">)</span><span class="o">&gt;-</span><span class="mi">1</span><span class="o">&amp;&amp;</span><span class="nx">t</span><span class="p">(</span><span class="nx">n</span><span class="p">[</span><span class="nx">r</span><span class="p">]).</span><span class="nx">length</span><span class="o">===</span><span class="mi">0</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">_debug</span><span class="p">(</span><span class="s2">&quot;Your &quot;</span><span class="o">+</span><span class="nx">r</span><span class="o">+</span><span class="s2">&quot; found no elements.&quot;</span><span class="p">);</span><span class="k">return</span> <span class="kc">false</span><span class="p">}}</span><span class="k">return</span> <span class="kc">true</span><span class="p">},</span><span class="nx">bind</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">this</span><span class="p">.</span><span class="nx">_binding</span><span class="p">(</span><span class="s2">&quot;bind&quot;</span><span class="p">)},</span><span class="nx">destroy</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">isDestroyed</span><span class="o">=</span><span class="kc">true</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">loading</span><span class="p">.</span><span class="nx">finished</span><span class="p">();</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">_error</span><span class="p">(</span><span class="s2">&quot;destroy&quot;</span><span class="p">)},</span><span class="nx">pause</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">this</span><span class="p">.</span><span class="nx">_pausing</span><span class="p">(</span><span class="s2">&quot;pause&quot;</span><span class="p">)},</span><span class="nx">resume</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">this</span><span class="p">.</span><span class="nx">_pausing</span><span class="p">(</span><span class="s2">&quot;resume&quot;</span><span class="p">)},</span><span class="nx">beginAjax</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">r</span><span class="p">){</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="k">this</span><span class="p">,</span><span class="nx">s</span><span class="o">=</span><span class="nx">r</span><span class="p">.</span><span class="nx">path</span><span class="p">,</span><span class="nx">o</span><span class="p">,</span><span class="nx">u</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">f</span><span class="p">;</span><span class="nx">r</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">currPage</span><span class="o">++</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">r</span><span class="p">.</span><span class="nx">maxPage</span><span class="o">!=</span><span class="nx">n</span><span class="o">&amp;&amp;</span><span class="nx">r</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">currPage</span><span class="o">&gt;</span><span class="nx">r</span><span class="p">.</span><span class="nx">maxPage</span><span class="p">){</span><span class="nx">r</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">isBeyondMaxPage</span><span class="o">=</span><span class="kc">true</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">destroy</span><span class="p">();</span><span class="k">return</span><span class="p">}</span><span class="nx">o</span><span class="o">=</span><span class="nx">t</span><span class="p">(</span><span class="nx">r</span><span class="p">.</span><span class="nx">contentSelector</span><span class="p">).</span><span class="nx">is</span><span class="p">(</span><span class="s2">&quot;table, tbody&quot;</span><span class="p">)</span><span class="o">?</span><span class="nx">t</span><span class="p">(</span><span class="s2">&quot;&lt;tbody/&gt;&quot;</span><span class="p">)</span><span class="o">:</span><span class="nx">t</span><span class="p">(</span><span class="s2">&quot;&lt;div/&gt;&quot;</span><span class="p">);</span><span class="nx">u</span><span class="o">=</span><span class="k">typeof</span> <span class="nx">s</span><span class="o">===</span><span class="s2">&quot;function&quot;</span><span class="o">?</span><span class="nx">s</span><span class="p">(</span><span class="nx">r</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">currPage</span><span class="p">)</span><span class="o">:</span><span class="nx">s</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="nx">r</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">currPage</span><span class="p">);</span><span class="nx">i</span><span class="p">.</span><span class="nx">_debug</span><span class="p">(</span><span class="s2">&quot;heading into ajax&quot;</span><span class="p">,</span><span class="nx">u</span><span class="p">);</span><span class="nx">a</span><span class="o">=</span><span class="nx">r</span><span class="p">.</span><span class="nx">dataType</span><span class="o">===</span><span class="s2">&quot;html&quot;</span><span class="o">||</span><span class="nx">r</span><span class="p">.</span><span class="nx">dataType</span><span class="o">===</span><span class="s2">&quot;json&quot;</span><span class="o">?</span><span class="nx">r</span><span class="p">.</span><span class="nx">dataType</span><span class="o">:</span><span class="s2">&quot;html+callback&quot;</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">r</span><span class="p">.</span><span class="nx">appendCallback</span><span class="o">&amp;&amp;</span><span class="nx">r</span><span class="p">.</span><span class="nx">dataType</span><span class="o">===</span><span class="s2">&quot;html&quot;</span><span class="p">){</span><span class="nx">a</span><span class="o">+=</span><span class="s2">&quot;+callback&quot;</span><span class="p">}</span><span class="k">switch</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">case</span><span class="s2">&quot;html+callback&quot;</span><span class="o">:</span><span class="nx">i</span><span class="p">.</span><span class="nx">_debug</span><span class="p">(</span><span class="s2">&quot;Using HTML via .load() method&quot;</span><span class="p">);</span><span class="nx">o</span><span class="p">.</span><span class="nx">load</span><span class="p">(</span><span class="nx">u</span><span class="o">+</span><span class="s2">&quot; &quot;</span><span class="o">+</span><span class="nx">r</span><span class="p">.</span><span class="nx">itemSelector</span><span class="p">,</span><span class="nx">n</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">){</span><span class="nx">i</span><span class="p">.</span><span class="nx">_loadcallback</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span><span class="nx">t</span><span class="p">,</span><span class="nx">u</span><span class="p">)});</span><span class="k">break</span><span class="p">;</span><span class="k">case</span><span class="s2">&quot;html&quot;</span><span class="o">:</span><span class="nx">i</span><span class="p">.</span><span class="nx">_debug</span><span class="p">(</span><span class="s2">&quot;Using &quot;</span><span class="o">+</span><span class="nx">a</span><span class="p">.</span><span class="nx">toUpperCase</span><span class="p">()</span><span class="o">+</span><span class="s2">&quot; via $.ajax() method&quot;</span><span class="p">);</span><span class="nx">t</span><span class="p">.</span><span class="nx">ajax</span><span class="p">({</span><span class="nx">url</span><span class="o">:</span><span class="nx">u</span><span class="p">,</span><span class="nx">dataType</span><span class="o">:</span><span class="nx">r</span><span class="p">.</span><span class="nx">dataType</span><span class="p">,</span><span class="nx">complete</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">n</span><span class="p">){</span><span class="nx">f</span><span class="o">=</span><span class="k">typeof</span> <span class="nx">t</span><span class="p">.</span><span class="nx">isResolved</span><span class="o">!==</span><span class="s2">&quot;undefined&quot;</span><span class="o">?</span><span class="nx">t</span><span class="p">.</span><span class="nx">isResolved</span><span class="p">()</span><span class="o">:</span><span class="nx">n</span><span class="o">===</span><span class="s2">&quot;success&quot;</span><span class="o">||</span><span class="nx">n</span><span class="o">===</span><span class="s2">&quot;notmodified&quot;</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">f</span><span class="p">){</span><span class="nx">i</span><span class="p">.</span><span class="nx">_loadcallback</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span><span class="nx">t</span><span class="p">.</span><span class="nx">responseText</span><span class="p">,</span><span class="nx">u</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="nx">i</span><span class="p">.</span><span class="nx">_error</span><span class="p">(</span><span class="s2">&quot;end&quot;</span><span class="p">)}}});</span><span class="k">break</span><span class="p">;</span><span class="k">case</span><span class="s2">&quot;json&quot;</span><span class="o">:</span><span class="nx">i</span><span class="p">.</span><span class="nx">_debug</span><span class="p">(</span><span class="s2">&quot;Using &quot;</span><span class="o">+</span><span class="nx">a</span><span class="p">.</span><span class="nx">toUpperCase</span><span class="p">()</span><span class="o">+</span><span class="s2">&quot; via $.ajax() method&quot;</span><span class="p">);</span><span class="nx">t</span><span class="p">.</span><span class="nx">ajax</span><span class="p">({</span><span class="nx">dataType</span><span class="o">:</span><span class="s2">&quot;json&quot;</span><span class="p">,</span><span class="nx">type</span><span class="o">:</span><span class="s2">&quot;GET&quot;</span><span class="p">,</span><span class="nx">url</span><span class="o">:</span><span class="nx">u</span><span class="p">,</span><span class="nx">success</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">t</span><span class="p">,</span><span class="nx">s</span><span class="p">){</span><span class="nx">f</span><span class="o">=</span><span class="k">typeof</span> <span class="nx">s</span><span class="p">.</span><span class="nx">isResolved</span><span class="o">!==</span><span class="s2">&quot;undefined&quot;</span><span class="o">?</span><span class="nx">s</span><span class="p">.</span><span class="nx">isResolved</span><span class="p">()</span><span class="o">:</span><span class="nx">t</span><span class="o">===</span><span class="s2">&quot;success&quot;</span><span class="o">||</span><span class="nx">t</span><span class="o">===</span><span class="s2">&quot;notmodified&quot;</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">r</span><span class="p">.</span><span class="nx">appendCallback</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">r</span><span class="p">.</span><span class="nx">template</span><span class="o">!==</span><span class="nx">n</span><span class="p">){</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="nx">r</span><span class="p">.</span><span class="nx">template</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span><span class="nx">o</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">f</span><span class="p">){</span><span class="nx">i</span><span class="p">.</span><span class="nx">_loadcallback</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span><span class="nx">a</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="nx">i</span><span class="p">.</span><span class="nx">_error</span><span class="p">(</span><span class="s2">&quot;end&quot;</span><span class="p">)}}</span><span class="k">else</span><span class="p">{</span><span class="nx">i</span><span class="p">.</span><span class="nx">_debug</span><span class="p">(</span><span class="s2">&quot;template must be defined.&quot;</span><span class="p">);</span><span class="nx">i</span><span class="p">.</span><span class="nx">_error</span><span class="p">(</span><span class="s2">&quot;end&quot;</span><span class="p">)}}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="nx">f</span><span class="p">){</span><span class="nx">i</span><span class="p">.</span><span class="nx">_loadcallback</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">u</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="nx">i</span><span class="p">.</span><span class="nx">_error</span><span class="p">(</span><span class="s2">&quot;end&quot;</span><span class="p">)}}},</span><span class="nx">error</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="nx">i</span><span class="p">.</span><span class="nx">_debug</span><span class="p">(</span><span class="s2">&quot;JSON ajax request failed.&quot;</span><span class="p">);</span><span class="nx">i</span><span class="p">.</span><span class="nx">_error</span><span class="p">(</span><span class="s2">&quot;end&quot;</span><span class="p">)}});</span><span class="k">break</span><span class="p">}},</span><span class="nx">retrieve</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">r</span><span class="p">){</span><span class="nx">r</span><span class="o">=</span><span class="nx">r</span><span class="o">||</span><span class="kc">null</span><span class="p">;</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="k">this</span><span class="p">,</span><span class="nx">s</span><span class="o">=</span><span class="nx">i</span><span class="p">.</span><span class="nx">options</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="o">!!</span><span class="nx">s</span><span class="p">.</span><span class="nx">behavior</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">[</span><span class="s2">&quot;retrieve_&quot;</span><span class="o">+</span><span class="nx">s</span><span class="p">.</span><span class="nx">behavior</span><span class="p">]</span><span class="o">!==</span><span class="nx">n</span><span class="p">){</span><span class="k">this</span><span class="p">[</span><span class="s2">&quot;retrieve_&quot;</span><span class="o">+</span><span class="nx">s</span><span class="p">.</span><span class="nx">behavior</span><span class="p">].</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">r</span><span class="p">);</span><span class="k">return</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="nx">s</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">isDestroyed</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">_debug</span><span class="p">(</span><span class="s2">&quot;Instance is destroyed&quot;</span><span class="p">);</span><span class="k">return</span> <span class="kc">false</span><span class="p">}</span><span class="nx">s</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">isDuringAjax</span><span class="o">=</span><span class="kc">true</span><span class="p">;</span><span class="nx">s</span><span class="p">.</span><span class="nx">loading</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">t</span><span class="p">(</span><span class="nx">s</span><span class="p">.</span><span class="nx">contentSelector</span><span class="p">)[</span><span class="mi">0</span><span class="p">],</span><span class="nx">s</span><span class="p">)},</span><span class="nx">scroll</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">t</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">,</span><span class="nx">r</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">state</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="o">!!</span><span class="nx">t</span><span class="p">.</span><span class="nx">behavior</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">[</span><span class="s2">&quot;scroll_&quot;</span><span class="o">+</span><span class="nx">t</span><span class="p">.</span><span class="nx">behavior</span><span class="p">]</span><span class="o">!==</span><span class="nx">n</span><span class="p">){</span><span class="k">this</span><span class="p">[</span><span class="s2">&quot;scroll_&quot;</span><span class="o">+</span><span class="nx">t</span><span class="p">.</span><span class="nx">behavior</span><span class="p">].</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">);</span><span class="k">return</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="nx">r</span><span class="p">.</span><span class="nx">isDuringAjax</span><span class="o">||</span><span class="nx">r</span><span class="p">.</span><span class="nx">isInvalidPage</span><span class="o">||</span><span class="nx">r</span><span class="p">.</span><span class="nx">isDone</span><span class="o">||</span><span class="nx">r</span><span class="p">.</span><span class="nx">isDestroyed</span><span class="o">||</span><span class="nx">r</span><span class="p">.</span><span class="nx">isPaused</span><span class="p">){</span><span class="k">return</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">_nearbottom</span><span class="p">()){</span><span class="k">return</span><span class="p">}</span><span class="k">this</span><span class="p">.</span><span class="nx">retrieve</span><span class="p">()},</span><span class="nx">toggle</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">this</span><span class="p">.</span><span class="nx">_pausing</span><span class="p">()},</span><span class="nx">unbind</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">this</span><span class="p">.</span><span class="nx">_binding</span><span class="p">(</span><span class="s2">&quot;unbind&quot;</span><span class="p">)},</span><span class="nx">update</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">n</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">isPlainObject</span><span class="p">(</span><span class="nx">n</span><span class="p">)){</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="kc">true</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">,</span><span class="nx">n</span><span class="p">)}}};</span><span class="nx">t</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">infinitescroll</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">n</span><span class="p">,</span><span class="nx">r</span><span class="p">){</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="k">typeof</span> <span class="nx">n</span><span class="p">;</span><span class="k">switch</span><span class="p">(</span><span class="nx">i</span><span class="p">){</span><span class="k">case</span><span class="s2">&quot;string&quot;</span><span class="o">:</span><span class="kd">var</span> <span class="nx">s</span><span class="o">=</span><span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span><span class="mi">1</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="s2">&quot;infinitescroll&quot;</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">e</span><span class="p">){</span><span class="k">return</span> <span class="kc">false</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">t</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">e</span><span class="p">[</span><span class="nx">n</span><span class="p">])</span><span class="o">||</span><span class="nx">n</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span><span class="o">===</span><span class="s2">&quot;_&quot;</span><span class="p">){</span><span class="k">return</span> <span class="kc">false</span><span class="p">}</span><span class="nx">e</span><span class="p">[</span><span class="nx">n</span><span class="p">].</span><span class="nx">apply</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">s</span><span class="p">)});</span><span class="k">break</span><span class="p">;</span><span class="k">case</span><span class="s2">&quot;object&quot;</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="s2">&quot;infinitescroll&quot;</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span><span class="nx">e</span><span class="p">.</span><span class="nx">update</span><span class="p">(</span><span class="nx">n</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="nx">e</span><span class="o">=</span><span class="k">new</span> <span class="nx">t</span><span class="p">.</span><span class="nx">infinitescroll</span><span class="p">(</span><span class="nx">n</span><span class="p">,</span><span class="nx">r</span><span class="p">,</span><span class="k">this</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">e</span><span class="p">.</span><span class="nx">failed</span><span class="p">){</span><span class="nx">t</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="s2">&quot;infinitescroll&quot;</span><span class="p">,</span><span class="nx">e</span><span class="p">)}}});</span><span class="k">break</span><span class="p">}</span><span class="k">return</span> <span class="k">this</span><span class="p">};</span><span class="kd">var</span> <span class="nx">r</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">event</span><span class="p">,</span><span class="nx">i</span><span class="p">;</span><span class="nx">r</span><span class="p">.</span><span class="nx">special</span><span class="p">.</span><span class="nx">smartscroll</span><span class="o">=</span><span class="p">{</span><span class="nx">setup</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="nx">t</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">bind</span><span class="p">(</span><span class="s2">&quot;scroll&quot;</span><span class="p">,</span><span class="nx">r</span><span class="p">.</span><span class="nx">special</span><span class="p">.</span><span class="nx">smartscroll</span><span class="p">.</span><span class="nx">handler</span><span class="p">)},</span><span class="nx">teardown</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="nx">t</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">unbind</span><span class="p">(</span><span class="s2">&quot;scroll&quot;</span><span class="p">,</span><span class="nx">r</span><span class="p">.</span><span class="nx">special</span><span class="p">.</span><span class="nx">smartscroll</span><span class="p">.</span><span class="nx">handler</span><span class="p">)},</span><span class="nx">handler</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">n</span><span class="p">){</span><span class="kd">var</span> <span class="nx">r</span><span class="o">=</span><span class="k">this</span><span class="p">,</span><span class="nx">s</span><span class="o">=</span><span class="nx">arguments</span><span class="p">;</span><span class="nx">e</span><span class="p">.</span><span class="nx">type</span><span class="o">=</span><span class="s2">&quot;smartscroll&quot;</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">i</span><span class="p">){</span><span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">i</span><span class="p">)}</span><span class="nx">i</span><span class="o">=</span><span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="nx">t</span><span class="p">(</span><span class="nx">r</span><span class="p">).</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;smartscroll&quot;</span><span class="p">,</span><span class="nx">s</span><span class="p">)},</span><span class="nx">n</span><span class="o">===</span><span class="s2">&quot;execAsap&quot;</span><span class="o">?</span><span class="mi">0</span><span class="o">:</span><span class="mi">100</span><span class="p">)}};</span><span class="nx">t</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">smartscroll</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span><span class="k">return</span> <span class="nx">e</span><span class="o">?</span><span class="k">this</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="s2">&quot;smartscroll&quot;</span><span class="p">,</span><span class="nx">e</span><span class="p">)</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;smartscroll&quot;</span><span class="p">,[</span><span class="s2">&quot;execAsap&quot;</span><span class="p">])}})(</span><span class="nb">window</span><span class="p">,</span><span class="nx">jQuery</span><span class="p">);</span></div></pre></div></td>
         </tr>
       </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.04715s from github-fe125-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-df9e4beac80276ed3dfa56be0d97b536d0f5ee12.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-22af5724b6a68093dc4ea24d753f84320ccb5dd5.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

;