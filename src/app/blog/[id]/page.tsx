'use server';

import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { Header } from '@/components/organisms/header';
import Image from 'next/image';
import BlogDetail from '@/components/molecules/blogDetail';
import Error from '@/components/atoms/error';
import { useBlogDetail } from '@/hooks/blog/server';

const Loading = () => (
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
        <p className="mt-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 text-2xl font-semibold tracking-wide">
            Loading...
        </p>
    </div>
);

async function BlogDetailPageContent({ id }: { id: string }) {
    try {
        const blog = await useBlogDetail(id);
        const blogArticle = blog.blog;

        if (!blog) {
            notFound();
        }

        return (
            <div id='blog' className={`blog bg-white min-h-screen text-gray-800`}>
            <Header />
            <BlogDetail blog={blogArticle} />
            </div>
        );
    } catch (error) {
        return <Error text='何らかの原因でエラーが発生しました。時間を空けて再度アクションをしてください。' />;
    }
}

export default async function BlogDetailPage({
    params: { id },
}: {
    params: { id: string };
}) {
    return (
        <Suspense fallback={<Loading />}>
            <BlogDetailPageContent id={id} />
        </Suspense>
    );
}
