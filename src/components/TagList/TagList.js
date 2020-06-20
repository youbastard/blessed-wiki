import Tag from 'components/Tag';

const TagList = ({ tags }) => (
  <section>
    { tags.map(t => <Tag key={t} tag={t.trim()} />) }
  </section>
);

export default TagList;
