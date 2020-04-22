import axios from 'axios';
import gapi from 'gapi/gapi';
import { GqlString } from 'types/gqlTypes';
import { YoutubeVideoData } from 'types/youtubeTypes';
import { PromiseWrapper, promiseWrapper } from './promiseWrapper';

export interface Resource<T> { // ToDo: remove
  [key: string]: PromiseWrapper<T>;
}

// Uses axios to fetch data from our graphql endoint via a graphql query
const get = async (gqlString: GqlString): Promise<any> => {
  try {
    const body = JSON.stringify({ query: gqlString.loc.source.body });
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await axios.post(process.env.URI, body, config);
    return response.data.data;
  } catch (error) {
    throw Error(error);
  }
};

// Uses axios to fetch data from our grqphql endpoint via a graphql query and returns it in a
// promiseWrapper to be used in concurrent mode.
const query = (gqlString: GqlString): Resource<any> => {
  const promise = get(gqlString);
  return {
    data: promiseWrapper(promise),
  };
};

const getYoutubeVideoData = (videoId: string): Resource<YoutubeVideoData> => {
  const youtubeVideoDataPromise = gapi.getYoutubeVideoData(videoId);
  return {
    youtubeVideoData: promiseWrapper(youtubeVideoDataPromise),
  };
};

export default {
  getYoutubeVideoData,
  query,
};
