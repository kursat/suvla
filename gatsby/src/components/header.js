import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import Headroom from '../../../node_modules/headroom.js/dist/headroom';
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

const Header = () => {
	useEffect(() => {
		const navbarElement = document.querySelector('#navbar');
		const headroom = new Headroom(navbarElement);
		headroom.init();
	}, []);

	return (
		<Navbar className={'headroom'} id={'navbar'}>
			<Navbar.Brand href="#home">Navbar</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="#features">Features</Nav.Link>
				<Nav.Link href="#pricing">Pricing</Nav.Link>
			</Nav>
			<Nav className="mr-sm-2">
				<Nav.Link>
					<FaFacebook />
				</Nav.Link>
				<Nav.Link>
					<FaInstagram />
				</Nav.Link>
				<Nav.Link>
					<FaLinkedin />
				</Nav.Link>
			</Nav>
		</Navbar>
	);
};

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: '',
};

export default Header;
