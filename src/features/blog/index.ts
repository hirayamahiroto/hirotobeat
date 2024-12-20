import { client } from '@/utils/microCms/client';

const getBlogDetail = async (id: string | string[]) => {
    try {
        const data = await client.get({ endpoint: `blogs/${id}` });
        return data;
    } catch (error) {
        console.error('Error fetching blog:', error);
        throw error;
    }
};

const getBlogs = async () => {
    try {
        const data = await client.get({ 
            endpoint: "blogs",
            queries: {
                limit: 100,
            },
            customRequestInit: {
                next: {
                    revalidate: 0,
                },
            },
        }); 
        return data.contents;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        throw error;
    }
};

export { getBlogDetail, getBlogs };
