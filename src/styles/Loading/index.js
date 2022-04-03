import React from "react";
import { Container } from "./style";
import { Button } from "../Button/style"

export const LoadingButton = ({
  width, color, text,
  margin, border, padding, loading,
  ...rootDOMAttributes
}) => (
  <Container>
    <Button
      width={width}
      color={color}
      margin={margin}
      border={border}
      padding={padding}
      disabled={loading}
      {...rootDOMAttributes}
      dashboard={"#1a73e8"}
    >
      {" "}
      
      {
        loading ? (
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        ) : (
          <p>{text}</p>
        )
      }
    </Button>
  </Container>
)
