import { createClient } from 'microcms-js-sdk';

const serviceDomain = process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY;


if (!serviceDomain || !apiKey) {
  throw new Error('MICROCMS_SERVICE_DOMAIN or MICROCMS_API_KEY is not set');
}

export const client = createClient({
    serviceDomain: serviceDomain,
    apiKey: apiKey,
});

export const getBlogs = async () => {
    try {
        const data = await client.get({ endpoint: "blogs" });        
        return data.contents;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        throw error;
    }
};

export const getBlogDetail = async (id: string) => {
    try {
        const data = await client.get({ endpoint: `blogs/${id}` });
        return data;
    } catch (error) {
        console.error('Error fetching blog:', error);
        throw error;
    }
};