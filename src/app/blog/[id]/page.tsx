'use client';

import { useParams } from 'next/navigation';
import { Header } from '@/components/organisms/header';
import Image from 'next/image';
import { useBlogDetail } from '@/hooks/blog';
import BlogDetail from '@/components/molecules/blogDetail';
import Error from '@/components/atoms/error';
import NotFound from '@/components/atoms/notFound';

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
    const { id } = useParams();
    const { blog, loading, error } = useBlogDetail(id);


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

    if (error) return <Error text='何らかの原因でエラーが発生しました。時間を空けて再度アクションをしてください。' />; 
    if (!blog) return <NotFound text="記事が見つかりませんでした。" />;

    return (
        <div id='blog' className={`blog bg-white min-h-screen text-gray-800`}>
            <Header />
            <BlogDetail blog={blog} />
        </div>
    );
};

export default BlogDetailPage;