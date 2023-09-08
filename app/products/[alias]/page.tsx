import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Страница продукта',
};

export default function PageProducts({ params }: { params: { alias: string } }) {
  return <div>Страница c {params.alias}</div>;
}
