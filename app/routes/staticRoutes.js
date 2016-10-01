module.exports = [
    {
        // Serve static content
        //The listing parameter lets us decide if we want to show directory structure or not in our urls
        method : 'GET',
        path   : '/public/{path*}',
        config : {
            handler : {
                directory : {
                    path    : 'public',
                    listing : false,
                    index   : true
                }
            }
        }
    },
    {
        // Serve static content
        //The listing parameter lets us decide if we want to show directory structure or not in our urls
        method : 'GET',
        path   : '/vendor/{path*}',
        config : {
            handler : {
                directory : {
                    path    : 'vendor',
                    listing : false,
                    index   : true
                }
            }
        }
    }
];