import { post } from './data/post';
import { Header, Footer, BlogLayout, SkipLink } from './components/layout';
import { Article } from './components/post-article';
import { Sidebar } from './components/post-sidebar';

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
