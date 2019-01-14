const axios = require('axios');

module.exports = function (api) {
    api.loadSource(async store => {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');

        const contentType = store.addContentType({
            typeName: 'BlogPost',
            route: '/blog/:slug'
        });

        // console.log(data);

        for (const item of data) {
            let path = `/blog/${item.id}`;
            contentType.addNode({
                id: item.id,
                title: item.title,
                path,
                fields: {
                    body: item.body
                }
            })
        }
    });
}