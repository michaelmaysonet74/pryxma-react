import React, { Component } from 'react';
import NavTab from './NavTab.jsx';

class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false,
        };

        this.renderNavTabs = this.renderNavTabs.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handlePseudoClick = this.handlePseudoClick.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handlePseudoClick);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handlePseudoClick);
    }

    handleClick(e) {
        this.setState((prevState, props) => {
            return {
                isExpanded: !prevState.isExpanded
            };
        });
    }

    handlePseudoClick(e) {
        const navbar = document.getElementById('mainNavbar');

        if (window.scrollY > 50) {
            navbar.classList.add('navbar-opacity');
        }
        else {
            navbar.classList.remove('navbar-opacity');
        }

        if (window.innerWidth < 776 && this.state.isExpanded) {
            document.querySelector('.navbar-toggle').click();
        }
    }

    renderNavTabs(iOSAppList) {
        if (typeof iOSAppList !== 'undefined' && iOSAppList.length > 0) {
            return iOSAppList.map(app => {
                return (
                    <NavTab
                        key={app.id}
                        title={app.title}
                        handleClick={this.handlePseudoClick}
                        isActive={app.activeByDefault}
                    />
                );
            });
        }
    }

    render() {
        const { iOSAppList } = this.props;

        return (
            <div id="mainNavbar" className="navbar navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button
                            type="button"
                            id="navbarCollapseBtn"
                            className="navbar-toggle"
                            data-toggle="collapse"
                            data-target=".navbar-collapse"
                            onClick={this.handleClick}
                        >
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a
                            id="navbarTitle"
                            className="navbar-brand navbar-text-color"
                            href=""
                        >
                            p r y x m a
						</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            {this.renderNavTabs(iOSAppList)}
                            <NavTab title="Athena" handleClick={this.handlePseudoClick} />
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;
