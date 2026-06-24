function ArticleBody({ sections }) {
  return (
    <div className="article__body prose">
      {sections.map((section, index) => {
        switch (section.type) {
          case 'heading': {
            const Tag = section.level === 3 ? 'h3' : 'h2';
            return (
              <Tag key={section.id} id={section.id}>
                {section.text}
              </Tag>
            );
          }
          case 'paragraph':
            return <p key={index}>{section.text}</p>;
          case 'blockquote':
            return (
              <blockquote key={index} className="prose__blockquote">
                {section.text}
              </blockquote>
            );
          case 'list': {
            const ListTag = section.ordered ? 'ol' : 'ul';
            return (
              <ListTag key={index}>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ListTag>
            );
          }
          case 'code':
            return (
              <pre key={index} className="prose__code-block">
                <code>{section.text}</code>
              </pre>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

export default ArticleBody;
