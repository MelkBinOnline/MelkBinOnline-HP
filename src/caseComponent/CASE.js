import './caseComponent.css';

const CASE = (props) => {
  const {cover,url} = props;
  return <div>
      <div className='case'>
      <div className="img-con">
          <img  src={cover} alt="img" />
      </div>
      <a href={url}>online</a>
      
  </div>
  </div>;
};

export default CASE;
