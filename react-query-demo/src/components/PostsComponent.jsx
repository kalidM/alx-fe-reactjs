import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPosts = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return data;
};

const PostsComponent = () => {
    const { data: posts, error, isLoading, refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
        staleTime: 5000, // Data is fresh for 5s before refetching
        cacheTime: 60000, // Cache lasts for 1 min
    });

    if (isLoading) return <p>Loading posts...</p>;
    if (error) return <p>Error fetching posts: {error.message}</p>;

    return (
        <div>
            <button onClick={() => refetch()}>Refetch Posts</button>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default PostsComponent;
