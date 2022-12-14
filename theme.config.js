import { useRouter } from "next/router";

import {GLOBEM_logo} from "./public/images/GLOBEM_logo.png"

const Logo = ({ height }) => (
  <svg height={height} viewBox="0 0 307 70" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g>
  <path d="M120 3C104 3 91 16 91 32C91 48 104 61 120 61C136 61 149 48 149 32C149 19.8 141.3 8.8002 129.8 4.7002C126.65 3.5502 123.35 3 120 3ZM120 6C123 6 125.95 6.5 128.8 7.5C128.95 7.55 129.1 7.60039 129.2 7.65039L129.3 11.2998C129.3 12.6498 128.5 13.9002 127.25 14.4502C124.5 15.6502 121.75 15.0004 120.6 18.1504C119.65 20.5504 122.15 27 125.2 27C129.05 27 130.9 19.25 132.05 19.25C132.8 19.25 133.95 21.5996 135.3 23.3496C136.2 24.5496 137.6 25.2002 139.1 25.2002H141.65L145.3 26.0498C145.75 27.9998 146 30 146 32C146 46.35 134.35 58 120 58C117.95 58 115.95 57.7498 114.05 57.2998V53.9502L112.8 52.7002C111.55 51.4502 114.1 49.3502 114.8 46.7002C116.75 39.2002 110.25 38.9 110.05 37.25C109.85 35.4 112.25 33.9998 113.7 32.5498C115.15 31.0998 115.6 28.8498 114.85 27.5498C112.5 23.1998 106.8 25.4998 106.25 30.0498C105.95 32.7998 104.3 35.5998 102.9 37.0498C101.5 38.4498 98.75 37.7004 98 35.6504C97.15 33.3504 100.1 32.4998 99.6504 29.5498C99.5504 28.7498 98.7004 28.3502 97.6504 28.2002L94.2002 28.2998C96.0502 15.6998 106.9 6 120 6ZM137.241 34.9707C135.927 35.0422 134.093 35.6941 131.6 37.4004C129.7 38.7004 126.35 36 124.9 38C123.5 39.95 130.85 45.9 133.3 44.75C137.45 42.8 140.15 38.75 140.15 37.25C140.182 36.3438 139.432 34.8516 137.241 34.9707Z" fill="#729890"/>
  <path d="M156.677 7.12H175.507C180.221 7.12 183.954 8.07666 186.707 9.99C189.927 12.2767 191.537 15.5433 191.537 19.79C191.537 23.3367 190.394 26.3233 188.107 28.75C187.454 29.4967 186.637 30.1733 185.657 30.78C184.724 31.3867 183.651 31.97 182.437 32.53C187.244 33.3233 190.721 35.2133 192.867 38.2C194.501 40.4867 195.317 43.0533 195.317 45.9C195.317 50.52 193.567 54.37 190.067 57.45C186.707 60.4833 182.624 62 177.817 62H156.677V7.12ZM175.157 11.95H162.207V30.78H172.637C176.837 30.78 180.057 29.8467 182.297 27.98C184.537 26.0667 185.657 23.6167 185.657 20.63C185.657 18.2967 184.864 16.29 183.277 14.61C181.364 12.8367 178.657 11.95 175.157 11.95ZM174.177 35.61H162.207V57.17H175.507C179.521 57.17 182.811 56.1667 185.377 54.16C187.944 52.0133 189.227 49.2833 189.227 45.97C189.227 42.61 187.921 40.0433 185.307 38.27C182.741 36.4967 179.031 35.61 174.177 35.61ZM201.446 7.05H235.606V11.88H206.976V30.85H234.556V35.68H206.976V57.17H235.816V62H201.446V7.05ZM242.053 62V7.12H249.263L270.543 52.55L292.523 7.12H299.313V62H294.343V14.33L271.733 62H269.353L247.093 14.4V62H242.053Z" fill="#6A89AC"/>
  <path d="M45.3636 11.32V18.6C42.7969 16.3133 40.3236 14.61 37.9436 13.49C35.1436 12.09 32.2736 11.39 29.3336 11.39C23.4069 11.39 18.4836 13.84 14.5636 18.74C10.8302 23.22 8.96355 28.5867 8.96355 34.84C8.96355 41.1867 10.9702 46.6933 14.9836 51.36C18.7636 55.6067 23.0336 57.73 27.7936 57.73C31.5736 57.73 34.7469 56.5167 37.3136 54.09C40.1136 51.43 41.5136 47.93 41.5136 43.59V39.39H23.4536V34.56H47.1136V62H42.2836L41.5136 55.35C39.8802 57.4033 38.1302 59.0133 36.2636 60.18C33.3702 62 30.1969 62.91 26.7436 62.91C20.4436 62.91 14.9602 60.2267 10.2936 54.86C5.48689 49.4467 3.08355 42.82 3.08355 34.98C3.08355 26.9067 5.58022 20.0933 10.5736 14.54C15.5669 8.98666 21.7969 6.21 29.2636 6.21C32.5302 6.21 35.7269 6.81666 38.8536 8.03C40.4869 8.63667 42.6569 9.73333 45.3636 11.32ZM55.8734 7.12H61.4034V57.17H88.4934V62H55.8734V7.12Z" fill="#6A89AC"/>
  </g>
  </svg>
);

const TITLE_WITH_TRANSLATIONS = {
  "en-US": "GLOBEM",
};

const FEEDBACK_LINK_WITH_TRANSLATIONS = {
  "en-US": "Question? Please open an issue ???",
};

export default {
  projectLink: "https://github.com/UW-EXP/GLOBEM",
  docsRepositoryBase: "https://github.com/UW-EXP/GLOBEM",
  titleSuffix: "",
  search: true,
  unstable_flexsearch: true,
  floatTOC: true,
  feedbackLink: () => {
    const { locale } = useRouter();
    return (
      FEEDBACK_LINK_WITH_TRANSLATIONS["en-US"]
    );
  },
  feedbackLabels: "feedback",
  logo: () => {
    const { locale } = useRouter();
    return (
      <>
        <Logo height={20} />
        <span
          className="mx-2 font-extrabold hidden md:inline select-none"
          title={(TITLE_WITH_TRANSLATIONS["en-US"] || "")}
        >
        </span>
      </>
    );
  },
  head: ({ title, meta }) => {
    const { route } = useRouter();

    const ogImage =
      meta.image || Logo;

    return (
      <>
        {/* Favicons, meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={
            meta.description ||
            "Multi-year mobile sensing datasets (~500 users) and open-source platform for cross-dataset generalization research in longitudinal behavior modeling."
          }
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GLOBEM: Generalization of LOngitudinal BEhavior Modeling" />
        <meta name="twitter:site" content="@Orson_Xu" />
        <meta name="twitter:image" content="https://the-globem.github.io/images/GLOBEM_background.png" />
        <meta name="twitter:image:alt" content="The Logo of GLOBEM" />
        <meta
          name="twitter:description"
          content="Multi-year mobile sensing datasets (~500 users) and open-source platform for cross-dataset generalization research in longitudinal behavior modeling."   
        />
        <meta
          property="og:title"
          content={
            title ? title : "GLOBEM: Generalization of LOngitudinal BEhavior Modeling"
          }
        />
        <meta
          property="og:description"
          content={
            meta.description ||
            "Multi-year mobile sensing datasets (~500 users) and open-source platform for cross-dataset generalization research in longitudinal behavior modeling."
          }
        />
        <meta property="og:url" content="https://the-globem.github.io" />
        <meta property="og:image" content="https://the-globem.github.io/images/GLOBEM_background.png" />
        <meta name="apple-mobile-web-app-title" content="GLOBEM" />
      </>
    );
  },
  footerEditLink: ({ locale }) => {
        return "Explore code on GitHub ???";
  },
  footerText: ({ locale }) => {
    return (<div>
      <a href="https://github.com/UW-EXP">UW-EXP</a> at University of Washington <br/>
      <sup>Website template is based on <a href="https://github.com/vercel/swr-site">SWR</a>.</sup>
      </div>)
  }
};
