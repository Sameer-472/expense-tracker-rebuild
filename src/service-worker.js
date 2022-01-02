const swDev = () => {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker
                .register('/sw.js')
                .then((registration) => {
                    // Registration was successful
                    console.log('service worker registrartion successful ', registration);
                })
                .catch((err) => {
                    // Registration error
                    console.log('service worker not registered ', err);
                });
        });
    }
};

export default swDev