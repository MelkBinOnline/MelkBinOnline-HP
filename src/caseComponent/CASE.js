import CollapseBtn from '../collapseBtn/CollapseBtn';
import './Case.scss';

const CASE = (props) => {
  const {cover,url,type,area,usage} = props;
  return <div>
      <div className='case'>
        <div className="img-con">
          <img  src={cover} alt="img" />
        </div>
        <div className="short-info">
          <strong>{type}</strong>
          <strong>{usage}</strong>
          <strong>{area}</strong>
        </div>
          <CollapseBtn/>
        <div className="access">
          <div className="btn1 BTN">
            <a href={url}>بازدید آنلاین</a>
          </div>
          <div className="btn2 BTN">
            <a href="#">تماس</a>
          </div>
        </div>
      </div>
  </div>;
};

export default CASE;
