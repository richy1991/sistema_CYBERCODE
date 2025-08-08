import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  Heart, 
  Share2, 
  Image, 
  Send, 
  MoreHorizontal,
  Shield,
  Code,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react';

const CommunityFeed = ({ user = null, token = null }) => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchPosts();
    }
  }, [user]);

  const categories = [
    { id: 'general', name: 'General', icon: MessageCircle, color: 'from-blue-500 to-cyan-500' },
    { id: 'security', name: 'Seguridad', icon: Shield, color: 'from-red-500 to-pink-500' },
    { id: 'question', name: 'Pregunta', icon: AlertTriangle, color: 'from-yellow-500 to-orange-500' },
    { id: 'showcase', name: 'Proyecto', icon: Code, color: 'from-green-500 to-emerald-500' }
  ];

  const handleLike = async (postId) => {
    if (!token) return;

    // Optimistic UI update
    setPosts(posts.map(post => {
      if (post.id === postId) {
        const alreadyLiked = post.likedByMe; // We'll need to add this field
        return {
          ...post,
          likes: alreadyLiked ? post.likes - 1 : post.likes + 1,
          likedByMe: !alreadyLiked
        };
      }
      return post;
    }));


    try {
      await fetch(`/api/posts/${postId}/like`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      // Optionally, refetch posts to get the most accurate state
      // fetchPosts();
    } catch (err) {
      console.error("Failed to like post", err);
      // Revert optimistic update on failure
      fetchPosts();
    }
  };

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    if (!newPost.trim() || !user || !token) return;

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ content: newPost, category: selectedCategory, tags: [] })
      });

      if (!response.ok) {
        throw new Error('Failed to create post');
      }

      const newPostData = await response.json();
      setPosts([newPostData, ...posts]);
      setNewPost('');

    } catch (err) {
      setError(err.message);
    }
  };

  const getCategoryConfig = (category) => {
    return categories.find(cat => cat.id === category) || categories[0];
  };

  if (!user) {
    return (
      <motion.div
        className="bg-white rounded-3xl p-8 text-center shadow-xl border border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Shield className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Únete a la Comunidad
        </h3>
        <p className="text-gray-600 mb-6">
          Inicia sesión para participar en discusiones, hacer preguntas y compartir conocimientos.
        </p>
        <p className="text-sm text-gray-500">(La funcionalidad de la comunidad requiere que el backend esté en ejecución)</p>
      </motion.div>
    );
  }

  if (isLoading) {
    return <div className="text-center p-8">Cargando publicaciones...</div>;
  }

  if (error) {
    return <div className="text-center p-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Create Post */}
      <motion.div
        className="bg-white rounded-3xl p-6 shadow-xl border border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <form onSubmit={handleSubmitPost} className="space-y-4">
          <div className="flex items-center gap-4">
            <img 
              src={user.avatar || '/api/placeholder/40/40'}
              alt={user.name}
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="¿Qué quieres compartir con la comunidad?"
                className="w-full p-4 border border-gray-200 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                rows="3"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">Categoría:</span>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    type="button"
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm font-medium transition-all ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white`
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <motion.button
                type="button"
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                type="submit"
                disabled={!newPost.trim()}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                  newPost.trim()
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
                whileHover={newPost.trim() ? { scale: 1.05 } : {}}
                whileTap={newPost.trim() ? { scale: 0.95 } : {}}
              >
                <Send className="w-4 h-4" />
                Publicar
              </motion.button>
            </div>
          </div>
        </form>
      </motion.div>

      {/* Posts Feed */}
      <AnimatePresence>
        {posts.map((post, index) => {
          const categoryConfig = getCategoryConfig(post.category);
          
          return (
            <motion.div
              key={post.id}
              className="bg-white rounded-3xl p-6 shadow-xl border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              layout
            >
              {/* Post Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-gray-900">{post.author.name}</h4>
                      {post.author.verified && (
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{post.author.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-lg bg-gradient-to-r ${categoryConfig.color} text-white text-xs font-medium`}>
                    <categoryConfig.icon className="w-3 h-3" />
                    {categoryConfig.name}
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Clock className="w-4 h-4" />
                    {new Date(post.timestamp).toLocaleString()}
                  </div>
                  <motion.button
                    className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <MoreHorizontal className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Post Content */}
              <div className="mb-4">
                <p className="text-gray-800 leading-relaxed mb-3">{post.content}</p>
                
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {post.image && (
                  <motion.img 
                    src={post.image} 
                    alt="Post content"
                    className="w-full h-64 object-cover rounded-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>

              {/* Post Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-6">
                  <motion.button
                    onClick={() => handleLike(post.id)}
                    className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Heart className={`w-5 h-5 ${post.likedByMe ? 'text-red-500 fill-current' : ''}`} />
                    <span className="font-medium">{post.likes}</span>
                  </motion.button>

                  <motion.button
                    className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-medium">{post.comments}</span>
                  </motion.button>

                  <motion.button
                    className="flex items-center gap-2 text-gray-500 hover:text-green-500 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Share2 className="w-5 h-5" />
                    <span className="font-medium">{post.shares}</span>
                  </motion.button>
                </div>

                <motion.button
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium text-sm hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Responder
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default CommunityFeed;