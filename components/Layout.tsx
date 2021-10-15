import * as React from "react";

import Footer from './Footer';
import Header from './Header';

type LayoutProps = {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="bg-primary text-secondary">
			<Header />
			{children}
			<Footer />
		</div>
	)
}

export default Layout;