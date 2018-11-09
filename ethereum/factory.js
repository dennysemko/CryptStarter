import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x20A09fC58d9a07D7Ac0F3AfcdAbdD9E1E4543cd1'
);

export default instance;