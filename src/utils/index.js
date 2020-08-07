import React from "react";

export function stateful(comp, logic)
{
    function newComp(props)
    {
        const newProps = logic(props);
        return React.createElement(comp, newProps, newProps.children);
    }
    return newComp;
}

export function initReactContext(contexts, hooks)
{
    function wrapper(mostChild)
    {
        function reducer(accumComponent, {context, hook})
        {
            function newComp(props)
            {
                const hookValue = hook();
                return React.createElement(
                    context.Provider, 
                    {value: hookValue}, 
                    React.createElement(
                        accumComponent, 
                        props
                    )
                );
            }
            return newComp;
        }
        const zipped = contexts.map(
            (context, index)=>({
                context,
                hook: hooks[index],
            })
        );
        return zipped.reduce(reducer, mostChild);
    }
    return wrapper;
}

export async function initContext(contextInitializers)
{
    // Accumulate the context.
    let c = {};
    for ( let i = 0; i < contextInitializers.length; ++i )
    {
        const {run, name, dependencies, isYahoo} = contextInitializers[i];
        await Promise.resolve(run(c));
    }
    return c;
}

export async function initHooks(effectfulContext, hookFacs)
{
    return await Promise.all(hookFacs.map(({run, contextDependencies, dependencies, name})=>run(effectfulContext)));
}

export function contextFromHookFac(hookFac)
{
    return hookFac.reactContext;
}
