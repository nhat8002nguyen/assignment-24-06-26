function BlogLayout({ main, sidebar }) {
  return (
    <div className="page__body">
      <div className="page__grid">
        <main className="page__main">{main}</main>
        <aside className="page__sidebar sidebar" aria-label="Article meta">
          <div className="sidebar__inner">{sidebar}</div>
        </aside>
      </div>
    </div>
  );
}

export default BlogLayout;
