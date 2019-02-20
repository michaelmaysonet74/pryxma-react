import React, { Component } from 'react';

import Section from './../Section.jsx';
import AppHeader from './../app-content/AppHeader.jsx';
import AppSubHeader from './../app-content/AppSubHeader.jsx';
import AppBody from './../app-content/AppBody.jsx';
import DownloadButton from './../app-content/SourceButton.jsx';
import Space from './../Space.jsx';
import ScreenShot from './../app-content/ScreenShot.jsx';

class iOSApp extends Component {
	constructor(props) {
		super(props);

		this.renderScreenShots = this.renderScreenShots.bind(this);
	}

	renderScreenShots(screenshots) {
		return screenshots.map((screenshot) => {
			return (
				<ScreenShot
					key={ screenshot.id.toString() }
					{ ...screenshot }
				/>
			);
		});
	}

	render() {
		let {
			title,
			subtitle,
			icon,
			contentClass,
			info,
			subInfo,
			screenshots,
			download,
		} = this.props;

		return (
			<Section>
				<AppHeader title={ title } subtitle={ subtitle } icon={ icon } />
				<AppSubHeader info={ info } subInfo={ subInfo } />
				<AppBody>
					{ this.renderScreenShots(screenshots) }
				</AppBody>
				<DownloadButton
					title={ download.title }
					sourceLink={ download.link }
					icon={ download.icon }
				/>
				<Space size={ 3 } />
			</Section>
		);
	}
}

export default iOSApp;
