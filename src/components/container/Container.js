import React from 'react';
import Article01 from './articles/Article01';
import Article02 from './articles/Article02';

export default function Container(){
    return(
        <div className="col-sm-8">
            <Article01/>
            <Article02/>
        </div>
    )
}