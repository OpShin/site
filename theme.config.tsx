import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useTheme } from "next-themes";

const config: DocsThemeConfig = {
  // Ideally, we'd simply use a <picture> + <source media="(prefers-color-scheme: ...)"/>,
  // but next-themes which handles theme changes isn't handling those properly.
  //
  // I have no interest in fixing next-themes right now, so going the hacky way.
  logo: () => {
    const { resolvedTheme } = useTheme();
    return (
      <>
        <img
          style={{ height: "var(--nextra-navbar-height)" }}
          src={
            resolvedTheme === "light"
              ? "/logo-dark.png"
              : "/logo.png"
          }
        />
      </>
    );
  },
  head: (
    <>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="twitter:image" content="https://opshin.dev/open-graph.jpg" />
        <meta name="twitter:site:domain" content="opshin.dev" />
    </>
  ),
  project: {
    link: "https://github.com/opshin",
  },
  chat: {
    link: "https://discord.com/invite/umR3A2g4uw",
  },
  search: {
    placeholder: "Search the docs...",
    emptyResult: null,
    error: "",
    loading: null,
  },
  toc: {
    extraContent: <></>,
  },
  i18n: [
    {
      locale: "en",
      text: "English",
    },
  ],
  docsRepositoryBase: "https://github.com/opshin/site/blob/main",
  useNextSeoProps() {
    const { title } = useConfig();
    const description = "Cardano Smart Contracts in Python";
    return {
      titleTemplate: "OpShin | %s",
      description,
      canonical: "https://opshin.dev/",
      openGraph: {
        url: "https://opshin.dev/",
        description,
        images: [
          {
            url: "https://opshin.dev/open-graph.jpg",
            width: 800,
            height: 418,
            alt: "OpShin - Cardano Smart Contracts in Python",
            type: "image/jpg",
          },
        ],
      },
      siteName: "OpShin",
      twitter: {
        handle: "@OpShinDev",
        site: "https://opshin.dev",
        cardType: "summary_large_image",
      },
    };
  },
  footer: {
    component: (<>
      <footer>
        <aside>
          <img src="/typo.webp" />
          <p>Build without limits</p>
        </aside>
        <nav>
          <h2><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> Quick Links</h2>
          <ul>
            <li><a href="https://github.com/OpShin/opshin-starter-kit">Starter Kit</a></li>
            <li><a href="https://github.com/OpShin/opshin-pioneer-program">Pioneer Program</a></li>
            <li><a href="https://opshin.opshin.dev/opshin/">Docs</a></li>
          </ul>
        </nav>
        <nav>
          <h2><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>Community</h2>
          <ul>
            <li><a href="https://discord.com/invite/umR3A2g4uw">Discord</a></li>
            <li><a href="https://twitter.com/OpShinDev">Twitter</a></li>
            <li><a href="https://github.com/OpShin">GitHub</a></li>
            <li><a href="https://patreon.com/OpShin">Patreon</a></li>
          </ul>
        </nav>
        <nav>
          <h2><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>Partners</h2>
          <ul>
            <li><a href="https://emurgo.io/">Emurgo</a></li>
            <li><a href="https://inversion.dev">Inversion.Dev</a></li>
            <li><a href="https://muesliswap.com">MuesliSwap</a></li>
          </ul>
        </nav>
      </footer>
      <style jsx>{`
        footer {
          background: #0067b4;
          color: #FFFFFF;
          display: flex;
          justify-content: space-between;
          margin: 0 auto;
          padding: 2rem 12.5vw;
        }
        footer aside {
          display: flex;
          flex-direction: column;
          font-variant: small-caps;
          font-size: 0.75em;
        }
        footer aside p {
          padding: 0 0.15rem;
        }
        footer aside img {
          width: 4rem;
          height: auto;
        }
        @media(max-width: 1000px) {
          footer {
            padding: 2rem 5%;
          }
        }
        @media(max-width: 600px) {
          footer {
            flex-direction: column;
          }
          footer aside + nav,
          footer nav + nav {
            margin-top: 1rem;
          }
        }
        footer nav {
          display: flex;
          flex-direction: column;
        }
        footer nav h2 {
          font-weight: bold;
          display: flex;
          margin-bottom: 0.35rem;
        }
        footer nav h2 > svg {
          width: 1em;
          height: auto;
          margin-right: 0.5rem;
        }
        footer nav ul {
          font-size: 0.9em;
        }
      `}</style>
    </>)
  }
};

export default config;
