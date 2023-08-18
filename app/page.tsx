'use client';
import { Button } from '@/components/Button/Button';
import { Htag } from '@/components/Htag/Htag';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { Rating } from '@/components/Rating/Rating';
import { useState } from 'react';

export default function Home() {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag="h1">Курсы по Photoshop</Htag>
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
      </Paragraph>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}
