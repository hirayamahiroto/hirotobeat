import { client } from '@/utils/microCms/client';

export const getBlogs = async () => {
    try {
        const data = await client.get({ endpoint: "blogs" });  
        console.log('data:', data);
        // console.dir(data);     
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