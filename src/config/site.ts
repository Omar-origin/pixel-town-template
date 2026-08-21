export const siteConfig = {
  resident: {
    name: "小镇居民",
    role: "独立创作者",
    plot: {
      town: "像素小镇",
      number: "07",
      coordinates: "X07, Y16",
      type: "居民地块",
      phase: "建造中",
    },
    status: "正在建造一间属于自己的小屋",
    introduction:
      "这里记录我正在做的项目、最近学到的事情，以及想与邻居分享的生活碎片。",
  },
  navigation: [
    { label: "首页", href: "/" },
    { label: "文章", href: "/#posts" },
    { label: "建站指南", href: "/guide/" },
  ],
  links: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "返回像素小镇", href: "https://example.com/" },
  ],
  seo: {
    title: "小镇居民的个人网站",
    description: "一座由 Markdown 和 Astro 搭建的像素小屋。",
  },
} as const;

export type SiteConfig = typeof siteConfig;
