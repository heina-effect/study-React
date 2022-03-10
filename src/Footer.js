import React from 'react';
import styled from 'styled-components'

function Footer() {
    let StyledFooter = styled.footer`
    margin-top: 3rem;
    color : #777;
    text-align : right;
    `;

    return (
        <StyledFooter className='footer mb-5'>
            <div className='container'>
                <div className='footer-top'>
                    <p>This is a page for learning React.<br/>
                    We've introduced you to some great shoes, but we're sorry you can't buy them.<br/>
                    But it is said that good shoes take you to good places.<br/>
                    <strong>I hope your life will also lead to a better place.</strong></p>
                </div>
                {/* Footer bottom */}
                <div className='footer-bottom mt-1'>
                    <p className='text-xs-center mb-0'>
                        &copy;{new Date().getFullYear()} A+shop - All Right Reserved.<br />
                        <i>github - <a href="https://github.com/heina-effect/study-React">A+shop</a></i>
                    </p>
                </div>
            </div>
        </StyledFooter>
    )
}
export default Footer;