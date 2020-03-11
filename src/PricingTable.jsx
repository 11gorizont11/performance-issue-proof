import React from 'react';
import TRow from './TRow';
import {MOCKED_DATA_TOP_PRICES, MOCKED_DATA_OTHER_PRICES} from "./mockedData";

const PricingTable = () => {
    return (<table>
        <thead>
            <tr>
                <td>
                   Tld Name
                </td>
                <td>
                    Register
                </td>
                <td>
                    Renew
                </td>
                <td>
                    Transfer
                </td>
            </tr>
        </thead>
        <tbody>
            {[...MOCKED_DATA_TOP_PRICES, ...MOCKED_DATA_OTHER_PRICES].map((item, idx)=> <TRow tld={{...item}} key={idx}/>)}
        </tbody>
    </table>);
}

export default PricingTable;