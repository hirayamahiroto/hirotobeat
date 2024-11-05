import { useEffect, useState } from 'react';
import { getBlogs, getBlogDetail } from '@/features/blog';


export function useBlogs() {
    const [blogArticles, setBlogArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    
    async function fetchBlogs() {
        try {
        const blogs = await getBlogs();
        setBlogArticles(blogs);
        } catch (error) {
        console.error('Error fetching blogs:', error);
        } finally {
        setLoading(false);
        }
    }
    
    useEffect(() => {
        fetchBlogs();
    }, []);
    
    return { blogArticles, loading };
}

export function useBlogDetail(id: string | string[]) {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    async function fetchBlogDetail() {
        try {
        const data = await getBlogDetail(id as string);
        setBlog(data);
        } catch (error: any) {
        setError(error.message);
        } finally {
        setLoading(false);
        }
    }
    
    useEffect(() => {
        if (id) {
        fetchBlogDetail();
        }
    }, [id]);
    
    return { blog, loading, error };
}   
