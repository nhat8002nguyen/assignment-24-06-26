function AuthorCard({ author }) {
  return (
    <section className="sidebar__section" aria-labelledby="author-heading">
      <h2 id="author-heading" className="sidebar__heading">
        Author
      </h2>
      <div className="author">
        <img
          className="author__avatar"
          src={author.avatar}
          alt=""
          width={48}
          height={48}
        />
        <div>
          <p className="author__name">{author.name}</p>
          <p className="author__bio">{author.bio}</p>
        </div>
      </div>
    </section>
  );
}

export default AuthorCard;
