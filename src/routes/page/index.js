import { h } from 'preact';
import { usePrerenderData } from '@preact/prerender-data-provider';

const Page = (props) => {
  // const [data, isLoading] = usePrerenderData(props);
  console.log(props);

  return (
    <div>you are on page { props.page }</div>
  );
};

export default Page;
