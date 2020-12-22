import React from "react"

const refArray = [];
let value = "";
const elementsArray = [1, 2, 3, 4];

class OTPBox extends React.Component{
    constructor(props){
        super();
    }
    navigateBasedonArrowKeyPressed(e, i) {
        if (e.key >= 0 && e.key <= 9) refArray[i].value = e.key;
        if (e.target.value && i < 3) refArray[i + 1].focus();
        switch (e.key) {
          case "ArrowRight":
            if (i < 3) refArray[i + 1].focus();
            break;
          case "ArrowLeft":
            if (i > 0) refArray[i - 1].focus();
            break;
          case "Backspace":
            if (i > 0 && !e.target.value) refArray[i - 1].focus();
            break;
          default:
            break;
        }
        value = `${refArray[0].value}${refArray[1].value}${refArray[2].value}${refArray[3].value}`;
        this.props.setOTPValue(value);
        if (value.length == 4) {
          this.props.OTPverfication(value);
        }
      }
    render(){
        return(
            <>
                {elementsArray.map((k, i) => (
                      <input
                        className="otp-box "
                        type="number"
                        key={i}
                        ref={(ref) => (refArray[i] = ref)}
                        onKeyUp={(e) =>
                          this.navigateBasedonArrowKeyPressed(e, i)
                        }
                        maxLength="1"
                        minLength="1"
                      />
                    ))}
            </>
        )
    }
}
export default OTPBox