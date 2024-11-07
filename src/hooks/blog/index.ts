import { useCallback, useRef, useEffect, useState } from 'react';
// import {  } from 'react';
import { getBlogs, getBlogDetail, getAPI } from '@/features/blog';

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

// export function useBlogsApiTest() {
//     const [APIResponse, setAPIResponse] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
    
//     async function fetchAPI() {
//         try {
//             const data = await getAPI();
//             setAPIResponse(data);
//         } catch (error: any) {
//             setError(error.message);
//         } finally {
//             setLoading(false);
//         }
//     }
    
//     useEffect(() => {
//         fetchAPI();
//     }, []);
    
//     return { APIResponse, loading, error };
// }

export function useBlogsApiTest() {
    const [APIResponse, setAPIResponse] = useState(null);
    const [aaloading, setLoading] = useState(true);
    
    const fetchAPI = useCallback(async () => {
        try {
            const data = await getAPI();
            setAPIResponse(data);
        }
        catch (error: any) {
            console.error('Error fetching blogs:', error);
        }
        finally {
            setLoading(false);
        }
    }, []);

    
    useEffect(() => {
        fetchAPI();        
    }, []);

    // console.log('API Response:', aaloading);

    
    return { APIResponse, aaloading};
}