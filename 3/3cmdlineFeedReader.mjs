import { getLinks, saveLinks } from './feed-manager.mjs';

const feeds = await getLinks();

feeds.push('https://www.reddit.com');

await saveLinks(feeds);