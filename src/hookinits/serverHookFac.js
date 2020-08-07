export const serverHookFac = {
    async run(c)
    {
        function hook()
        {
            return {
                sayHelloAndBye()
                {
                    c.localAuthData.sayHello();
                    c.serverConnection.sayBye();
                },
                async itemsData()
                {
                    let testId = 0;
                    // Example data.
                    return [
                        {
                            id: (testId++).toString(),
                            title: "Hey",
                            body: "Haystack.",
                        },
                        {
                            id: (testId++).toString(),
                            title: "Sweet",
                            body: "Sweet house.",
                        },
                        {
                            id: (testId++).toString(),
                            title: "Jack",
                            body: "Hue Jackman.",
                        },
                    ]
                },
            };
        }
        return hook;
    }, 
    name: "serverConnection",
    dependencies: [], 
    contextDependencies: ["localAuthData", "serverConnection"], 
};