import axios from 'axios';

import Layout from '../components/Layout';
import { Constants } from '../Constants';

const Index = (props: any) => (
    <Layout>
        {console.log(props)}
        <div className="row">
            <div className="col-12">
                <h2>Precio del Bitcoin</h2>
            </div>

            <div className="col-md-8">
                <h2>Noticias sobre Bitcoin</h2>
            </div>

            <div className="col-md-4">
                <h2>Próximos Eventos Bitcoin</h2>
            </div>
        </div>
    </Layout>
);

Index.getInitialProps = async () => {
    const response = await axios.get(Constants.COINMARKET_API)

    return {
        bitcoin: response.data.data.quotes.USD
    }
}

export default Index;
