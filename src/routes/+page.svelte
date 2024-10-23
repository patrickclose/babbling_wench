<!-- +page.svelte -->
<script>
    // Add any necessary Svelte logic here, if needed
  </script>
  
  <nav class="navbar">
    <ul class="navbar-nav">
      <li class="logo">
        <a href="/" class="nav-link">
          <span class="link-text logo-text">Babbling Wench</span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
          >
            <g class="fa-group">
              <path
                fill="currentColor"
                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                class="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                class="fa-primary"
              ></path>
            </g>
          </svg>
        </a>
      </li>
      <li class="nav-item">
        <a href="/aesthetics" class="nav-link">
          <!-- Icon and link for Aesthetics -->
          <span class="link-text">Aesthetics</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="/lifestyle" class="nav-link">
          <!-- Icon and link for Lifestyle -->
          <span class="link-text">Lifestyle</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="/garbage" class="nav-link">
          <!-- Icon and link for Garbage -->
          <span class="link-text">Esoteric Garbage</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="/whatever" class="nav-link">
          <!-- Icon and link for Whatever -->
          <span class="link-text">Whatever</span>
        </a>
      </li>
    </ul>
  </nav>
  
  <main class="main-container">
    <h1 class="page-heading">Babbling Wench</h1>
  
    <p>Welcome to the dumpster fire where good taste goes to die, and your brain cells throw a riot.</p>
  
    <!-- Image gallery -->
    <div class="image-gallery">
      {#each Array(6) as _, index}
        <img src="/babbling-wench-preview-image.png" alt="Preview Image {index + 1}" width="15%" height="15%" />
      {/each}
    </div>
  
    <!-- Card Section -->
    <section class="card-list">
      {#each Array(6) as _, index}
        <article class="card">
          <header class="card-header">
            <p>Sep 11th 2020</p>
            <h2>Catchy Headline {index + 1}</h2>
          </header>
  
          <div class="card-category">
            <a class="author-avatar" href="#">
              <img src="avatar.png" alt="Avatar" />
            </a>
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>
  
            <div class="post-name">
              <div class="post-category">Post Category</div>
              Post Title
            </div>
          </div>
          <div class="tags">
            <a href="#">try</a>
            <a href="#">me</a>
          </div>
        </article>
      {/each}
    </section>
  </main>
  
  <style>
    /* Add relevant styles for +page.svelte here */
    .navbar { /* your navbar styles */ }
    .card-list { /* your card styles */ }
    /* other styles... */
  </style>
  