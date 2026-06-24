import { post } from './data/post';
import SkipLink from './components/SkipLink';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogLayout from './components/BlogLayout';
import Article from './components/Article';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="page">
      <SkipLink />
      <Header />
      <BlogLayout
        main={<Article post={post} />}
        sidebar={
          <Sidebar
            author={post.author}
            tags={post.tags}
            tocItems={post.toc}
          />
        }
      />
      <Footer />
    </div>
  );
}

export default App;
