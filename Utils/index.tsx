import { INews } from '../Interfaces';
import axios from 'axios';
import { Constants } from '../Constants';

export default class Utils {

    public static getNews = () => {
        return new Promise<INews[]>((resolve) => {
            axios.get(Constants.NEWS_API)
                .then((response: any) => {
                    resolve(response.data.articles)
                }).catch(() => resolve([]));
        })
    }

}
