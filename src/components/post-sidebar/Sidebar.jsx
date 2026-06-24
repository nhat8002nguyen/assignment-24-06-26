import AuthorCard from './AuthorCard';
import TableOfContents from './TableOfContents';
import Tags from './Tags';

function Sidebar({ author, tags, tocItems }) {
  return (
    <>
      <AuthorCard author={author} />
      <TableOfContents items={tocItems} />
      <Tags tags={tags} />
    </>
  );
}

export default Sidebar;
