import {expect ,Locator,Page} from '@playwright/test';
 export  class SimpleFormPage {
    readonly page:Page;
    readonly simpleFormHyperLink:Locator;
    readonly messageInputfield:Locator;
    readonly checkValueButton:Locator;
    readonly messageText:Locator;


    constructor(page:Page){
        this.page=page;
        this.simpleFormHyperLink=page.getByText('Simple Form Demo',{exact:true})
        this.messageInputfield=page.getByPlaceholder('Please enter your Message')
        this.checkValueButton=page.locator('#showInput')
        this.messageText=page.locator('#message')

    }

   public async clickOnSimpleDemoForm(){
    
        await this.simpleFormHyperLink.click();

    }
   

    public async enterMessage(Message:string){
       await this.messageInputfield.fill(Message);
       }

    public async submitMessage()
    {
        await this.checkValueButton.click();
      
        }
  

 }