import { Component, OnInit } from "@angular/core";
import { TranslationService } from "./translation.service";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { TranslationObject } from "./translationObject";

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{

    translationForm: FormGroup;
    translationOjb: TranslationObject;
    translatedText:String = "Translated text will come here...";
    targetLanguages=[
        {name:"Select Target Language", value:""},
        {name:"English", value:"en"},
        {name:"Spanish", value:"es"},
        {name:"French", value:"fr"},
        {name:"Italian", value:"it"}
    ];
    
    constructor(private fb: FormBuilder, private translationService : TranslationService){
        this.translationForm = this.fb.group({
            inputText: new FormControl(null, Validators.required),
            destinationLang: new FormControl("Select Target Language", Validators.required)
        });
    }

    ngOnInit(){
        
        this.translationForm.get("destinationLang").setValue(this.targetLanguages[0].name);
    }

    onSubmit(){
        this.translationOjb = new TranslationObject("en",
        this.translationForm.get("destinationLang").value, this.translationForm.get("inputText").value,
        "");
        //this.translationForm.get("targetLanguage").value);
        //this.translationService.getTranslation1(this.translationOjb).then(translatedObj => this.translationOjb = translatedObj);;
        this.translationService.getTranslation(this.translationOjb).subscribe(
            result => {
                this.translationOjb = result;
                this.translatedText = result.translatedText;
                console.log("traslated obj:"+this.translationOjb);
                console.log("traslated text:"+this.translatedText);
            }
        );
        
    }
}