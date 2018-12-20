import React from 'react';

interface IProps {
    bitcoin: any;
}

const Price = (props: IProps) => {
    const btc = props.bitcoin;

    return (
        <div className="card text-white bg-success mb-3">
            <div className="card-header">Precio del Bitcoin</div>
            <div className="card-body">
                <h4 className="card-title">Precio Actual: $ {btc.price.toFixed(2)}</h4>
                <div className="d-md-flex justify-content-between">
                    <p className="card-text">
                        <span className="font-weit-bold">Última Hora: </span>{btc.percent_change_1h} %
                    </p>
                    <p className="card-text">
                        <span className="font-weit-bold">Últimas 24 Horas: </span>{btc.percent_change_24h} %
                    </p>
                    <p className="card-text">
                        <span className="font-weit-bold">Últimos 7 Días: </span>{btc.percent_change_7d} %
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Price;
