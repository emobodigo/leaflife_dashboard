import MainLayout from '@/components/layouts/main/MainLayout';
import { NextPageWithLayout } from '../page';

const Dashboard: NextPageWithLayout = () => {
  return <div>Dashboard</div>;
};

export default Dashboard;

Dashboard.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
