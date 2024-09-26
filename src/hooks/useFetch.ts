import { useCallback, useEffect, useState } from 'react';

interface FetchResult<T> {
    data?: T;
    status?: number;
    isLoading: boolean;
    error: Error | null;
}
const defaultOptions = {};
const useFetch = <T>(url: string, options: RequestInit = defaultOptions): FetchResult<T> => {
    const [data, setData] = useState<T>();
    const [status, setStatus] = useState<number>();
    const [isLoading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    
    const fetchData = useCallback(async () => {
      try {
          const response = await fetch(url, options);
          const result = await response.json() as T;
          setData(result);
          setStatus(response.status);
      } catch (error) {
          console.error('Error fetching data:', error);
          setError(error as Error);
      } finally {
          setLoading(false);
      }
  }, [url, options]);

    useEffect(() => {
      fetchData();
    }, [fetchData]);

    return { data, status, isLoading, error };
};

export default useFetch;
