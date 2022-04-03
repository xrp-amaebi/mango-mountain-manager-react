import styled from "styled-components"
import { Link } from "react-router-dom"

import { colors } from "../../../styles/utils/colors"

export const Container = styled.section`
    position: relative;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: navy;
    background: white;
    // background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/background.png") !important;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`
export const RegisterHeader = styled.section`
    position: relative;
    width: inherit;
    border-bottom:  1px solid rgba(255, 255, 255, 0.5);
    border-bottom:  1px solid rgba(0, 0, 0, 0.35);
    padding: 2rem;
    color: whitesmoke;
    color: black;
    background: transparent;
    backdrop-filter: blur(15px);
    display: flex;
    justify-content: space-between;
    z-index: 1000;
`
export const Body = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    z-index: 4;
    /* background:rgba(255, 255, 255, 0.3); */
    backdrop-filter: blur(15px);
    width: inherit;
    height: inherit;
    tansition: ease-in 0.2s;

    // .hover
    // {
    //     // display: block;
    //     // border: 1px solid red;

    //     :hover
    //     {
    //         // padding: 1.3rem 0.3rem;
    //         margin: 1.3rem 0.3rem;
    //         border: 1px solid #000000;
    //     }
    // }

    .link
    {
        width: 200px;
        padding: .6rem;
        margin: .1rem;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid whitesmoke;
        border: 1px solid black;
        text-decoration: none;
        font-weight: 800;
        color: #ffffff;
        color: #000000;
        text-align: center;
        cursor: pointer;
        border-radius: 1px;

        :hover
        {
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
            color: whitesmoke;
        }
    }
`

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
`

export const TitleBody  = styled.div`

    display: ${({ display }) =>  display === "true" ? "block": "none"};
    
    .register
    {
        display: flex
        flex-direction: row;

        div
        {
            border-bottom: 1px solid ${colors.offWhite};
            padding: .5rem;
            margin-top: .2rem;
            display: flex;
            align-items: center;

            span
            {
                align-items: center;
                display: flex;
            }
        }

        .bitmap
        {
            height: 40px;
            border-radius: 6px;
            box-shadow: inset 2px 2px 1px rgba(255, 255, 255, .3),
                        inset -1px -1px 2px rgba(0, 0, 0, 0.1),
                        1px 1px 1px rgba(0, 0, 0, 0.1),
        }
    }

`
export const ALink = styled.button`
    display: ${({ display }) =>  display === "true"  ? "flex": "none"}
    min-width: 150px;
    padding: .6rem;
    background:rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid whitesmoke;
    border: 1px solid black;
    text-decoration: none;
    font-weight: 800;
    color: #ffffff;
    color: #000000;
    text-align: center;
    cursor: pointer;
    border-radius: 1px; 
`
export const AcceptDiv = styled.div`
    display: ${({ display }) =>  display === "true"  ? "flex": "none"} 
`
export const BLink = styled(Link)`
    width: 150px;
    padding: .6rem;
    background:rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid whitesmoke;
    border: 1px solid black;
    text-decoration: none;
    font-weight: 800;
    color: #ffffff;
    color: #000000;
    text-align: center;
    cursor: pointer;
    border-radius: 1px;
`
export const Paragragh = styled.div`
    color: whitesmoke;
    color: #000000;
    display: flex;
    justify-content: center;
    padding: .6rem;
`
export const Rules = styled.div`
    display: ${({ display }) => display === "true" ? "flex" : "none"};
    justify-content: center;
    padding: .6rem;
    color: whitesmoke;
    color: #000000;

`
export const Accept = styled.div`
    position: relative;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding-top: 2rem;
    display: ${({ display }) =>  display === "true" ? "flex" : "none"};
    align-items: center;
    justify-content: space-around;
`
export const Footer = styled.section`
    border-top:  1px solid rgba(255, 255, 255, 0.5);
    border-top:  1px solid rgba(0, 0, 0, 0.5);
    color: whitesmoke;
    color: #000000;
    background: transparent;
    backdrop-filter: blur(15px);
    display: flex;
    justify-content: space-between;
    position: relative;
    width: inherit;
`
export const Div = styled.div`
    color: whitesmoke;
    color: #000000;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;

    svg {
        margin-right: 0.5rem;
        fill: ${colors.offWhite};
        fill: #000000;
        stroke: ${colors.offWhite};
        stroke: #000000;
        height: 16px;
        width: 16px;
    }

    a
    {
        text-decoration: none;
        display: in-line block;
        font-weight: 800;
        color: #ffffff;
        color: #000000;
        padding: .6rem;
    }

    .registerBox
    {
        background: #000000;
        background: ${colors.black};
        border-radius: 1px;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        width: 10rem;
        height: 100%;
        height: inherit;
        cursor: pointer;
        box-shadow: inset 2px 2px 1px rgba(255, 255, 255, .3),
                    inset -1px -1px 2px rgba(0, 0, 0, 0.1),
                    1px 1px 1px rgba(0, 0, 0, 0.1),
        
    }
`
export const Title = styled.div`
    color: #ffffff;
    display: flex;
    justify-content: center;
    padding: .6rem;
`
export const NumberBox = styled.div`
    color: #ffffff;
    display: flex;
    justify-content: center;
    padding: .6rem;
    font-weight: 600;
    font-size: 2rem;

    border-top: 1px solid rgba(255, 255, 255, 0.2 );
`

export const Circles = styled.section`
    .circle1
    {
        content: "";
        background:linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(25, 255, 255, 0.5), rgba(255, 255, 255, 0.3));
        border-radius: 50%;
        width: 200px;
        height: 200px;
        position: absolute;
        top: 300px;
        left: 200px;
        z-index: 2;
    }

    .circle2
    {
        content: "";
        background:linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(25, 255, 255, 0.5), rgba(255, 255, 255, 0.3));
        border-radius: 50%;
        width: 200px;
        height: 200px;
        position: absolute;
        bottom: 300px;
        right: 200px;
        z-index: 2;
    }
`
export const CountDown = styled.section`
    display: flex;
    justify-content: space-around;
    text-align: center;
    cursor: pointer;

    .time
    {
        font-size: 2rem;
        color: ${colors.light};
    }

`

// import styled from "styled-components"
// import { Link } from "react-router-dom"

// import { colors } from "../../../styles/utils/colors"

// export const Container = styled.section`
//     position: relative;
//     padding: 0;
//     margin: 0;
//     box-sizing: border-box;
//     background: navy;
//     background: white;
//     // background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/background.png") !important;
//     z-index: 1;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     height: 100vh;
// `
// export const RegisterHeader = styled.section`
//     position: relative;
//     width: inherit;
//     border-bottom:  1px solid rgba(255, 255, 255, 0.5);
//     border-bottom:  1px solid rgba(0, 0, 0, 0.35);
//     padding: 2rem;
//     color: whitesmoke;
//     color: black;
//     background: transparent;
//     backdrop-filter: blur(15px);
//     display: flex;
//     justify-content: space-between;
//     z-index: 1000;
// `
// export const Body = styled.section`
//     position: relative;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     padding: 2rem;
//     z-index: 4;
//     /* background:rgba(255, 255, 255, 0.3); */
//     backdrop-filter: blur(15px);
//     width: inherit;
//     height: inherit;
//     tansition: ease-in 0.2s;

//     // .hover
//     // {
//     //     // display: block;
//     //     // border: 1px solid red;

//     //     :hover
//     //     {
//     //         // padding: 1.3rem 0.3rem;
//     //         margin: 1.3rem 0.3rem;
//     //         border: 1px solid #000000;
//     //     }
//     // }

//     .link
//     {
//         width: 200px;
//         padding: .6rem;
//         margin: .1rem;
//         background: rgba(255, 255, 255, 0.1);
//         backdrop-filter: blur(20px);
//         border: 1px solid whitesmoke;
//         border: 1px solid black;
//         text-decoration: none;
//         font-weight: 800;
//         color: #ffffff;
//         color: #000000;
//         text-align: center;
//         cursor: pointer;
//         border-radius: 1px;

//         :hover
//         {
//             background: rgba(0, 0, 0, 0.8);
//             backdrop-filter: blur(10px);
//             color: whitesmoke;
//         }
//     }
// `

// export const Wrapper = styled.div`
//     position: relative;
//     width: 100%;
// `

// export const TitleBody  = styled.div`

//     display: ${({ display }) =>  display === "true" ? "block": "none"};
    
//     .register
//     {
//         display: flex
//         flex-direction: row;

//         div
//         {
//             border-bottom: 1px solid ${colors.offWhite};
//             padding: .5rem;
//             margin-top: .2rem;
//             display: flex;
//             align-items: center;

//             span
//             {
//                 align-items: center;
//                 display: flex;
//             }
//         }

//         .bitmap
//         {
//             height: 40px;
//             border-radius: 6px;
//             box-shadow: inset 2px 2px 1px rgba(255, 255, 255, .3),
//                         inset -1px -1px 2px rgba(0, 0, 0, 0.1),
//                         1px 1px 1px rgba(0, 0, 0, 0.1),
//         }
//     }

// `
// export const ALink = styled.button`
//     display: ${({ display }) =>  display === "true"  ? "flex": "none"}
//     min-width: 150px;
//     padding: .6rem;
//     background:rgba(255, 255, 255, 0.1);
//     backdrop-filter: blur(20px);
//     border: 1px solid whitesmoke;
//     border: 1px solid black;
//     text-decoration: none;
//     font-weight: 800;
//     color: #ffffff;
//     color: #000000;
//     text-align: center;
//     cursor: pointer;
//     border-radius: 1px; 
// `
// export const AcceptDiv = styled.div`
//     display: ${({ display }) =>  display === "true"  ? "flex": "none"} 
// `
// export const BLink = styled(Link)`
//     width: 150px;
//     padding: .6rem;
//     background:rgba(255, 255, 255, 0.1);
//     backdrop-filter: blur(20px);
//     border: 1px solid whitesmoke;
//     border: 1px solid black;
//     text-decoration: none;
//     font-weight: 800;
//     color: #ffffff;
//     color: #000000;
//     text-align: center;
//     cursor: pointer;
//     border-radius: 1px;
// `
// export const Paragragh = styled.div`
//     color: whitesmoke;
//     color: #000000;
//     display: flex;
//     justify-content: center;
//     padding: .6rem;
// `
// export const Rules = styled.div`
//     display: ${({ display }) => display === "true" ? "flex" : "none"};
//     justify-content: center;
//     padding: .6rem;
//     color: whitesmoke;
//     color: #000000;

// `
// export const Accept = styled.div`
//     position: relative;
//     margin-top: 2rem;
//     margin-bottom: 2rem;
//     padding-top: 2rem;
//     display: ${({ display }) =>  display === "true" ? "flex" : "none"};
//     align-items: center;
//     justify-content: space-around;
// `
// export const Footer = styled.section`
//     border-top:  1px solid rgba(255, 255, 255, 0.5);
//     border-top:  1px solid rgba(0, 0, 0, 0.5);
//     color: whitesmoke;
//     color: #000000;
//     background: transparent;
//     backdrop-filter: blur(15px);
//     display: flex;
//     justify-content: space-between;
//     position: relative;
//     width: inherit;
// `
// export const Div = styled.div`
//     color: whitesmoke;
//     color: #000000;
//     display: flex;
//     text-align: center;
//     justify-content: center;
//     align-items: center;

//     svg {
//         margin-right: 0.5rem;
//         fill: ${colors.offWhite};
//         fill: #000000;
//         stroke: ${colors.offWhite};
//         stroke: #000000;
//         height: 16px;
//         width: 16px;
//     }

//     a
//     {
//         text-decoration: none;
//         display: in-line block;
//         font-weight: 800;
//         color: #ffffff;
//         color: #000000;
//         padding: .6rem;
//     }

//     .registerBox
//     {
//         background: #000000;
//         background: ${colors.black};
//         border-radius: 1px;
//         color: #ffffff;
//         display: flex;
//         flex-direction: column;
//         width: 10rem;
//         height: 100%;
//         height: inherit;
//         cursor: pointer;
//         box-shadow: inset 2px 2px 1px rgba(255, 255, 255, .3),
//                     inset -1px -1px 2px rgba(0, 0, 0, 0.1),
//                     1px 1px 1px rgba(0, 0, 0, 0.1),
        
//     }
// `
// export const Title = styled.div`
//     color: #ffffff;
//     display: flex;
//     justify-content: center;
//     padding: .6rem;
// `
// export const NumberBox = styled.div`
//     color: #ffffff;
//     display: flex;
//     justify-content: center;
//     padding: .6rem;
//     font-weight: 600;
//     font-size: 2rem;

//     border-top: 1px solid rgba(255, 255, 255, 0.2 );
// `

// export const Circles = styled.section`
//     .circle1
//     {
//         content: "";
//         background:linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(25, 255, 255, 0.5), rgba(255, 255, 255, 0.3));
//         border-radius: 50%;
//         width: 200px;
//         height: 200px;
//         position: absolute;
//         top: 300px;
//         left: 200px;
//         z-index: 2;
//     }

//     .circle2
//     {
//         content: "";
//         background:linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(25, 255, 255, 0.5), rgba(255, 255, 255, 0.3));
//         border-radius: 50%;
//         width: 200px;
//         height: 200px;
//         position: absolute;
//         bottom: 300px;
//         right: 200px;
//         z-index: 2;
//     }
// `
// export const CountDown = styled.section`
//     display: flex;
//     justify-content: space-around;
//     text-align: center;
//     cursor: pointer;

//     .time
//     {
//         font-size: 2rem;
//         color: ${colors.light};
//     }

// `