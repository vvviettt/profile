module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                main: '#ffb400',
                toggle: '#252525',
                dark: '#111111',
                lightBg: '#72b626',

                //textColor
                lightText: '#666666',
                blur: '#EEEEEE',
                title: 'hsla(0,0%,100%,.07)',
                lightTitle: 'rgba(30,37,48,.07)',
            },
            backgroundImage: {
                me: 'url(/src/assets/image/me.jpg)',
            },
            aspectRatio: {
                '7/10': '7/10',
            },
        },
        screens: {
            phone: { max: '639px' },

            tablet: { max: '1024px' },

            desktop: { max: '1280px' },
        },
    },
    plugins: [],
};
