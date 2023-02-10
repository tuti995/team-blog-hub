import { Member } from "@src/types";

export const members: Member[] = [
  {
    id: "catnose",
    name: "CatNose",
    role: "CTO",
    bio:
      "デザインが好きなプログラマー。開発者向けの情報共有プラットフォームzenn.devを開発しています。",
    sources: [
      "https://zenn.dev/catnose99/feed",
      "https://catnose.medium.com/feed",
    ],
    includeUrlRegex: "medium.com|zenn.dev",
    twitterUsername: "catnose99",
    githubUsername: "catnose99",
    websiteUrl: "https://catnose99.com",
  },
  {
    id: "john_doe",
    name: "Zenn",
    role: "SRE",
    bio: "Site Reliability Engineer.",
    sources: ["https://zenn.dev/feed"],
    excludeUrlRegex: "n3a59e3cdd820",
    twitterUsername: "catnose99",
  },
  {
    id: "amanda",
    name: "Qiita",
    role: "Frontend dev",
    bio: "Frontend developer,",
    sources: ["https://qiita.com/popular-items/feed"],
    twitterUsername: "catnose99",
  },
  {
    id: "takada_junji",
    name: "企業テックブログ",
    role: "Designer",
    bio: "Designing all of the apps in Foo company.",
    sources: ["https://yamadashy.github.io/tech-blog-rss-feed/feeds/rss.xml"],
  },
  {
    id: "ota_naoko",
    name: "コリス",
    role: "Researcher",
    bio: "Some texts here",
    sources: ["http://feeds.feedburner.com/coliss"],
  },
  {
    id: "alexandria",
    name: "CodeZine",
    role: "Tech Lead",
    bio: "IT professional with 3 years of experience",
    sources: ["https://codezine.jp/rss/new/20/index.xml"],
  },
];
