import axios from 'axios';

export const request = async ({
  url,
  method = 'get',
  params,
  headers,
}: {
  url: string;
  method?: 'get' | 'post';
  params?: { [key: string]: string };
  headers?: { [key: string]: string };
}) => {
  const response = await axios.request({
    url,
    method,
    params,
    headers,
  });

  return response.data;
};
