import React from 'react';
import {FormattedNumber} from 'react-intl';

const PriceCell = ({price, currency}) => {
    if (!price) return null;
    const hasDiscount = price.Price < price.RegularPrice;
    return (hasDiscount ? <DiscountPrice Price={price.Price} RegularPrice={price.RegularPrice} currency={currency}/> : <FormattedNumber style="decimal" currency={currency} value={price.Price} minimumIntegerDigits={1} minimumFractionDigits={2} maximumFractionDigits={2}/> );
}

const DiscountPrice = ({Price, RegularPrice, currency}) => <>
    <span style={{color: 'red'}}><FormattedNumber style="decimal" currency={currency} value={Price} minimumIntegerDigits={1} minimumFractionDigits={2} maximumFractionDigits={2}/></span><br/>
    <s><FormattedNumber style="decimal" currency={currency} value={RegularPrice} minimumIntegerDigits={1} minimumFractionDigits={2} maximumFractionDigits={2}/></s>
</>


export default PriceCell;