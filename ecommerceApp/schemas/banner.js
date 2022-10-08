export default {
    name : 'banner',
    title : '   Banner',
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
            name : 'buttonText',
            title : 'ButtonText',
            type : 'string',

        },
        {
            name : 'product',
            title : 'Product',
             type : 'string',
             options : [{
                source : 'name',
                maxLength : 90
             }]
        },
        {
            name : 'decs',
            title : 'Decs',
            type : 'string'
        },
        {
            name : 'smallText',
            title : 'SmallText',
            type : 'string'
        },
        {
            name : 'largeText1',
            title : 'LargeText1',
            type : 'string'
        },
        {
            name : 'largeText2',
            title : 'LargeText2',
            type : 'string'
        }
    ]
}