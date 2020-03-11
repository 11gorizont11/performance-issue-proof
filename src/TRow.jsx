import React from 'react';
import PriceCell from './PriceCell';

const TRow = ({tld}) => {
    return ( <tr>
        <td>{tld.Tld}</td>
        {['Register', 'Renew', 'Transfer'].map((priceType, idx) => <td key={idx}> <PriceCell price={tld[priceType]} currency="USD"/></td>)}
    </tr>);
}

export default TRow;