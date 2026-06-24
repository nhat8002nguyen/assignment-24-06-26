import { useTableOfContents } from '../../hooks';

function TableOfContents({ items }) {
  const headingIds = items.map((item) => item.id);
  const { activeId, scrollToHeading } = useTableOfContents(headingIds);

  const handleClick = (event, id) => {
    event.preventDefault();
    scrollToHeading(id);
    history.pushState(null, '', `#${id}`);
  };

  return (
    <nav className="sidebar__section toc" aria-labelledby="toc-heading">
      <h2 id="toc-heading" className="sidebar__heading">
        On this page
      </h2>
      <ol className="toc__list">
        {items.map((item) => (
          <li
            key={item.id}
            className={`toc__item${item.level === 3 ? ' toc__item--level-3' : ''}`}
          >
            <a
              href={`#${item.id}`}
              className={`toc__link${activeId === item.id ? ' toc__link--active' : ''}`}
              aria-current={activeId === item.id ? 'location' : undefined}
              onClick={(event) => handleClick(event, item.id)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default TableOfContents;
