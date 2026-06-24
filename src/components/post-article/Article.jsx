import ArticleBody from './ArticleBody';

function Article({ post }) {
  return (
    <article id="main-content" className="article">
      <h1 className="article__title">{post.title}</h1>
      <p className="article__meta">
        <time dateTime={post.publishedAtISO}>{post.publishedAt}</time>
        <span className="article__meta-separator" aria-hidden="true">
          ·
        </span>
        <span>{post.readingTime}</span>
      </p>
      <figure className="article__cover">
        <img
          src={post.cover.src}
          alt={post.cover.alt}
          width={post.cover.width}
          height={post.cover.height}
          loading="eager"
        />
      </figure>
      <ArticleBody sections={post.sections} />
    </article>
  );
}

export default Article;
