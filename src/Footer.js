import React from 'react';
import styled from 'styled-components'

function Footer() {
    let StyledFooter = styled.footer`
    background : #212529;
    color : rgba(255,255,255,.55);
    padding-top: 1rem;
    `;
    // let Styledlist = styled.div`
    //   color : rgba(255,255,255,.55);

    //   &:hover {
    //     color: #fff;
    //   }
    // `

    return (
        <StyledFooter className='footer'>
            <div className='container'>
                <div className='row'>
                    {/* list-1 */}
                    <div className='col-md-3 col-sm-3'>
                        <h4>About Us</h4>
                        <ul className='list-unstyled'>
                            <li>내용</li>
                            <li>내용</li>
                            <li>내용</li>
                        </ul>
                    </div>
                    {/* list-2 */}
                    <div className='col-md-3 col-sm-3'>
                        <h4>Contact Us</h4>
                        <ul className='list-unstyled'>
                            <li>내용</li>
                            <li>내용</li>
                        </ul>
                    </div>
                    {/* list-3 */}
                    <div className='col-md-3 col-sm-3'>
                        <h4>Videos</h4>
                        <ul className='list-unstyled'>
                            <li>내용</li>
                            <li>내용</li>
                            <li>내용</li>
                        </ul>
                    </div>
                    {/* list-4 */}
                    <div className='col-md-3 col-sm-3'>
                        <h4>Social Meadia</h4>
                        <ul className='list-unstyled'>
                            <li>내용</li>
                            <li>내용</li>
                            <li>내용</li>
                        </ul>
                    </div>
                </div>
                {/* Footer bottom */}
                <div className='footer-bottom row'>
                    <p className='text-xs-center'>
                        &copy;{new Date().getFullYear()} A+shop - All Right Reserved.<br />
                        <i>github - <a href="https://github.com/heina-effect/study-React">A+shop</a></i>
                    </p>
                </div>
            </div>
        </StyledFooter>
    )
}
export default Footer;