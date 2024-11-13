// 'use client';

// import { useEffect, useState } from 'react';
// import { getBlogs, getBlogDetail } from '@/features/blog/microCms';

// export function useBlogDetail(id: string | string[]) {
//     const [blog, setBlog] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
    
//     async function fetchBlogDetail() {
//         try {
//             const data = await getBlogDetail(id as string);
//             setBlog(data);
//         } catch (error: any) {
//             setError(error.message);
//         } finally {
//             setLoading(false);
//         }
//     }
    
//     useEffect(() => {
//         if (id) {
//             fetchBlogDetail();
//         }
//     }, [id]);
    
//     return { blog, loading, error };
// }   
