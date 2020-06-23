import { h } from 'preact';
import TagList from './TagList';

export default {
  title: 'TagList',
  component: TagList
};

export const Basic = () => (
  <TagList tags={['Halloween', 'Spoopy', 'Ghosts']} />
);
