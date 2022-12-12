import { LightningElement, api, track, wire} from 'lwc';
import getAccounts from '@salesforce/apex/getRecordDataController.getAccounts';

export default class Test extends LightningElement {
    @track accountList;
    @track customFormModal = false;
    @wire (getAccounts) wiredAccounts({data,error}){
        if (data) {
             this.accountList = data;
        console.log(data); 
        } else if (error) {
        console.log(error);
        }
   }

   customShowModalPopup() {    
    this.customFormModal = true;
}

customHideModalPopup() {
    this.customFormModal = false;
}
}