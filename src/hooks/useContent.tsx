import { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config';

export function useContent() {
  const [contentData, setContentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/v1/content`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setContentData(response.data.content);
      } catch (err) {
        setError('Failed to fetch content');
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  return { contentData, loading, error };
}
