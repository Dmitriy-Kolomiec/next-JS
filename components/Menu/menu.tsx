import { getMenu } from '@/api/menu';

export async function Menu() {
  const menu = await getMenu(0);

  return (
    <>
      <div> {menu.length}</div>
      {/* <div>{JSON.stringify(menu)}</div> */}
    </>
  );
}
