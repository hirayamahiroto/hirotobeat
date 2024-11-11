import { GET as GetBLogsAPITest } from '@/app/api/blog/route';

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
    export { getAPI };

