import { client } from "@/utils/microCms/client";

const getBlogs = async () => {
    try {
        const data = await client.get({ endpoint: "blogs" });          
        return data.contents;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        throw error;
    }
};

export { getBlogs };