import {expect ,Locator ,Page} from "@playwright/test"
export class SliderFormPage
{
    readonly page :Page;
    readonly sliderFormHyperLink:Locator;
    readonly dragPointer:Locator;
    readonly dragOutputValue:Locator;



    constructor(page:Page){
        this.page=page;
        this.sliderFormHyperLink=page.getByRole('link',{name:"Drag & Drop Sliders"})
        this.dragPointer=page.locator("//h4 [text()=' Default value 15']/following-sibling::div//input[@type='range']")
        this.dragOutputValue=page.locator("#rangeSuccess")

    }

   public async navigateSliderFormPage(){
        this.sliderFormHyperLink.click();

    }

   public async dragSliderInput(input:number){
        await this.dragPointer.focus();
        while(Number (await this.dragOutputValue.textContent())<input){
            await this.page.keyboard.press('ArrowRight');
        }
    }

    async validateOutPut(expectOut: number){
        console.log(this.dragOutputValue.textContent());
        await expect(this.dragOutputValue).toHaveText(String(expectOut));
    }
}