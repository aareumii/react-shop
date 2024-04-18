import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './nav/Nav';
import styles from './Header.module.scss';

const Header = () => {
	return (
		<div className={styles.header}>
			<div className="container">
				<div className={styles.header_wrapper}>
					<div className={styles.header_logo}>
						<Link to={'/'}>
							<h2>Shop</h2>
						</Link>
					</div>
					<Nav />
				</div>
			</div>
		</div>
	);
};

export default Header;
