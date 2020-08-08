import React from "react"


class GetOTP extends React.Component{
    constructor(props){
        super();
        this.input_ref = []
    }

    componentDidMount(){
        this.input_ref.map((inputEle,index)=>{
            inputEle.onKeyUp = e=>{
                alert(`onkeydown`)
                if(e.keyCode >= 48 || e.keyCode <= 57) {
                    if(!this.input_ref[index+1].value)
                    this.input_ref[index+1].focus()
                 
                }
            }
        })
        // $('.digit-group').find('input').each(function() {

        //     $(this).attr('maxlength', 1);
        //     $(this).on('keyup', function(e) {
        //         var parent = $($(this).parent());
                
        //         if(e.keyCode === 8 || e.keyCode === 37) {
        //             var prev = parent.find('input#' + $(this).data('previous'));
                    
        //             if(prev.length) {
        //                 $(prev).select();
        //             }
        //         } else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
        //             var next = parent.find('input#' + $(this).data('next'));
                    
        //             if(next.length) {
        //                 $(next).select();
        //             } else {
        //                 if(parent.data('autosubmit')) {
        //                     parent.submit();
        //                 }
        //             }
        //         }
        //     });
        // });
    }


    render(){
        return( 
            <div className="mobile-verification ">
                <form onSubmit={this.props.requestOTP}>
                    <input  type="tel" class="form-control" name="mobile" minLength="10" maxLength="10" placeholder="Enter Mobile Number" onChange={this.props.handleChange}/>
                </form>
                    <div className="row mt-30">
                        { this.props.requestedOTP && 
                            <>
                            <form onSubmit={this.props.OTPverfication}>
                            {/* <ul className="col-12 OTP-verification" name="OTP">
                            <li><input ref={i => this.input_ref[0]=i} type="text" id="otpbox1" maxLength="1" minLength="1"/> </li>
                            <li><input ref={i => this.input_ref[1]=i} type="text" id="otpbox2" maxLength="1" minLength="1"/> </li>
                            <li><input ref={i => this.input_ref[2]=i} type="text" id="otpbox3" maxLength="1" minLength="1"/> </li>
                            <li><input ref={i => this.input_ref[3]=i} type="text" id="otpbox4" maxLength="1" minLength="1"/> </li>
                            </ul> */}
                            <input type="text" maxLength="4" name="OTP" onChange={this.props.handleChange}/>
                            </form>
                            
                            <a href="#" className="col-4" style={{marginTop:"20px"}} onClick={ this.props.resendOTP }>Resend OTP</a>
                            <small className="error-message col-12" style={{color:"#e22a28"}}>Wrong Name</small>
                            </>
                        }
                        
                    </div>
                
            </div>
        )  
    }
}

export default GetOTP;