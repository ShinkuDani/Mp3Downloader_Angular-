import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule, QueryList } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DownloaderService } from '../services/downloader.service';
import { mp3Data } from '../models/mp3Info';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  linkVideo: string = ""
  videoData?: mp3Data = {
    title: '',
    link: '',
    length: '',
    size: ''
  }

  quality: string[] = [
    '0','64', '128', '192', '256', '320'
  ]

  chosenQuality: string = '0'

 constructor( private downloader: DownloaderService){

 }

 
 link: string = 'https://www.youtube.com/watch?v=mQM6Oq5OkBk&ab_channel=CloudDrop'

 ngOnInit(): void {
  this.link = 'https://www.youtube.com/watch?v=mQM6Oq5OkBk&ab_channel=CloudDrop'

 }

 onSubmit(form: NgForm){
  form.reset()
 }

 printar(info: string){
  console.log(info)
 }

 setQuality(audioQuality: string){
  this.chosenQuality = audioQuality;
  console.log(this.chosenQuality)
}

 baixarVideo(){
  if(this.chosenQuality != "0"){
  console.log("Funcionando Qualidade")
    
    this.getVideoLinkQuality(this.linkVideo, this.chosenQuality)
  } else(
    console.log("Funcionando sem qualidade")

    //this.getVideoLink(this.linkVideo)
  )
 }

 private getVideoLink(videoLink: string){
  this.downloader.getMp3music(videoLink)
    .subscribe({
      next: (response) => {
        this.videoData = response

        console.log(response)
        window.open(response.link, "_blank")
      }
    })
 }

 private getVideoLinkQuality(videoLink: string, quality: string){
  this.downloader.getMp3musicQuality(videoLink, quality)
    .subscribe({
      next: (response) => {
        this.videoData = response

        console.log(response)
        window.open(response.link, "_blank")
      }
    })
 }
 




}
