import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

interface IconResult {
  name: string;
  svg: string;
  width: number;
  height: number;
  category: string;
  categoryDisplay: string;
}

interface IconData {
  body: string;
  width?: number;
  height?: number;
}

interface CategoryResponse {
  icons: Record<string, IconData>;
  width?: number;
  height?: number;
  info?: {
    height?: number;
    displayHeight?: number;
  };
}

export function useGlobalIconSearch(
  query: string,
  categories: string[],
  enabled: boolean
) {
  const [results, setResults] = useState<IconResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchedCategories, setSearchedCategories] = useState(0);

  useEffect(() => {
    if (!enabled || !query || query.length < 2) {
      setResults([]);
      setSearchedCategories(0);
      return;
    }

    const controller = new AbortController();
    setLoading(true);
    setResults([]);
    setSearchedCategories(0);

    const searchCategories = async () => {
      const allResults: IconResult[] = [];
      const normalizedQuery = query.toLowerCase();
      let categoriesSearched = 0;

      // Search categories one by one and show results incrementally
      for (let i = 0; i < categories.length; i++) {
        if (controller.signal.aborted) break;

        const category = categories[i];
        
        try {
          const response = await fetch(`/api/icons/${category}`, {
            signal: controller.signal,
          });
          
          if (!response.ok) {
            categoriesSearched++;
            flushSync(() => {
              setSearchedCategories(categoriesSearched);
            });
            continue;
          }

          const data: CategoryResponse = await response.json();
          
          // Get default dimensions from response
          const defaultWidth = data.width ?? data.info?.displayHeight ?? data.info?.height ?? 16;
          const defaultHeight = data.height ?? data.info?.displayHeight ?? data.info?.height ?? 16;

          // Filter icons matching the search query
          const matchingIcons = Object.entries(data.icons || {})
            .filter(([name]) => name.toLowerCase().includes(normalizedQuery))
            .map(([name, icon]) => ({
              name,
              svg: icon.body,
              width: icon.width ?? defaultWidth,
              height: icon.height ?? defaultHeight,
              category,
              categoryDisplay: category
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' '),
            }));

          categoriesSearched++;
          
          // Force immediate render with flushSync - update results immediately
          flushSync(() => {
            setSearchedCategories(categoriesSearched);
            if (matchingIcons.length > 0) {
              setResults(prev => [...prev, ...matchingIcons]);
            }
          });
        } catch (error) {
          if (error instanceof Error && error.name === 'AbortError') {
            break;
          }
          // Continue to next category on error
          categoriesSearched++;
          flushSync(() => {
            setSearchedCategories(categoriesSearched);
          });
        }
      }

      setLoading(false);
    };

    searchCategories();

    return () => {
      controller.abort();
    };
  }, [query, categories, enabled]);

  return {
    results,
    loading,
    searchedCategories,
    totalCategories: categories.length,
  };
}
