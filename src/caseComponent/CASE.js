import './caseComponent.css';

const CASE = (props) => {
  const {img,url} = props;
  return <div>
      <div className='case'>
      <div className="img-con">
          <img  src={img} alt="img" />
      </div>
      <a href={url}>online</a>
      
  </div>
  </div>;
};

export default CASE;
