import React from 'react'
import Footer from '../Component/Footer'
import Icon from '../Component/icons'

export function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title> About Us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Marketing</Footer.Link>
                    <Footer.Link href="#">Consulting</Footer.Link>
                    <Footer.Link href="#">Development</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Title> Contact Us</Footer.Title>
                    <Footer.Link href="#">United States</Footer.Link>
                    <Footer.Link href="#">Australia</Footer.Link>
                    <Footer.Link href="#">Support</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Title> Social</Footer.Title>
                    <Footer.Link href="#"><icons className="fab fa-facebook" /> Facebook</Footer.Link>
                    <Footer.Link href="#"><icons className="fab fa-instagram" /> Instagram</Footer.Link>
                    <Footer.Link href="#"><icons className="fab fa-youtube" /> Youtube</Footer.Link>
                </Footer.Column>
                </Footer.Row>

            </Footer.Wrapper>
        </Footer>
    )
}