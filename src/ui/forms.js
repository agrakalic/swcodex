import styled from 'styled-components';
import { theme } from '../theme';

const formControlStyles = `
  background: ${theme.formControlBackgroundColor};
  border: ${theme.formControlBorder};
  border-radius: ${theme.formControlBorderRadius};
  box-shadow: ${theme.formControlBoxShadow};
  color: ${theme.formControlTextColor};
  padding: 0 ${theme.spacing[1]};
  height: ${theme.formControlHeight};
  line-height: ${theme.formControlHeight};
  width: 100%;
  margin: 0;
  vertical-align: middle;
  font-size: ${theme.fontSizeBase};  
  transition: ${theme.transitionBase};

  ::placeholder {
    opacity: .25;
  }
  
  &[disabled] {
		opacity: .5;
	}
  
  &:focus {    
    border: ${theme.formControlBorder};
    box-shadow: inset ${theme.formControlShadow};
    outline: none;
  }
`;

export const Input = styled.input`
  ${formControlStyles}
`;

export const Textarea = styled.textarea`
  ${formControlStyles}
  overflow: auto;
  height: calc(${theme.formControlHeight} * 3);
  resize: vertical;
`;

export const Select = styled.select`
  ${formControlStyles}
`;

export const Form = styled.form`
  margin: 0 0 ${theme.spacing[1]} 0;
`;

export const FormGroup = styled.div`
  margin: 0 0 ${theme.spacing[1]} 0;
`;

export const FormGroupCaption = styled.div`
  display: block;
  font-size: ${theme.fontSizeS};
  margin-top: 5px;
  opacity: 0.75;
  font-style: italic;
`;

export const FormActions = styled.div`
  margin: ${theme.spacing[2]} 0;
`;

export const Button = styled.button`
  display: inline-block;
  border: none;
  border-radius: ${theme.buttonBorderRadius};
  background-color: ${theme.buttonBackgroundColor};
  color: ${theme.buttonTextColor};
  padding: 0 ${theme.spacing[4]};
  height: ${theme.buttonHeight};
  line-height: ${theme.buttonHeight};
  cursor: pointer;
  vertical-align: middle;
  text-decoration: none !important;
  box-shadow: ${theme.buttonBoxShadow};
  font-size: ${theme.fontSizeBase};
  font-weight: ${theme.fontWeightBold};
  font-style: normal;
  text-transform: uppercase;
  transition: ${theme.transitionBase};

  &:hover {
    background-color: ${theme.buttonBackgroundColorHover};
    color: ${theme.buttonTextColorHover};
  }

  ${(props) =>
    props.blank &&
    `
      background: none;
      padding: 0;
      color: inherit;
      text-transform: none;

      &:hover {
        background: none;
        color: inherit;
      }
  `}
`;
