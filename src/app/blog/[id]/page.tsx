'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import  { getBlogDetail } from './action';
import { Header } from '@/components/organisms/header';
import Image from 'next/image';
import BlogDetail from '@/components/molecules/blogDetail';

type Blog = {
    id: string;
    eyecatch: {
        url: string;
    };
    title: string;
    content: string;
    category: {
        name: string;
    }
    publishedAt: string;
};

const BlogDetailPage = () => {
    const params = useParams();
    const id = params.id as string;
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            getBlogDetail(id)
                .then((data) => {
                    setBlog(data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err.message);
                    setLoading(false);
                });
        }
    }, [id]);

    if (loading) return (
        <div className="flex flex-col justify-center items-center h-screen bg-white">
            <div className="animate-pulse">
                <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={297}
                    height={90}
                    priority
                />
            </div>
            <p className="mt-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 text-2xl font-semibold tracking-wide">Loading...</p>
        </div>
    );

    if (error) return <div className="flex justify-center items-center h-screen text-red-500 text-xl font-light">Error loading blog: {error}</div>;
    if (!blog) return <div className="flex justify-center items-center h-screen text-gray-400 text-xl font-light">No blog found</div>;

    return (
        <div id='blog' className={`blog bg-white min-h-screen text-gray-800`}>
            <Header />
            <BlogDetail blog={blog} />
        </div>
    );
};

export default BlogDetailPage;