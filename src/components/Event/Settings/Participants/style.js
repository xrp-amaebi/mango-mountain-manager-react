import styled from "styled-components"
import { colors } from "../../../../styles/utils/colors"
import media from "../../../../styles/utils/media"
import { SlideUp } from "../../../../styles/utils/animation"

export const Container = styled.div`
  min-height: 100%;
  width: 90%;
  margin: 1rem auto;
  padding: 1rem;
  background-color: ${colors.darkBlue};
  border-radius: 5px;
  background-image: url("/img/background.png")
`
export const InnerContainer = styled.div`
  width: 70%;
  margin: auto;
  ${SlideUp}

  ${
        media.mobile`
            width: 85%
        `
    }
`
export const EditContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Heading = styled.h2`
  color: ${colors.black};
  margin: 1rem 0.5rem;
`
export const Line = styled.hr`
  width: 100%;
  background-color: #e6e2e2;
`
export const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(0, 1fr);
  justify-content: center;
`

export const ProfileList = styled.div`
  background: rgba(230, 224, 224, 0.2);
  border: 1px solid #c4c4c4;
  box-sizing: border-box; 
  border-radius: 5px;
  width: 100%;
  padding: .5rem;
  display: flex;
  backdrop-filter: blur(15px);
  z-index: 5;
  margin-bottom: 1rem;

  section
  {
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    color: white;

    .circle
    {
      position: relative;
      background-image: linear-gradient(to bottom, ${colors.offWhite}, ${colors.sky}, rgba(230, 224, 224, 0.2));
      border: ${colors.darkBlue};
      width: 100%;
      padding: 1rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      object-fit: cover;
    }
  }
`
export const AgeRow = styled.div`
  display: flex;
  align-items: center;

  input[type='checkbox'],
  input[type='radio'] {
    --active: #275EFE;
    --active-inner: #fff;
    --focus: 2px rgba(39, 94, 254, .3);
    --border: #BBC1E1;
    --border-hover: #275EFE;
    --background: #fff;
    --disabled: #F6F8FF;
    --disabled-inner: #E1E6F9;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 21px;
    outline: none;
    display: inline-block;
    vertical-align: top;
    position: relative;
    margin: 0;
    cursor: pointer;
    border: 1px solid var(--bc, var(--border));
    background: var(--b, var(--background));
    transition: background .3s, border-color .3s, box-shadow .2s;
    &:after {
      content: '';
      display: block;
      left: 0;
      top: 0;
      position: absolute;
      transition: transform var(--d-t, .3s) var(--d-t-e, ease), opacity var(--d-o, .2s);
    }
    &:checked {
      --b: var(--active);
      --bc: var(--active);
      --d-o: .3s;
      --d-t: .6s;
      --d-t-e: cubic-bezier(.2, .85, .32, 1.2);
    }
    &:disabled {
      --b: var(--disabled);
      cursor: not-allowed;
      opacity: .9;
      &:checked {
        --b: var(--disabled-inner);
        --bc: var(--border);
      }
      & + label {
        cursor: not-allowed;
      }
    }
    &:hover {
      &:not(:checked) {
        &:not(:disabled) {
          --bc: var(--border-hover);
        }
      }
    }
    &:focus {
      box-shadow: 0 0 0 var(--focus);
    }
    &:not(.switch) {
      width: 21px;
      &:after {
        opacity: var(--o, 0);
      }
      &:checked {
        --o: 1;
      }
    }
    & + label {
      font-size: 14px;
      line-height: 21px;
      display: inline-block;
      vertical-align: top;
      cursor: pointer;
      margin-left: 4px;
    }
  }
  input[type='checkbox'] {
    &:not(.switch) {
      border-radius: 7px;
      &:after {
        width: 5px;
        height: 9px;
        border: 2px solid var(--active-inner);
        border-top: 0;
        border-left: 0;
        left: 7px;
        top: 4px;
        transform: rotate(var(--r, 20deg));
      }
      &:checked {
        --r: 43deg;
      }
    }
    &.switch {
      width: 38px;
      border-radius: 11px;
      &:after {
        left: 2px;
        top: 2px;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        background: var(--ab, var(--border));
        transform: translateX(var(--x, 0));
      }
      &:checked {
        --ab: var(--active-inner);
        --x: 17px;
      }
      &:disabled {
        &:not(:checked) {
          &:after {
            opacity: .6;
          }
        }
      }
    }
  }
  input[type='radio'] {
    border-radius: 50%;
    &:after {
      width: 19px;
      height: 19px;
      border-radius: 50%;
      background: var(--active-inner);
      opacity: 0;
      transform: scale(.6, .6);
      margin-left: .09rem;
      margin-top: .08rem;
    }
    &:checked {
      --s: .5;
    }
  }
}

// Demo

ul {
  /* margin: 12px; */
  padding: 0;
  list-style: none;
  width: 100%;
  /* max-width: 320px; */
  display: flex;
  li {
    margin: 16px 1rem;
    position: relative;
  }
}

// Center & dribbble

`
export const Paragraph = styled.p`
  color: ${colors.offWhite};
  font-weight: 400;
`

export const Title = styled(Paragraph)`
  font-size: 1.2rem;
  // margin-top: 1rem;
  color: ${colors.offWhite};
  line-height: 2rem;
`

