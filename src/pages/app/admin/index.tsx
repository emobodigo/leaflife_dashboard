import MainLayout from '@/components/layouts/main/MainLayout';
import { NextPageWithLayout } from '@/pages/page';

const Admin: NextPageWithLayout = () => {
  return <div>Admin</div>;
};

export default Admin;

Admin.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
