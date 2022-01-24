module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/test0124/'  //Git Repo name
        : '/',
    css: {
        loaderOptions: {
            scss: {
                additionalData: `
                    @import "@/assets/reset.scss";
                    @import "@/assets/_variables.scss";
                    @import "@/assets/main.scss";
                    @import "@/assets/base.scss";
                    
                `
            }
        }
    },
    devServer: {
        proxy: 'http://localhost:49000/',  //API host
    }
}