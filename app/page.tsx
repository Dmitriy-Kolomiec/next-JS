import { getMenu } from '@/api/menu';
import { Menu } from '@/components/Menu/menu';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Главная',
  };
}

export default async function Home() {
  return (
    <main>
      {/* <Htag tag="h1">Курсы по Photoshop</Htag>
      <Button appearance="primary" arrow="down">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="right">
        Кнопка
      </Button>
      <Paragraph fontSize="large">
        Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые
        позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники
        факультета могут успешно конкурировать с веб-дизайнерами уровня middle.
      </Paragraph> */}
      <h1> Главная страница</h1>
      <Menu />
    </main>
  );
}
