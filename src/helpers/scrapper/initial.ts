import { request } from '..';
import cheerio, { CheerioAPI } from 'cheerio';

export const pureResponse = async (url: string): Promise<string> => {
  try {
    const response = await request({ url });

    return response;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const createScrapperInitialInstance = (url: string): CheerioAPI | null => {
  if (!url) return null;

  return cheerio.load(url);
};
