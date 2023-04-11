import './ResponsiveFooter.css'
import { Collapse } from 'antd';
import { Link } from 'react-router-dom';
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const ResponsiveFooter = ({ datas }) => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Collapse onChange={onChange}>
      {datas.map(item => (
        <Panel header={item.title} key={item.length}>
          {item.li.map(item => (
            <li className='responsiveLi'><Link>{item}</Link></li>
          ))}
        </Panel>
      ))}


    </Collapse>
  );
};
export default ResponsiveFooter;