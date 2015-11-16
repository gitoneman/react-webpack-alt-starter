import alt from "../alt";

class MailActions{
    constructor() {
        this.generateActions(
            'sendMailSuccess',
            'sendMailFail',
            'sendingMail',
            'getFail'
        );
    }
    sendMail(formData) {
        this.actions.sendingMail(formData);
        $.ajax({type:"post",url:"/api/mail",data:formData})
        .done(data => {
            if(data.code){
                this.actions.sendMailFail();
                toastr.error(data.message);
            }else{
                this.actions.sendMailSuccess(formData);
                toastr.success(data.message);
            }
        })
    }
}
export default alt.createActions(MailActions);