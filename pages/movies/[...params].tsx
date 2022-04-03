import Seo from '@components/Seo';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

const Detail: NextPage<{ params: [string, number] }> = ({ params }) => {
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
};

export function getServerSideProps({
  params: { params },
}: {
  params: { params: [string, number] };
}) {
  return {
    props: {
      params,
    },
  };
}

export default Detail;
