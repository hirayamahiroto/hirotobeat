'use server';

import { getAPI } from '@/features/blog/custom';
import { getBlogs, getBlogDetail } from '@/features/blog/microCms';

async function getBlogsApiTest() {
    const data = await getAPI();
    return data;
}

async function getBlogsApi() {
    const data = await getBlogs();
    return data;
}

export async function getBlogDetailAction(id: string) {
    try {
        const blog = await getBlogDetail(id);
        return { blog };
    } catch (error) {
        return { error: error instanceof Error ? error.message : '不明なエラーが発生しました' };
    }
}
 
export { getBlogsApiTest, getBlogsApi };