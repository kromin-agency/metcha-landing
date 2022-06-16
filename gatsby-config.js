module.exports = {
    siteMetadata: {
        title: `Mechaversus`,
        description: `Mechaversus - deploy, battle, earn`,
        author: `@kromin`,
        siteUrl: `https://kromin.it/en/`,
    },
    plugins: [
        //enable only if it should be used
        /* {
             resolve: 'gatsby-plugin-robots-txt',
             options: {
                 host: 'https://kromin.it', //site url
                 sitemap: 'https://kromin.it/sitemap.xml', //sitemap path after build
                 env: {
                     development: {
                         policy: [{userAgent: '*', disallow: ['/']}]
                     },
                     production: {
                         policy: [{userAgent: '*', allow: '/'}]
                     }
                 }
             }
         },*/
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /assets/
                },
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Mechaversus`,
                short_name: `Mecha`,
                start_url: `/`,
                background_color: `#663399`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                // theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,

        /*{
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: "GTM-5CCN7S",
                // Include GTM in development.
                //
                // Defaults to false meaning GTM will only be loaded in production.
                includeInDevelopment: false,
                // datalayer to be set before GTM is loaded
                // should be an object or a function that is executed in the browser
                //
                // Defaults to null
                defaultDataLayer: {platform: "gatsby"},
                routeChangeEventName: "Navigate",
            },
        }*/
    ],
}
