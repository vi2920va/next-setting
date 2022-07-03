import AppLayout from 'components/atoms/AppLayout'
import React, { ReactNode } from 'react';

const Home = () => {
  return (
    <div>Home</div>
  )
  
}

Home.getLayout = function getLayout(page: ReactNode) {
return <AppLayout>{page}</AppLayout>
}

export default Home
