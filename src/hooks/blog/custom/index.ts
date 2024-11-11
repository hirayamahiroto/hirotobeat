import { useCallback, useEffect, useState } from 'react';
import { getAPI } from '@/features/blog/custom';

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