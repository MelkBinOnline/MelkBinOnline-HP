import CollapseBtn from '../collapseBtn/CollapseBtn';
import './Case.scss';

const CASE = ({cover,url,type,area,usage,provice,city,loc}) => {
  return (
    <section className="case">
      <div className="case__intro">
        <div className="case__intro__cover">
          <img src={cover} alt="cover" />
        </div>
        <ul className="case__intro__list">
          <li className="case__intro__list--item">{type}</li>
          <li className="case__intro__list--item">{usage}</li>
          <li className="case__intro__list--item">{area}</li>
        </ul>
          <CollapseBtn/>
          <div className="case__intro__loc"><span>{provice}</span> /<span>{city}</span> /<span>{loc}</span></div>
      </div>
      <div className="access">
        <a className='access__btn call' href="href=tel:+989337710943">تماس</a>
        <a className='access__btn visit' href={url}>بازدید آنلاین</a>
      </div>
    </section>
  )
     
};

export default CASE;
