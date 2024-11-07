import { client } from '@/utils/microCms/client';
import { Blog } from '@/types/blog';
import { GET as GetBLogsAPITest } from '@/app/api/blog/route';

const getBlogDetail = async (id: string) => {
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
        const data = await client.get({ endpoint: "blogs" });          
        return data.contents;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        throw error;
    }
};


const getAPI = async () => {
    try {
        const blogs = await GetBLogsAPITest('sssss' as any); // APIを呼び出し
        console
        const data = await blogs.json(); // レスポンスをJSONとして解析
        // console.log(data);
        return data.message;
    } catch (error) {
        console.error('Error fetching blogs:', error);
    }
};
    export { getBlogDetail, getBlogs, getAPI };

