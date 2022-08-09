import React from 'react';
import * as styled from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import TopList from '../../components/TopList';

const MainPage = () => {
  return (
    <styled.Main>
      <Header />
      <Banner />
      <styled.MainContainer>
        <TopList />
      </styled.MainContainer>
      <Footer />
    </styled.Main>
  );
};

export default MainPage;
