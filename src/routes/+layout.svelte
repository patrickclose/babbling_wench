<script>
    // layout script
</script>

<main>
  <slot />
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');

    :global(:root) {
        font-size: 16px;
        font-family: 'Open Sans';
        --text-primary: #b6b6b6;
        --text-secondary: #ececec;
        --bg-primary: #23232e;
        --bg-secondary: #141418;
        --transition-speed: 600ms;
    }
    
    :global(body) {
        color: black;
        background-color: white;
        margin: 0;
        padding: 0;
    }

    :global(.page-heading) {
        background: -webkit-linear-gradient(92deg, #ffd700, #f50a0a);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    :global(body::-webkit-scrollbar) {
        width: 0.25rem;
    }
    
    :global(body::-webkit-scrollbar-track) {
        background: #1e1e24;
    }
    
    :global(body::-webkit-scrollbar-thumb) {
        background: #f50a0a;
    }
    
    :global(.main-container) {
        margin-left: 5em;
        padding: 1em;
    }

    /* Small screens */
    @media only screen and (max-width: 600px) {
        :global(.main-container) {
            margin-left: 0em;
        }
    }

    
    :global(.navbar) {
        position: fixed;
        z-index: 10;
        background-color: var(--bg-primary);
        transition: width 600ms ease;
        overflow: scroll;
    }
    
    :global(.navbar-nav) {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        overflow-y: hidden;
    }
    
    :global(.nav-item) {
        width: 100%;
    }
    
    :global(.nav-link) {
        display: flex;
        align-items: center;
        height: 5rem;
        color: var(--text-primary);
        text-decoration: none;
        filter: grayscale(100%) opacity(0.7);
        transition: var(--transition-speed);
    }
    
    :global(.nav-link:hover) {
        filter: grayscale(0%) opacity(1);
        background: var(--bg-secondary);
        color: var(--text-secondary);
    }

    
    :global(.link-text) {
        display: none;
        margin-left: 1rem;
    }
    
    :global(.nav-link svg) {
        width: 2rem;
        min-width: 2rem;
        margin: 0 1.5rem;
    }
    
    :global(.fa-primary) {
        color: #ffd700;
    }
    
    :global(.fa-secondary) {
        color: #f50a0a;
    }
    
    :global(.fa-primary),
    :global(.fa-secondary) {
        transition: var(--transition-speed);
    }
    
    :global(.logo) {
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 1rem;
        text-align: center;
        color: var(--text-secondary);
        background: var(--bg-secondary);
        font-size: 1.5rem;
        letter-spacing: 0.3ch;
        width: 100%;
    }
    
    :global(.logo svg) {
        transform: rotate(0deg);
        transition: var(--transition-speed);
    }
    
    :global(.logo-text) {
        display: inline;
        position: absolute;
        left: -999px;
        transition: var(--transition-speed);
        letter-spacing: 0.25px;
        font-size: large;
    }
    
    :global(.navbar:hover .logo svg) {
        transform: rotate(-180deg);
    }
    
    /* Small screens */
    @media only screen and (max-width: 600px) {
        :global(.navbar) {
            bottom: 0;
            width: 100vw;
            height: 5rem;
        }
    
        :global(.logo) {
            display: none;
        }
    
        :global(.navbar-nav) {
            flex-direction: row;
        }
    
        :global(.nav-link) {
            justify-content: center;
        }
    
        :global(main) {
            margin: 0;
        }
    }
    
    /* Large screens */
    @media only screen and (min-width: 600px) {
        :global(.navbar) {
            top: 0;
            width: 5rem;
            height: 100vh;
        }
    
        :global(.navbar:hover) {
            width: 16rem;
        }
    
        :global(.navbar:hover .link-text) {
            display: inline;
        }
    
        :global(.navbar:hover .logo svg) {
            margin-left: 11rem;
        }
    
        :global(.navbar:hover .logo-text) {
            left: 0px;
        }
    }
    
    :global(.dark) {
        --text-primary: #b6b6b6;
        --text-secondary: #ececec;
        --bg-primary: #23232e;
        --bg-secondary: #141418;
    }
    
    :global(.light) {
        --text-primary: #1f1f1f;
        --text-secondary: #000000;
        --bg-primary: #ffffff;
        --bg-secondary: #e4e4e4;
    }
    
    :global(.solar) {
        --text-primary: #576e75;
        --text-secondary: #35535c;
        --bg-primary: #fffcec;
        --bg-secondary: #fff3b1;
    }
    
    :global(.theme-icon) {
        display: none;
    }
    
    :global(.dark #darkIcon) {
        display: block;
    }
    
    :global(.light #lightIcon) {
        display: block;
    }
    
    :global(.solar #solarIcon) {
        display: block;
    }

    :global(body) {
        padding: 0;
        margin: 0;
        background-color: #17141d;
        color: white;
        font-family: 'Special Elite', monospace;
        line-height: 2;
    }

    :global(a) {
        text-decoration: none;
    }

    :global(.card-list) {
        display: flex;
        padding: 3rem;
        overflow-x: scroll;
    }

    :global(.card-list::-webkit-scrollbar) {
        width: 10px;
        height: 10px;
    }

    :global(.card-list::-webkit-scrollbar-thumb) {
        background: #201c29;
        border-radius: 10px;
        box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25), inset -2px -2px 2px rgba(0, 0, 0, 0.25);
    }

    :global(.card-list::-webkit-scrollbar-track) {
        background: linear-gradient(90deg, #201c29, #201c29 1px, #17141d 0, #17141d);
    }

    :global(.card) {
        height: 350px;
        width: 400px;
        min-width: 250px;
        padding: 1.5rem;
        border-radius: 16px;
        background: #17141d;
        box-shadow: -1rem 0 3rem #000;
        display: flex;
        flex-direction: column;
        transition: 0.2s;
        margin: 0;
        scroll-snap-align: start;
        clear: both;
        position: relative;
    }

    :global(.card:focus-within~.card),
    :global(.card:hover~.card) {
        transform: translateX(130px);
    }

    :global(.card:hover) {
        transform: translateY(-1rem);
    }

    :global(.card:not(:first-child)) {
        margin-left: -130px;
    }

    :global(.card-header) {
        margin-bottom: auto;
    }

    :global(.card-header p) {
        font-size: 14px;
        margin: 0 0 1rem;
        color: #7a7a8c;
    }

    :global(.card-header h2) {
        font-size: 20px;
        margin: 0.25rem 0 auto;
        text-decoration: none;
        color: inherit;
        border: 0;
        display: inline-block;
        cursor: pointer;
    }

    :global(.card-header h2:hover) {
        background: linear-gradient(90deg, #ffd700, #f50a0a, #0028ff);
        text-shadow: none;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
    }

    :global(.card-category) {
        margin: 3rem 0 0;
        display: grid;
        grid-template-columns: 75px 1fr;
        align-items: center;
        position: relative;
    }

    :global(.author-avatar) {
        grid-area: auto;
        align-self: start;
        position: relative;
        box-sizing: border-box;
    }

    :global(.author-avatar img) {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        filter: grayscale(100%);
        display: block;
        overflow: hidden;
        margin: 16px 10px;
    }

    :global(.post-name) {
        grid-area: auto;
        box-sizing: border-box;
    }

    :global(.post-category) {
        font-style: normal;
        font-weight: 700;
        color: #7a7a8c;
    }

    :global(.half-circle) {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 60px;
        height: 48px;
        fill: none;
        stroke: #f50a0a;
        stroke-width: 8;
        stroke-linecap: round;
        pointer-events: none;
    }

    :global(.tags) {
        margin: 1rem 0 2rem;
        padding: 0.5rem 0 1rem;
        line-height: 2;
        margin-bottom: 0;
    }

    :global(.tags a) {
        font-style: normal;
        font-weight: 700;
        font-size: 0.5rem;
        color: #7a7a8c;
        text-transform: uppercase;
        font-size: 0.66rem;
        border: 3px solid #28242f;
        border-radius: 2rem;
        padding: 0.2rem 0.85rem 0.25rem;
        position: relative;
    }

    :global(.tags a:hover) {
        background: linear-gradient(90deg, #ffd700, #f50a0a);
        text-shadow: none;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        border-color: white;
    }
</style>
