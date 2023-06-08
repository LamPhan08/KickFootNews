export const GET_NEWS_FEED = 'GET_NEWS_FEED';
import { apiClient, matchApi } from "../api";
import { NewsCategory } from "../constants";

export const getNewsFeed = (setIsLoading: Function, category: String = NewsCategory.business) => async (dispatch: Function) => {
    try {
        setIsLoading(true);
        const res = await apiClient.get('everything?domains=skysports.com&sortBy=publishedAt');


        if (res.status === 200) {
            dispatch ({
                type: GET_NEWS_FEED, 
                payload: res?.data?.articles,
            });
        }
        else {
            console.warn('Something went wrong');
        }

        setIsLoading(false);

    }
    catch (error) {
        console.error(error);
    }
};

export const searchNews = (searchTerm: string = '', setIsLoading: Function = () => {}) => async (dispatch: Function) => {
    try {
        setIsLoading(true);

        const res = await apiClient.get('everything?domains=skysports.com&sortBy=publishedAt&q=' + searchTerm);

        
        if (res.status === 200) {
            dispatch ({
                type: SEARCH_NEWS,
                payload: res?.data?.articles,
            });
        }
        else {
            console.warn('Something went wrong');
        }
        setIsLoading(false);

    }
    catch (error) {
        console.error(error);
    }
}
export const SEARCH_NEWS = 'SEARCH_NEWS';


export const resetSearchResults = () => (dispatch: Function) => {
    dispatch ({
        type: RESET_SEARCH_RESULTS,
    })
}
export const RESET_SEARCH_RESULTS = 'RESET_SEARCH_RESULTS';

export const MATCH = 'MATCH';


export const getPremierMatch = (fixtureDate: String = '') => async (dispatch: Function, ) => {
    try {
        const res = await matchApi.get('fixtures', {params: {
            date: '2022-05-28',
            league: '39',
            season: '2022'
        }});

      if (res.status === 200) {
        dispatch({
          type: MATCH,
          payload: res.data.response
        });

        console.log(res.data)
      } else {
        console.warn('Something went wrong');
      }
    } catch (error) {
      console.error(error);
    }
  };
