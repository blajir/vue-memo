import Vue from 'vue';
import Footer from '@/components/Footer';

describe('Mypage', () => {
  it('has a created hook', () => {
    expect(typeof Footer.data).to.equal('function');
    const defaultData = Footer.data();
    expect(defaultData.memo).to.equal('');
  });
})
