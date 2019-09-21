import axios from 'axios';

import Layout from '../components/Layout';
import { Price, News } from '../components/modules';
import { Constants } from '../Constants';
import { INews } from '../Interfaces';
import Utils from '../Utils';

interface IProps {
    bitcoin: any;
    news: INews[];
}

const Index = (props: IProps) => (
    <Layout>
        <div className="row">
            <div className="col-12">
                <h2>Precio del Bitcoin</h2>
                <Price bitcoin={props.bitcoin} />
            </div>

            <div className="col-md-8">
                <h2>Noticias sobre Bitcoin</h2>
                <News news={props.news} />
            </div>

            <div className="col-md-4">
                <h2>Próximos Eventos Bitcoin</h2>
            </div>
        </div>
    </Layout>
);

Index.getInitialProps = async () => {
    console.log(process.env);
    const response = await axios.get(Constants.COINMARKET_API)
    const news = await Utils.getNews();

    return {
        bitcoin: response.data.data.quotes.USD,
        news
    }
}

export default Index;
