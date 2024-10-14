import { client } from '@/utils/microCms/client';

const getBlogDetail = async (id: string) => {
    try {
        const data = await client.get({ endpoint: `blogs/${id}` });
        return data;
    } catch (error) {
        console.error('Error fetching blog:', error);
        throw error;
    }
};

export { getBlogDetail };