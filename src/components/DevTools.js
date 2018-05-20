import React from 'react';

import { createDevTools } from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor';

import FilterableLogMonitor from 'redux-devtools-filterable-log-monitor'

// "redux-devtools-filterable-log-monitor": "^0.6.8",

const DevTools = (
    process.env.NODE_ENV==='production'
        ? () => null
        : createDevTools(
            <DockMonitor
                toggleVisibilityKey='ctrl-h'
                changePositionKey='ctrl-q'
                defaultIsVisible={false}
            >
                <FilterableLogMonitor theme='tube' />

            </DockMonitor>
        )
);

export default DevTools;