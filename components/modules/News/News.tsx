import React from 'react';
import { INews } from '../../../Interfaces';

interface IProps {
    news: INews[];
}

const News = (props: IProps) => {
    return (
        <div className="row">
            {props.news.map((item, index) => (
                <div key={index} className="col-md-6 col-12 mb-4">
                    <div className="card">
                        <div className="card-image">
                            {item.urlToImage !== ''
                                ? <img className="card-image-top" src={item.urlToImage} alt={item.title} />
                                : <p className="text-center my-5">Imagen no disponible</p>
                            }
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">{item.title}</h3>
                            <p className="card-text">{item.description}</p>
                            <div className="card-text">{item.source.name}</div>
                            <a href={item.url} className="btn btn-primary d-block">Leer noticia</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default News;
