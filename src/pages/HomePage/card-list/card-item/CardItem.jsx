import React from 'react';
import styles from './CardItem.module.scss';
import { Link } from 'react-router-dom';

const CardItem = ({ item }) => {
	return (
		<li className={styles.card_item}>
			<Link to={`/product/${item.id}`}>
				<img
					src={item.image}
					width={'80%'}
					height={'200px'}
					alt="product card"
				/>
			</Link>

			<h5>{item.title.substring(0, 15)}...</h5>

			<div>
				<button></button>
			</div>
		</li>
	);
};

export default CardItem;
