module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/F2E_week2/'  //Git Repo name
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
    }
}