const env = {
    info: {
        name: "Hydro",
        public: "https://danny.works",
        api: "https://api.danny.works",
    },
    nav: {
        routes: [
            { path: '/', title: 'Home' },
            { path: '/about', title: 'About' },
            { path: '/portfolio', title: 'Portfolio' },
        ],
    },
    discord: {
        discordColourMap: {
            online: {
                default: "text-green-300",
                hover: "online-hover"
            },
            idle: {
                default: "text-yellow-300",
                hover: "idle-hover"
            },
            dnd: {
                default: "text-red-400",
                hover: "dnd-hover"
            }
        },
        discordStatusFriendlyMap: {
            online: "online",
            idle: "idle",
            dnd: "in Do Not Disturb mode",
            offline: "offline"
        },
    },
};

export default env;