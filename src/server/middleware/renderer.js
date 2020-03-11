import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {IntlProvider} from 'react-intl';
import App from '../../App';

const path = require("path");
const fs = require("fs");

export default (req, res, next) => {
    const startTime = new Date().getTime();
    // point to the html file created by CRA's build tool
    const filePath = path.resolve(__dirname, '..', '..', '..', 'build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end()
        }

        // render the app as a string
        const html = ReactDOMServer.renderToString(<IntlProvider locale="en"><App /></IntlProvider>);
        logEndTime(startTime);
        // inject the rendered app into our html and send it
        return res.send(
            htmlData.replace(
                '<div id="root"></div>',
                `<div id="root">${html}</div>`
            )
        );
    });
}

const logEndTime = (startTime, endTime = new Date().getTime()) => {
    console.log('Fragment render time ', endTime - startTime, 'ms');
}