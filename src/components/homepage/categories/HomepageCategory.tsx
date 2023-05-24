import "../../../assets/images/furniture.webp";

interface IProps {
  title: string;
  img: string;
  url: string;
}
export const HomepageCategory = (props: IProps) => {
  return (
    <div className='categoryCard'>
      <h4 className='categoryCardHeading'>{props.title}</h4>
      <img className='categoryCardImg' src={props.img} alt={props.title} />
    </div>
  );
};
