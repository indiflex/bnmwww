import ky from 'ky';

export interface IOG {
  image: string;
  title: string;
  description?: string;
}

type OGS = {
  ogTitle?: string;
  ogImage?: { url: string };
  ogDescription?: string;
};

export const ogscrap = async (url: string) => {
  const ret: OGS = await ky(
    `http://localhost:4001/ogscrapper?url=${url}`
  ).json();

  return {
    title: ret.ogTitle,
    image: ret.ogImage?.url,
    description: ret.ogDescription,
  };
};

const regOg = /<meta property="og:(.*?)>/gi;
const regContent = /["|'](.*?)"/g;
const regQuoteReplacer = /^"(og:)?|"$/g;

export const scrap = async (url: string) => {
  const res = await ky(`https://proxy.cors.sh/${url}`).text();
  console.log('res>>>', res.match(regOg));
  const kvs = res.match(regOg);
  console.log(kvs);
  const kvs2 = kvs?.map((og) =>
    (og.match(regContent) || []).map((s) => s.replace(regQuoteReplacer, ''))
  );
  console.log(kvs2);

  // const kvs3: [string, string][] = [];

  return Object.fromEntries(kvs2 || []);
};
