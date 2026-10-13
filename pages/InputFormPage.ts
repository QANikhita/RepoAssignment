import { expect, Locator,Page } from "@playwright/test";

export class InputFormPage {

    readonly page:Page;
    readonly inputFormHyperLink:Locator;
    readonly submitButton:Locator;
    readonly nameInputField:Locator;
    readonly emailInputField:Locator;
    readonly passwordInputField:Locator;
    readonly companyInputField:Locator;
    readonly webSiteInputField:Locator;
    readonly countryDropDown:Locator;
    readonly cityInputField:Locator;
    readonly addressInputField01:Locator;
    readonly addressInputFiled02:Locator;
    readonly stateInputField:Locator;
    readonly zipCodeInputField:Locator;
    readonly successMessageText:Locator;

    constructor(page:Page){
        this.page=page ;
this.inputFormHyperLink = page.getByRole('link', { name: 'Input Form Submit' });
this.nameInputField=page.getByPlaceholder("Name",{exact:true})
this.emailInputField=page.getByPlaceholder("Email",{exact:true})
this.passwordInputField=page.getByPlaceholder("Password")
this.webSiteInputField=page.getByPlaceholder("Website")
this.cityInputField=page.getByPlaceholder("City")
this.companyInputField=page.getByPlaceholder("Company")
this.countryDropDown=page.locator("//select[@name='country']")
this.addressInputField01=page.getByPlaceholder('Address 1')
this.addressInputFiled02=page.getByPlaceholder('Address 2')
this.stateInputField=page.getByPlaceholder('State')
this.zipCodeInputField=page.getByPlaceholder('Zip code')
this.submitButton=page.getByText("Submit",{exact:true})
this.successMessageText=page.locator(".success-msg")
    }
//Thanks for contacting us, we will get back to you shortly.

 public  async navigateInputForm (){
    await this.inputFormHyperLink.click();

  } 
  
  async  clickOnSubmitButton(){
    await this.submitButton.click()
  }

  async enterNameField(name:string){
await this.nameInputField.fill(name)
  }

  async enterEmail(email:string){
    await this.emailInputField.fill(email)
  }

  async enterPassword(pass:string)
  {
    await this.passwordInputField.fill(pass)
  }

  async enterWebsiteUrl(website:string){
    await this.webSiteInputField.fill(website)
  }

  async selectCountryOption(country:string){
    await this.countryDropDown.selectOption({label:country})
  }

  async enterAddress01(address:string){
    await this.addressInputField01.fill(address)
  }
  async enterCity(city:string){
    await this.cityInputField.fill(city)
  }

  async enterCompany(company:string){
    await this.companyInputField.fill(company)
  }
async enterAddress02(address2:string){
    await this.addressInputFiled02.fill(address2)
}

async enterState(state:string){
    await this.stateInputField.fill(state)
}

async enterZip(zip:string){
    await this.zipCodeInputField.fill(zip)
}




}