export default {
    name : 'product',
    title : 'Product',
    type : 'document',
    fields : [
        {
            name : 'image',
            title : 'Image',
            type : 'array',
            of : [{type : 'image'}],
            options : {
                hotshot: true
            }
        },
        {
            name : 'name',
            title : 'Title',
            type : 'string',
        },
        {
            name : 'slug',
            title : 'Slug',
             type : 'slug',
             options : [{
                source : 'name',
                maxLength : 90
             }]
        },
        {
            name : 'price',
            title : 'Price',
            type : 'number'
        },
        {
            name : 'details',
            title : 'Details',
            type : 'string'
        },
        {
            name : 'rating',
            title : 'Rating',
            type : 'number'
        }
    ]
}