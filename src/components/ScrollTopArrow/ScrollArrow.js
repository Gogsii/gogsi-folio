import React, { Component, useState } from 'react';
import { BackTop, Icon } from './ArrowStyle';
import { FaArrowAltCircleUp } from 'react-icons/fa';

export default class GoTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_visible: false,
            over: false
        };
    }

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function(e) {
            scrollComponent.toggleVisibility();
        });
    }

    toggleVisibility() {
        if (window.pageYOffset > 1500) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        const { is_visible } = this.state;
        const { over } = this.state;

        return (
            <BackTop>
              <Icon>
                {is_visible && (
                    <FaArrowAltCircleUp size='4rem' onClick={() => this.scrollToTop()}/>
                )}
                </Icon>
                
            </BackTop>
        );
    }
}