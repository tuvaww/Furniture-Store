import { IItem } from "../../../models/items/IItem";

interface IProps {
  item: IItem;
}
export const NewInPreviewCard = (props: IProps) => {
  return (
    <section className='newInCardContainer'>
      <div className='newInCardImgContainer'>
        <img
          src={props.item.images[0]}
          alt={props.item.title}
          className='newInCardImg'
        />
      </div>
      <div className='newInCardTitleContainer'>
        <h4 className='newInCardTitle'>{props.item.title}</h4>
      </div>
    </section>
  );
};
