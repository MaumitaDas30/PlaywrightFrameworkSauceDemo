import {Locator, Page, expect} from '@playwright/test'
 class Addemployee {
   
   txtFirstName : Locator
   txtMiddleName : Locator
   txtLastName : Locator
   txtEmpId : Locator
   profilePic : Locator
   BtnSave : Locator

   constructor(page: Page) {
    
    this.txtFirstName = page.getByPlaceholder("First Name", {exact:true})
    this.txtMiddleName = page.getByPlaceholder("Middle Name", {exact:true})
    this.txtLastName = page.getByPlaceholder("Last Name", {exact:true})

    this.txtEmpId = page.locator("//label[text()='Employee Id']/parent::div/following-sibling::div/input")

    this.profilePic= page.locator("input[type='file']")
    
    
    //setInputFiles("C:/Users/maumi/Downloads/yellow-flowe.jpg")

    this.BtnSave= page.getByRole("button", {name:'Save', exact:true})
   }

    async entername(firstname:any,middlename:any, lastname:any){
     await this.txtFirstName.fill(firstname)
     await this.txtMiddleName.fill(middlename)
     await this.txtLastName.fill(lastname)
    }

    async employeeid(empid:any)
    {
        await this.txtEmpId.fill(empid)
    }

    async uploadPicture(picturepath:any){
      if(picturepath){
        await this.profilePic.setInputFiles(picturepath)
      }
    }

    async saveform(){
      await this.BtnSave.click()
    }
}
export default Addemployee
