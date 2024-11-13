export type Blog = {
    id: string;
    title: string;
    content: string;
    eyecatch: {
        url: string;
    }
    category: {
        name: string;
    }
    publishedAt: string;
    error: string;
}
