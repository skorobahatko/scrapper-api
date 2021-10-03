import { request } from '..';

export const initialScrapperProcess = async (url: string, selectors: string[]): Promise<any[]> => {
  try {
    const response = await request({ url });

    return response;
  } catch (err) {
    console.log(err);
  }
};
