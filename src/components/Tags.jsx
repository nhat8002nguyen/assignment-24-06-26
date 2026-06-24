function Tags({ tags }) {
  return (
    <section className="sidebar__section" aria-labelledby="tags-heading">
      <h2 id="tags-heading" className="sidebar__heading">
        Tags
      </h2>
      <ul className="tag__list">
        {tags.map((tag) => (
          <li key={tag}>
            <a href={`#tag-${tag.toLowerCase()}`} className="tag__pill">
              {tag}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Tags;
