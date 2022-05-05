import React from 'react';

const Novedaditem = (props) => {
    const {title, subtitle, body, imagen } = props; //No son los mismos campos de la base, por eso los ponemos en inlges para distinguirlos

    return (
        <div className='novedades'>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <img src={imagen}/>
        <div dangerouslySetInnerHTML={{ __html: body}}></div>
        <hr />

        </div>
    );

}

export default Novedaditem;