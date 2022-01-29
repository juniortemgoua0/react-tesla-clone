import React, {useEffect, useRef, useState} from "react"
import styled from "styled-components"
import Section from "./Section";

function scrollTo(top, i) {
    document.body.scrollTo({
        top: i * top,
        behavior: "smooth"
    });
    document.documentElement.scrollTo({
        top: i * top,
        behavior: "smooth"
    });

}

const Home = () => {
    const [itemDescription, setItemDescription] = useState({
        title: "Model 3",
        description: "Order Online for Touchless Delivery"
    });
    const [buttons, setButtons] = useState({
        rigthBtnText : "Existing inventory",
        leftBtnText : "Custom Order ",
        arrow : true
    });
    const refItemText = useRef()
    const refButons = useRef()
    const innerHeight = window.innerHeight
    useEffect(() => {
        let lastScrollPosition = 0
        let newScrollPosition = 0
        let timer = null
        let scrollPosition = 1

        window.addEventListener('scroll', function () {
            lastScrollPosition = newScrollPosition
            refItemText.current.style.opacity= "" + (window.scrollY + 1)/(10*scrollPosition*innerHeight)
            refButons.current.style.opacity= "" + (window.scrollY + 1)/(10*scrollPosition*innerHeight)
            console.log(refItemText.current.style.opacity)
            if (timer !== null) {
                window.clearTimeout(timer);
            }
            //Observer con
            const ratioMin = .01
            const ratioMax = .99
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: ratioMin
            }

            timer = window.setTimeout(function () {
                newScrollPosition = window.scrollY
                refItemText.current.style.opacity = "1"
                refButons.current.style.opacity = "1"
                const handleIntersect = function (entries, observer) {
                    entries.forEach(function (entry) {
                        if (entry.intersectionRatio > ratioMin && entry.intersectionRatio < ratioMax) {

                            if (entry.target.id === "section2") {
                                if (lastScrollPosition < newScrollPosition) {
                                    scrollPosition = 2
                                    scrollTo(innerHeight, 1)
                                    setItemDescription(state => ({
                                        title: "Model Y",
                                        description: "Order Online for Touchless Delivery"
                                    }))
                                    setButtons(state => ({
                                        rigthBtnText : "Existing inventory",
                                        leftBtnText : "Custom Order ",
                                        arrow : true
                                    }))
                                } else {
                                    scrollTo(innerHeight, 0)
                                    scrollPosition = 1
                                    setItemDescription(state => ({
                                        title: "Model 3",
                                        description: "Order Online for Touchless Delivery"
                                    }))
                                    setButtons(state => ({
                                        rigthBtnText : "Existing inventory",
                                        leftBtnText : "Custom Order ",
                                        arrow : true
                                    }))
                                }
                            } else if (entry.target.id === "section3") {
                                if (lastScrollPosition < newScrollPosition) {
                                    scrollTo(innerHeight, 2)
                                    scrollPosition = 3
                                    setItemDescription(state => ({
                                        title: "Model S",
                                        description: "Order Online for Touchless Delivery"
                                    }))
                                    setButtons(state => ({
                                        rigthBtnText : "Existing inventory",
                                        leftBtnText : "Custom Order ",
                                        arrow : true
                                    }))
                                } else {
                                    scrollTo(innerHeight, 1)
                                    scrollPosition = 2
                                    setItemDescription(state => ({
                                        title: "Model Y",
                                        description: "Order Online for Touchless Delivery"
                                    }))
                                    setButtons(state => ({
                                        rigthBtnText : "Existing inventory",
                                        leftBtnText : "Custom Order ",
                                        arrow : true
                                    }))
                                }
                            } else if (entry.target.id === "section4") {
                                if (lastScrollPosition < newScrollPosition) {
                                    scrollTo(innerHeight, 3)
                                    scrollPosition = 4
                                    setItemDescription(state => ({
                                        title: "Model X",
                                        description: "Order Online for Touchless Delivery"
                                    }))
                                    setButtons(state => ({
                                        rigthBtnText : "Existing inventory",
                                        leftBtnText : "Custom Order ",
                                        arrow : true
                                    }))
                                } else {
                                    scrollTo(innerHeight, 2)
                                    scrollPosition = 3
                                    setItemDescription(state => ({
                                        title: "Model S",
                                        description: "Order Online for Touchless Delivery"
                                    }))
                                    setButtons(state => ({
                                        rigthBtnText : "Existing inventory",
                                        leftBtnText : "Custom Order ",
                                        arrow : true
                                    }))
                                }
                            } else if (entry.target.id === "section5") {
                                if (lastScrollPosition < newScrollPosition) {
                                    scrollTo(innerHeight, 4)
                                    scrollPosition = 5
                                    setItemDescription(state => ({
                                        title: "Solar Panel",
                                        description: "Lowest Cost Solar Panels in America"
                                    }))
                                    setButtons(state => ({
                                        leftBtnText: "ORDER NOW",
                                        rigthBtnText: "LEARN MORE",
                                        arrow: false
                                    }))
                                } else {
                                    scrollTo(innerHeight, 3)
                                    scrollPosition = 4
                                    setItemDescription(state => ({
                                        title: "Model X",
                                        description: "Order Online for Touchless Delivery"
                                    }))
                                    setButtons(state => ({
                                        leftBtnText: "ORDER NOW",
                                        rigthBtnText: "LEARN MORE",
                                        arrow: false
                                    }))
                                }
                            } else if (entry.target.id === "section6") {
                                if (lastScrollPosition < newScrollPosition) {
                                    scrollTo(innerHeight, 5)
                                    scrollPosition = 6
                                    setItemDescription(state => ({
                                        title: "Solar Roof",
                                        description: "Produce Clean Energy From Your Roof "
                                    }))
                                    setButtons(state => ({
                                        leftBtnText: "ORDER NOW",
                                        rigthBtnText: "LEARN MORE",
                                        arrow: false
                                    }))
                                } else {
                                    scrollTo(innerHeight, 4)
                                    scrollPosition = 5
                                    setItemDescription(state => ({
                                        title: "Sola Panel",
                                        description: "Lowest Cost Solar Panels in America"
                                    }))
                                    setButtons(state => ({
                                        leftBtnText: "ORDER NOW",
                                        rigthBtnText: "LEARN MORE",
                                        arrow: false
                                    }))
                                }
                            } else if (entry.target.id === "section7") {
                                if (lastScrollPosition < newScrollPosition) {
                                    scrollTo(innerHeight, 6)
                                    scrollPosition = 7
                                    setItemDescription(state => ({
                                        title: "Accessories"
                                    }))
                                    setButtons(state => ({
                                        leftBtnText: "SHOP NOW",
                                        arrow: false
                                    }))
                                } else {
                                    scrollTo(innerHeight, 5)
                                    scrollPosition = 6
                                    setItemDescription(state => ({
                                        title: "Solar Roof",
                                        description: "Produce Clean Energy From Your Roof "
                                    }))
                                    setButtons(state => ({
                                        leftBtnText: "ORDER NOW",
                                        rigthBtnText: "LEARN MORE",
                                        arrow: false
                                    }))
                                }
                            }
                        }
                    })
                }

                const observer = new IntersectionObserver(handleIntersect, options);
                document.querySelectorAll('[id*="section"]').forEach(function (r) {
                    observer.observe(r)
                })

            }, 200);

        });


    }, [])

    return (
        <Container>
            <ItemText className="itemText" ref={refItemText}>
                <h1>{itemDescription.title}</h1>
                {itemDescription.description &&
                    <p>{itemDescription.description}</p>
                }
            </ItemText>
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom order"
                rigthBtnText="Existing inventory"
                arrow={true}
                section="section1"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom order"
                rigthBtnText="Existing inventory"
                section="section2"
            />
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom order"
                rigthBtnText="Existing inventory"
                section="section3"
            />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom order"
                rigthBtnText="Existing inventory"
                section="section4"
            />
            <Section
                title="Solar Panel"
                description="Lowest Cost Solar Panels in America"
                backgroundImg="solar-panel.jpg"
                leftBtnText="ORDER NOW"
                rigthBtnText="LEARN MORE"
                section="section5"
            />
            <Section
                title="Solar Roof"
                description="Produce Clean Energy From Your Roof "
                backgroundImg="solar-roof.jpg"
                leftBtnText="ORDER NOW"
                rigthBtnText="LEARN MORE"
                section="section6"
            />
            <Section
                title="Accessories"
                backgroundImg="accessories.jpg"
                leftBtnText="SHOP NOW"
                section="section7"
            />
            <Buttons ref={refButons}>
                <ButtonGroup>
                    <LeftButton>
                        {buttons.leftBtnText}
                    </LeftButton>
                    {buttons.rigthBtnText &&
                        <RightButton>
                            {buttons.rigthBtnText}
                        </RightButton>
                    }
                </ButtonGroup>
                {buttons.arrow &&
                    <DownArrow src="/images/down-arrow.svg"/>
                }
            </Buttons>
        </Container>
    )
}

const Container = styled.div`
  height: 100vh;
`
const ItemText = styled.div`
  position: fixed;
  top: 100px;
  right: 0;
  left: 0;
  text-align: center;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;

`
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px;
  cursor: pointer;
`

const RightButton = styled(LeftButton)`
  background-color: white;
  color: #393c41;
`

const DownArrow = styled.img`
  height: 40px;
  margin-bottom: 10px;
  overflow: hidden;
  animation: animateDown infinite 1.5s;
`

export default Home