'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getBlogDetail } from '../../../utils/microCms/client';
import { Header } from '@/components/organisms/header';
import Image from 'next/image';

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
        <div className="bg-white min-h-screen text-gray-800">
            <Header />
            <div className="max-w-4xl mx-auto px-4 py-16">
                <article className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100">
                    <div className="p-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{blog.title}</h1>
                        <p className="text-sm text-gray-500 font-light">
                            Published on {new Date(blog.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                        <p className="text-sm text-gray-500 mb-8 font-light">
                            Category: {blog.category.name}
                        </p>
                        <Image
                            src={blog.eyecatch.url}
                            alt={blog.title}
                            width={1200}
                            height={800}
                            className="rounded-lg mb-8"
                        />
                        <div 
                            className="prose prose-lg max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-strong:text-gray-900"
                            dangerouslySetInnerHTML={{ __html: blog.content }} 
                        />
                    </div>
                </article>
            </div>
        </div>
    );
};

export default BlogDetailPage;