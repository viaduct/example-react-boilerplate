import React from "react";
import ReactDom from "react-dom";

import {App} from "src/dumbs";
import {useAppLogic} from "src/logics";

import {
    stateful,

    initContext,
    initHooks,
    initReactContext,
    contextFromHookFac,
} from "src/utils";
import {
    initLocalAuthData, 
    initServerConnection,
} from "src/ctxinits";
import {
    serverHookFac,
} from "src/hookinits";
import * as ReactContexts from "src/reactctxts";

async function main()
{
    // Init context.
    const effectfulContext = await initContext([
        initLocalAuthData,
        initServerConnection,
    ]);

    // Create global hooks.
    const hookFacs = [
        {...serverHookFac, reactContext: ReactContexts.Server},
    ];
    const hooks = await initHooks(effectfulContext, hookFacs);
    
    // Wrap global hooks as contexts, so that they are accessable by React context.
    const reactContextful = initReactContext(
        hookFacs.map(contextFromHookFac),
        hooks,
    );

    ReactDom.render(
        React.createElement(
            reactContextful(
                stateful(App, useAppLogic)
            )
        ),
        document.getElementById("root"),
    );
}
main();


