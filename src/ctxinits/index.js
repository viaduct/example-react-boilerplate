export const initLocalAuthData = {
    async run(c)
    {
        c.localAuthData = {
            sayHello(){console.log("Go home!");},
        };
    },
    name: "localAuthData",
    dependencies: [],
    isYahoo: false,
};

export const initServerConnection = {
    async run(c)
    {
        c.serverConnection = {
            sayBye(){console.log("(Spitting.)");},
        };
    },
    name: "serverConnection",
    dependencies: ["localAuthData"],
    isYahoo: false,
};
