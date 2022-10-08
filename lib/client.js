import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
export const client = sanityClient({
    projectId : '3sr8nakx',
    dataset : 'production',
    apiVersion : "2022-10-05",
    useCdn : true,
    token : process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true

});
const builder = imageUrlBuilder(client);
export const UrlFor = (source)=> builder.image(source)