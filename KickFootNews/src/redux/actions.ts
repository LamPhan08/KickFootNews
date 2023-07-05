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


export const getMatches = (fixtureDate: string = '', setIsLoading: Function = () => {}) => async (dispatch: Function) => {
    try {
        setIsLoading(true);

        const res = await matchApi.get('fixtures', {params: {
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            date: fixtureDate,
        },});

        dispatch({
          type: MATCH,
          payload: res?.data?.response
        });

        // console.log(res.data.errors)
        setIsLoading(false);

      
    } catch (error) {
      console.error(error)
    }
  };

export const EVENT = 'EVENT';


export const getEvents = (fixtureId: number, setIsLoading: Function) => async (dispatch: Function) => {
    try {
        setIsLoading(true);
        const res = await matchApi.get('fixtures/events', {params: {
            fixture: fixtureId
        },});

        dispatch({
          type: EVENT,
          payload: res?.data?.response
        });

        // console.log(res.data.errors)
        setIsLoading(false);
      
    } catch (error) {
      console.error(error)
    }
};

export const LINEUPS = 'LINEUPS';


export const getLineups = (fixtureId: number, setIsLoading: Function) => async (dispatch: Function) => {
    try {
        setIsLoading(true);
        const res = await matchApi.get('fixtures/lineups', {params: {
            fixture: fixtureId
        },});

        dispatch({
          type: LINEUPS,
          payload: res?.data?.response
        });

        // console.log(res.data.response)

        setIsLoading(false);
    } catch (error) {
      console.error(error)
    }
};

export const STATISTICS = 'STATISTICS';


export const getStatistics = (fixtureId: number, setIsLoading: Function) => async (dispatch: Function) => {
    try {
        setIsLoading(true);
        const res = await matchApi.get('fixtures/statistics', {params: {
            fixture: fixtureId
        },});

        dispatch({
          type: STATISTICS,
          payload: res?.data?.response
        });

        // console.log(res.data.response)
        setIsLoading(false);
      
    } catch (error) {
      console.error(error)
    }
};
